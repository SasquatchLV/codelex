import { useState, useEffect } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { CharacterType } from '../../Models/CharacterModel'
import { PageInfo } from '../../Models/PageInfoModel'
import CharacterCard from '../../components/CharacterCard/CharacterCard'
import Loader from '../../components/Loader/Loader'
import './Characters.scss'

const Characters = () => {
  const [allCharacters, setAllCharacters] = useState<CharacterType[]>()
  const [loading, setLoading] = useState<boolean>(false)
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [errorMessage, setErrorMessage] = useState<string>()
  const [nextPageUrl, setNextPageUrl] = useState<string>()
  const [hasMore, setHasMore] = useState<boolean>(true)

  const getAllCharacters = async () => {
    const filterParams = activeFilter === 'all' ? '' : `?status=${activeFilter}`
    setLoading(true)
    setErrorMessage('')
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${filterParams}`)
      setAllCharacters(response.data.results)
      setPageInfo(response.data.info)
      if (response.data.info.next === null) {
        setHasMore(false)
      } else {
        setNextPageUrl(response.data.info.next)
        setHasMore(true)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const messasge = error.response?.status === 404 ? '404 not found' : error.message
        setErrorMessage(messasge)
      } else {
        setErrorMessage('Not axios error')
      }
    } finally {
      setLoading(false)
    }
  }

  const fetchMoreCharacters = async () => {
    setLoading(true)
    setTimeout(() => { setLoading(false) }, 400)
    try {
      if (nextPageUrl) {
        const response = await axios.get(nextPageUrl)
        setNextPageUrl(response.data.info.next)
        const data = response.data.results
        return data
      }
      setHasMore(false)
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.status === 404 ? '404 not found' : error.message
        setErrorMessage(message)
      } else {
        setErrorMessage('Not axios error')
      }
    }
    return []
  }

  useEffect(() => {
    getAllCharacters()
  }, [activeFilter])

  const fetchData = async () => {
    const moreCharacters = await fetchMoreCharacters()
    if (allCharacters) {
      setAllCharacters([...allCharacters, ...moreCharacters])
    }
  }

  return (
    <div>
      <h1 className="heading">Characters Page</h1>

      <>
        {loading && <Loader />}

        {errorMessage && <div className="heading">{errorMessage}</div>}

        {pageInfo
          && <h1 className="heading">{`Total: ${pageInfo.pages} pages and ${pageInfo.count} characters`}</h1>}

        {
          allCharacters && (
            <div className="action-container">
              <button onClick={() => {
                setActiveFilter('all')
              }}
              >
                All

              </button>
              <button onClick={() => {
                setActiveFilter('alive')
              }}
              >
                Alive

              </button>
              <button onClick={() => {
                setActiveFilter('dead')
              }}
              >
                Dead

              </button>
              <button onClick={() => {
                setActiveFilter('unknown')
              }}
              >
                Unknown

              </button>
            </div>
          )
        }

        {allCharacters && (
          <InfiniteScroll
            dataLength={allCharacters.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={(
              <p className="heading">
                <b>Yay! You have seen it all</b>
              </p>
            )}
          >
            <div className="character-container">
              {allCharacters && allCharacters.map(({
                id, name, image, status, species, gender,
              }) => (
                <CharacterCard
                  key={id}
                  id={id}
                  name={name}
                  image={image}
                  status={status}
                  species={species}
                  gender={gender}
                />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </>

    </div>
  )
}

export default Characters
