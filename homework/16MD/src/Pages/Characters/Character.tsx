import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { CharacterType, getCharacter } from '../../Data/CharacterData'
import './Characters.scss'

const Character = () => {
  const [currentChar, setCurrentChar] = useState<CharacterType>()
  const { id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const character = getCharacter(Number(id))
    if (character) {
      setCurrentChar(character)
    } else {
      navigate('/characters')
    }
  }, [])

  return (
    // Create a card with character information inside
    <div className="character-single-container">
      {currentChar && (
        <div className="character-single">
          <div>
            <img className="character-single__image" src={currentChar.image} alt={currentChar.name} />
          </div>
          <div className="character__info--wrapper">
            <div className="character__name" style={{ fontSize: '3rem', textAlign: 'center' }}>
              {currentChar.name}
            </div>
            <div className="character__info" style={{ fontSize: '1.5rem' }}>
              <span>
                Status:
                <br />
                {/* If status is Alive, then color is green */}
                {currentChar.status === 'Alive' ? (
                  <span className="character__status--alive">{currentChar.status}</span>
                ) : (
                  <span className="character__status--dead">{currentChar.status}</span>
                )}
              </span>

              <span>
                Species:
                <br />
                {currentChar.species}
              </span>

              <span>
                Gender:
                <br />
                {currentChar.gender}
              </span>

            </div>
            <div className="character-location">
              <span>
                Location:
                {' '}
                {currentChar.location.name}
              </span>
            </div>
            <div className="character-origin">
              <span>
                Origin:
                {' '}
                {currentChar.origin.name}
              </span>
            </div>
            <button className="character__button" onClick={() => navigate('/characters')}>
              Back
            </button>
          </div>
        </div>
      )}
    </div>

  )
}

export default Character
