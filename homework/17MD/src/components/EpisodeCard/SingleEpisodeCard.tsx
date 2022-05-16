/* eslint-disable camelcase */
import { FC } from 'react'
import { CharacterType } from '../../Models/CharacterModel'
import CharacterCard from '../CharacterCard/CharacterCard'

type SingleEpisodeCardProps = {
  id: number;
  name: string;
  // eslint-disable-next-line camelcase
  air_date: string;
  episode: string;
  characters?: CharacterType[],
  created: string;
  charCount?: number;

}

const SingleEpisodeCard: FC<SingleEpisodeCardProps> = ({
  id, name, air_date, episode, created, characters, charCount,
}) => (
  <div className="episode-single">
    <div className="episode__info--wrapper">
      <div className="episode__name">
        {name}
      </div>
      <div className="episode__info">
        <span>
          Air Date:
          <br />
          {air_date}
        </span>

        <span>
          Episode:
          <br />
          {episode}
        </span>

        <span>
          Created:
          <br />
          {created}
        </span>

      </div>
      <h1>
        Total of
        {' '}
        {charCount}
        {' '}
        characters in this episode
      </h1>
      <div className="episode__characters">
        {characters && characters.map((character) => (
          <CharacterCard
            key={character.id}
            id={character.id}
            name={character.name}
            image={character.image}
            status={character.status}
            species={character.species}
            gender={character.gender}
          />
        ))}
      </div>
    </div>
  </div>
)

export default SingleEpisodeCard
