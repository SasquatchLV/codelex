import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './CharacterCard.module.scss'

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
  const navigate = useNavigate()

  return (
    <div className={styles.character}>
      <div>
        <img className={styles.character__image} src={image} alt={name} />
      </div>
      <div className={styles.character__wrapper}>
        <div className={styles.character__name}>
          {name}
        </div>
        <div className={styles.character__info}>
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
          className={styles.character__button}
          onClick={() => navigate(`/characters/${id}`)}
        >
          See details

        </button>
      </div>
    </div>
  )
}

export default CharacterCard
