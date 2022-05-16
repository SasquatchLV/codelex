import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CharacterType } from '../../Models/CharacterModel'
import { PageInfo } from '../../Models/PageInfoModel'
import Loader from '../../components/Loader/Loader'
import './Characters.scss'

const Character = () => {
  const { id } = useParams()
  const [character, setCharacter] = useState<CharacterType>()
  const [loading, setLoading] = useState<boolean>(false)
  const navigate = useNavigate()
  const [currentPage, setCurrentPage] = useState<number>(Number(id))
  const [pageInfo, setPageInfo] = useState<PageInfo>()

  const getCharacter = async () => {
    setLoading(true)
    try {
      const response = await axios.get(`https://rickandmortyapi.com/api/character/${currentPage}`)
      setCharacter(response.data)
    } catch (error) {
      navigate('/characters')
    } finally {
      setLoading(false)
    }
  }

  const getPageInfo = async () => {
    const response = await axios.get('https://rickandmortyapi.com/api/character/')
    setPageInfo(response.data.info)
  }

  useEffect(() => {
    getPageInfo()
    if (id) {
      getCharacter()
      navigate(`/characters/${currentPage}`)
    }
  }, [currentPage])

  return (
    <div className="character-single-container">
      {loading && <Loader />}
      {character && (
        <div className="character-single">
          <div>
            <img className="character-single__image" src={character.image} alt={character.name} />
          </div>
          <div className="character__info--wrapper">
            <div className="character__name" style={{ fontSize: '3rem', textAlign: 'center' }}>
              {character.name}
            </div>
            <div className="character__info" style={{ fontSize: '1.5rem' }}>
              <span>
                Status:
                <br />
                {/* If status is Alive, then color is green */}
                {character.status === 'Alive' ? (
                  <span className="character__status--alive">{character.status}</span>
                ) : (
                  <span className="character__status--dead">{character.status}</span>
                )}
              </span>

              <span>
                Species:
                <br />
                {character.species}
              </span>

              <span>
                Gender:
                <br />
                {character.gender}
              </span>

            </div>
            <div className="character-location">
              <span>
                Location:
                {' '}
                {character.location.name}
              </span>
            </div>
            <div className="character-origin">
              <span>
                Origin:
                {' '}
                {character.origin.name}
              </span>
            </div>
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
            <button
              className="character__button"
              onClick={() => navigate('/characters')}
            >
              Back
            </button>
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
          </div>
        </div>
      )}
    </div>

  )
}

export default Character
