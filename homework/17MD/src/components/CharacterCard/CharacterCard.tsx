import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

type CharacterCardType = {
  id: number
  name: string
  status: string
  species: string
  gender: string
  image: string
}

const CharacterCard: FC<CharacterCardType> = ({
  id, image, name, status, species, gender,
}) => {
  const navigation = useNavigate()

  return (
    <div className="character">
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
        <button
          className="character__button"
          onClick={() => navigation(`/characters/${id}`)}
        >
          See details

        </button>
      </div>
    </div>
  )
}

export default CharacterCard
