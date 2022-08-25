import React from 'react'
import SingleMovie from '../SingleMovie/SingleMovie.js'
import './MoviesBox.css'

const MoviesBox = ({movies}) => {

    const singleMovieCards = movies.movies.map(movie => {
      return(
        <SingleMovie className='single-movie'
          poster_path={movie.poster_path}
          backdrop_path={movie.backdrop_path}
          title={movie.title}
          average_rating={movie.average_rating}
          release_date={movie.release_date}
          id={movie.id}
          key={movie.id}
          />
      )
    })

    console.log(movies)

    return (
      <div className='movies-box'>
        {singleMovieCards}
      </div>
    )
}

export default MoviesBox;
