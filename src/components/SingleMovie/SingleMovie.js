import React from 'react';
import './singleMovie.css';

const singleMovie = ({poster_path, backdrop_path, title, average_rating, release_date}) => {
    return (
        <div className='singleMovie'>
            <img> {poster_path} </img>
            <img> {backdrop_path} </img>
            <h3> {title} </h3>
            <p> {average_rating} </p>
            <p> {release_date} </p>
        </div>
    )
}

export default singleMovie;
