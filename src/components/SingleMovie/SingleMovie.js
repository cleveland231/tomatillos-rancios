import React from 'react';
import './SingleMovie.css';

const singleMovie = ({poster_path, title, average_rating, release_date, method}) => {
    return (
        <div className='single-movie'>
            <img className='poster' src={poster_path} />
            <h3>  {title}  </h3>
            <p> ⭐️ {parseFloat(average_rating.toFixed(2))} </p>
            <p> Released: {release_date} </p>
            <button onClick={() => method()}> More Info </button>
        </div>
    )
}

export default singleMovie;
