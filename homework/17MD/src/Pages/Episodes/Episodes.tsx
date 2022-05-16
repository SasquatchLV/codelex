import { useState, useEffect } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { useSearchParams } from 'react-router-dom'
import { EpisodesModel } from '../../Models/EpisodesModel'
import { PageInfo } from '../../Models/PageInfoModel'
import EpisodeCard from '../../components/EpisodeCard/EpisodeCard'
import Loader from '../../components/Loader/Loader'
import './Episodes.scss'

const Episodes = () => {
  const [allEpisodes, setAllEpisodes] = useState<EpisodesModel[]>()
  const [searchParams, setSearchParams] = useSearchParams('')
  const [loading, setLoading] = useState<boolean>(false)
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [errorMessage, setErrorMessage] = useState<string>()
  const [nextPageUrl, setNextPageUrl] = useState<string>()
  const [hasMore, setHasMore] = useState<boolean>(true)

  const getAllEpisodes = async () => {
    setLoading(true)
    setErrorMessage('')
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/?${searchParams}`)
      setAllEpisodes(response.data.results)
      setPageInfo(response.data.info)
      if (response.data.info.next === null) {
        setHasMore(false)
      } else {
        setNextPageUrl(response.data.info.next)
        setHasMore(true)
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const message = error.response?.status === 404 ? 'No episodes found with search criteria' : error.message
        setErrorMessage(message)
        setAllEpisodes(undefined)
        setPageInfo(undefined)
      } else {
        setErrorMessage('Not axios error')
      }
    } finally {
      setLoading(false)
    }
  }

  const fetchMoreEpisodes = async () => {
    setLoading(true)
    setErrorMessage('')
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
    getAllEpisodes()
  }, [searchParams])

  const fetchData = async () => {
    const moreEpisodes = await fetchMoreEpisodes()
    if (allEpisodes) {
      setAllEpisodes([...allEpisodes, ...moreEpisodes])
    }
  }

  return (
    <div>
      <h1 className="heading">Episodes Page</h1>

      <>
        {loading && <Loader />}

        {pageInfo
          && <h1 className="heading">{`Total: ${pageInfo.pages} pages and ${pageInfo.count} episodes`}</h1>}

        <div className="action-container">
          <label className="filter-label">
            Filter by name:
            <input
              type="text"
              onChange={
                (e) => {
                  setSearchParams({ name: e.target.value })
                }
              }
            />
          </label>
        </div>

        {errorMessage && <div className="heading">{errorMessage}</div>}

        {allEpisodes && (
          <InfiniteScroll
            dataLength={allEpisodes.length}
            next={fetchData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
            endMessage={(
              <p className="heading">
                <b>No more pages to load...</b>
              </p>
            )}
          >
            <div className="episode-container">
              {allEpisodes && allEpisodes.map(({
                // eslint-disable-next-line camelcase
                id, name, air_date, episode, created,
              }) => (
                <EpisodeCard
                  key={id}
                  id={id}
                  name={name}
                  // eslint-disable-next-line camelcase
                  air_date={air_date}
                  episode={episode}
                  created={created}
                />
              ))}
            </div>
          </InfiniteScroll>
        )}
      </>

    </div>
  )
}

export default Episodes
