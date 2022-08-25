import React from 'react';
import './SingleMovie.css';

const singleMovie = ({poster_path, backdrop_path, title, average_rating, release_date}) => {
    return (
        <div className='single-movie'>
            <img className='poster' src={poster_path} />
            <img className='backdrop' src={backdrop_path} />
            <h3> {title} </h3>
            <p> {parseFloat(average_rating.toFixed(2))} </p>
            <p> {release_date} </p>
        </div>
    )
}

export default singleMovie;
