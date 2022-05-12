/* eslint-disable camelcase */
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { EpisodesModel } from '../../Models/EpisodesModel'

const EpisodeCard: FC<EpisodesModel> = ({
  id, name, air_date, episode, created,
}) => {
  const navigation = useNavigate()

  return (
    <div className="episode">
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
        <button
          className="episode__button"
          onClick={() => navigation(`/episodes/${id}`)}
        >
          See more

        </button>
      </div>
    </div>
  )
}

export default EpisodeCard
