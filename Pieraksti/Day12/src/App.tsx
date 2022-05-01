import { useState } from 'react'
import './App.scss'
import Episodes from './data/data'

const App = () => {
  const [episodes, setEpisodes] = useState(Episodes)
  const [search, setSearch] = useState('')
  const [errorMsg, setErrorMsg] = useState('')

  const searchEpisode = () => {
    const result = episodes.filter((episode) => episode.name.toLowerCase().includes(search.toLowerCase()))
    setEpisodes(result)
  }

  return (
    <div className="container container-fluid">
      <div className="row">
        <div className="col-xs-12">
          <h1>Search homeland episodes</h1>
          <div className="search-container">
            <input
              type="text"
              placeholder="Episode name"
              value={search}
              required
              onChange={(e) => setSearch(e.target.value)}
            />
            <button
              className="btn btn-primary"
              onClick={() => {
                if (search) {
                  searchEpisode()
                  setErrorMsg('')
                } else {
                  setErrorMsg('Please enter a search term')
                }
              }}
            >
              Search

            </button>
            <div className="error-msg">
              {errorMsg}
              {' '}
            </div>
          </div>
          <div className="episodes-container">
            {episodes.length ? (episodes.map((episode) => (
              <div className="episode" key={episode.id}>
                {episode.image.medium ? (
                  <div className="episode__image">
                    <img src={episode.image.medium} alt={episode.name} />
                  </div>
                ) : (
                  <div className="episode__image">
                    <img src="http://placehold.jp/250x140.png" alt={episode.name} />
                  </div>
                )}
                <div className="episode__info">
                  <h3 className="episode__info-name">{episode.name}</h3>
                  <p className="episode__info-season">
                    s
                    {episode.season}
                    e
                    {episode.number}
                  </p>
                </div>
                <div className="episode__info">
                  <p className="episode__info-length">
                    Length:
                    {' '}
                    {episode.runtime}
                    m
                  </p>
                  {episode.rating.average && (
                    <p className="episode__info-rating">
                      Rating:
                      {' '}
                      {episode.rating.average}
                    </p>
                  )}
                </div>
              </div>
            )))
              : 'Nothing found'}

            Found
            {' '}
            {episodes.length}
            {' '}
            episodes of
            {' '}
            {Episodes.length}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
