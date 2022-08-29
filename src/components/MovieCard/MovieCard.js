import React from 'react';
import './MovieCard.css';
import {NavLink} from 'react-router-dom'

const movieCard = ({poster_path, title, method, id}) => {
    return (
      <NavLink to={`movies/${id}`}>
        <div className='single-movie'>
            <img id={id} className='poster' alt={title} src={poster_path}/>
            <h3>{title}</h3>
        </div>
      </NavLink>
    )
}

export default movieCard;
