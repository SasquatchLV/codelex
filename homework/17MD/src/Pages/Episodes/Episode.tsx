import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { EpisodesModel } from '../../Models/EpisodesModel'
import { PageInfo } from '../../Models/PageInfoModel'
import Loader from '../../components/Loader/Loader'
import SingleEpisodeCard from '../../components/EpisodeCard/SingleEpisodeCard'
import { CharacterType } from '../../Models/CharacterModel'
import './Episodes.scss'

const Episode = () => {
  const { id } = useParams()
  const [episode, setEpisode] = useState<EpisodesModel>()
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<number>(Number(id))
  const [pageInfo, setPageInfo] = useState<PageInfo>()
  const [singleCharArray, setSingleCharArray] = useState<CharacterType[]>([])

  const getEpisode = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/episode/${currentPage}`)
      setEpisode(response.data)
    } catch (error) {
      navigate('/episodes')
    } finally {
      setLoading(false)
    }
  }

  const getPageInfo = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/episode/')
    setPageInfo(response.data.info)
  }

  const getCharacters = async () => {
    const epInfo = await axios.get(`https://rickandmortyapi.com/api/episode/${currentPage}`)
    const { characters } = epInfo.data
    const charactersArray: CharacterType[] = []
    characters.forEach(async (character: string) => {
      const response = await axios.get(character)
      charactersArray.push(response.data)
      setSingleCharArray([...charactersArray])
    })
  }

  useEffect(() => {
    getPageInfo()
    if (id) {
      getEpisode()
      navigate(`/episodes/${currentPage}`)
      getCharacters()
    }
  }, [currentPage])

  return (
    <div className="episode-single-container">
      {loading && <Loader />}
      {episode && (
        <>
          <SingleEpisodeCard
            key={episode.id}
            id={episode.id}
            name={episode.name}
            // eslint-disable-next-line camelcase
            air_date={episode.air_date}
            episode={episode.episode}
            created={episode.created}
            characters={singleCharArray}
            charCount={singleCharArray.length}
          />

          <div className="button-container">
            {currentPage > 1 && (
              <button
                className="character__button"
                onClick={() => {
                  setCurrentPage(currentPage - 1)
                }}
              >
                Previous
              </button>

            )}
            <button className="character__button" onClick={() => navigate('/episodes')}>
              Back
            </button>
            {pageInfo && currentPage < pageInfo?.count && (
              <button
                className="character__button"
                onClick={() => {
                  setCurrentPage(currentPage + 1)
                }}
              >
                Next
              </button>
            )}
          </div>
        </>

      )}
    </div>

  )
}

export default Episode
