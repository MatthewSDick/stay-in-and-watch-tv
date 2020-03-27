import React from 'react'

const Show = (props) => {
  const { name, poster_path, showID } = props

  return (
    <article className="one-show">
      <a href={`/tv/${showID}`}>
        <img
          src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${poster_path}`}
          alt="Movie Poster"
        />
        <h2>{name}</h2>
        {/* <p>show ID = {showID}</p> */}
      </a>
    </article>
  )
}

export default Show
