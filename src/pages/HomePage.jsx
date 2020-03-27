import React, { useState, useEffect } from 'react'
import Show from '../components/Show'
import axios from 'axios'

const HomePage = () => {
  const [shows, setShows] = useState([])
  const [FeaturedTvShow, setFeaturedTvShow] = useState([])

  const getAllShows = async () => {
    const resp = await axios.get(
      'https://api.themoviedb.org/3/tv/top_rated?api_key=e39bd4d7934850f869dcfd33c094d2bc&language=en-US&page=1'
    )
    console.log(resp.data.results)
    setShows(resp.data.results)
    const randomIndex = Math.floor(Math.random() * 20)
    setFeaturedTvShow(resp.data.results[randomIndex])
  }

  useEffect(() => {
    console.log('something happened')
    getAllShows()
  }, [])

  return (
    <>
      <header>
        <div className="welcome-back">
          <h1 className="welcome">Welcome to the Self Quarantine TV</h1>
        </div>
      </header>
      <main>
        <h2 className="here-are-shows">
          We are here to show you some top rated TV shows to watch while you are
          at home.
        </h2>
        <div className="center-feature">
          <div className="feature-box">
            <h3>Can't make up your mind? Try this one.</h3>
            <h2>Here is a random show for you to try</h2>
            <article>
              <a href={`/tv/${FeaturedTvShow.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${FeaturedTvShow.poster_path}`}
                  alt="Movie Poster"
                />
                <h2>{FeaturedTvShow.name}</h2>
              </a>
            </article>
          </div>
        </div>

        <h2 className="other-shows">Here are some other top rated shows.</h2>
        <ul className="show-list">
          {shows.map((show) => {
            return (
              <Show
                name={show.name}
                poster_path={show.poster_path}
                showID={show.id}
                featuredId={FeaturedTvShow.id}
              />
            )
          })}
        </ul>
      </main>
    </>
  )
}

export default HomePage
