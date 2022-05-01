import { useState } from 'react'
import './App.scss'
import Episodes from './data/data'

const App = () => {
  const [episodes, setEpisodes] = useState(Episodes)
  const [search, setSearch] = useState('')

  const searchEpisode = () => {
    const result = Episodes.filter((episode) => episode.name.toLowerCase().includes(search.toLowerCase()))
    setEpisodes(result)
  }

  const backToAll = () => {
    setEpisodes(Episodes)
  }

  return (
    <div className="container container-fluid">
      <div className="row center-xs middle-xs">
        <div className="col-xs-12">
          <h1>Search homeland episodes</h1>
          <div className="search-container">
            <form action="submit">
              <input
                type="text"
                placeholder="Episode name"
                value={search}
                required
                onChange={(e) => setSearch(e.target.value)}
                onSubmit={(e) => {
                  e.preventDefault()
                  searchEpisode()
                }}
              />
              <button
                className="btn btn-primary"
                onClick={(e) => {
                  if (search) {
                    e.preventDefault()
                    searchEpisode()
                  }
                }}
              >
                Search

              </button>
              <button
                className="btn btn-primary"
                onClick={
                  (e) => {
                    e.preventDefault()
                    setSearch('')
                    backToAll()
                  }
                }
              >
                Back to all
              </button>
            </form>

          </div>
          <div className="episodes-container">
            {episodes.length >= 1 && episodes.map((episode) => (
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
                  <a
                    className="episode__info-name"
                    href={episode.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {episode.name}

                  </a>
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
            ))}
            {!episodes.length && 'Nothing found'}
            <div className="count">
              {' '}
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
    </div>
  )
}

export default App
