import React from 'react';
import './MovieCard.css';

const movieCard = ({poster_path, title, method, id}) => {
    return (
        <div className='single-movie'>
            <img id={id} className='poster' alt={title} src={poster_path} onClick={event => method(event)} />
            <h3>{title}</h3>
        </div>
    )
}

export default movieCard;
