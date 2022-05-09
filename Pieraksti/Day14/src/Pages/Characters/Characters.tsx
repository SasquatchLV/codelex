import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CharacterType, getCharacters } from '../../Data/CharacterData'
import './Characters.scss'

const Characters = () => {
  const [visibleChars, setVisibleChars] = useState<CharacterType[]>()
  const navigation = useNavigate()

  useEffect(() => {
    const characters = getCharacters()
    setVisibleChars(characters)
  }, [])

  return (
    <div>
      <h1 className="heading">Characters Page</h1>
      <div className="character-container">
        {visibleChars && visibleChars.map(({
          id, name, image, status, species, gender,
        }) => (
          <div className="character" key={id}>
            <div>
              <img className="character__image" src={image} alt={name} />
            </div>
            <div className="character__info--wrapper">
              <div className="character__name">
                {name}
              </div>
              <div className="character__info">
                <span>
                  Status:
                  <br />
                  {/* If status is Alive, then color is green */}
                  {status === 'Alive' ? (
                    <span className="character__status--alive">{status}</span>
                  ) : (
                    <span className="character__status--dead">{status}</span>
                  )}
                </span>

                <span>
                  Species:
                  <br />
                  {species}
                </span>

                <span>
                  Gender:
                  <br />
                  {gender}
                </span>

              </div>
              <button className="character__button" onClick={() => navigation(`/characters/${id}`)}>See details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Characters
