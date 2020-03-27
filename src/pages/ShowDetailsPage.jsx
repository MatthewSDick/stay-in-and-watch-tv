import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ShowDetailsPage = (props) => {
  const showID = props.match.params.showID

  const [details, setDetails] = useState([])
  const [summary, setSummary] = useState({})

  const getShowDetails = async () => {
    const detailsResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}/credits?api_key=e39bd4d7934850f869dcfd33c094d2bc&language=en-US`
    )
    setDetails(detailsResp.data.cast)
    console.log('details' + detailsResp)
  }

  const getShowSummary = async () => {
    console.log(showID)
    const summaryResp = await axios.get(
      `https://api.themoviedb.org/3/tv/${showID}?api_key=e39bd4d7934850f869dcfd33c094d2bc&language=en-US&page=1`
    )
    setSummary(summaryResp.data)
    console.log(summaryResp.data)
  }

  useEffect(() => {
    getShowDetails()
    getShowSummary()
  }, [])

  return (
    <div>
      <header className="detail-header">
        <h1 className="detail-title">{summary.name}</h1>
        <div className="outer">
          <div className="detail-box">
            <div className="left-box">
              <img
                src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${summary.backdrop_path}`}
                // src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
                alt="Movie Poster"
              />
            </div>
            <div lassName="right-box">
              <p className="plot">
                <span style={{ color: 'white' }}>Plot: {` `}</span>
                {summary.overview}
              </p>
              <p className="popularity">
                <span style={{ color: 'white' }}>Popularity: </span>

                {summary.popularity}
              </p>
              <p className="vote">
                <span style={{ color: 'white' }}>Vote Average: </span>
                {summary.vote_average}
              </p>
              <p className="cast">
                <span style={{ color: 'white' }}>Cast: </span>
              </p>
              <ul className="actors">
                {details.map((actor) => {
                  return <li>{actor.name}</li>
                })}
              </ul>
            </div>
          </div>
        </div>
        {/* <p>Cast: {details.cast.name}</p> */}
      </header>
    </div>
  )
}

export default ShowDetailsPage

{
  /* <span style="color:blue">blue</span> */
}
