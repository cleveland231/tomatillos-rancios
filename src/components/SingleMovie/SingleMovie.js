import React from 'react';
import './SingleMovie.css';

const singleMovie = ({movie}) => {
  console.log(movie)
  return (
    <div className='movie-view-container' style={{backgroundImage: `url(${movie.backdrop_path})`}}>
      <div className='movie-view-box'>
        <div className='movie-details'>
          <p className='text'>{movie.title}</p>
          <p className='text'>Average Rating: {parseFloat(movie.average_rating.toFixed(2))}</p>
          <p className='text'>Release Date: {movie.release_date}</p>
          <button>Home</button>
        </div>
        <img className='movie-poster' src={movie.poster_path}/>
      </div>

    </div>
  )
}


export default singleMovie
