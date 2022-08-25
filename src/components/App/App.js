import React, { Component } from 'react';
import movieData from './movieData';
// import singleMovie from '../../singleMovie';
import './App.css'
import MoviesBox from '../MoviesBox/MoviesBox';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: movieData
        }
    }

    render() {
        // console.log('tsm', this.state.movies)

        return (
            <div className='main'>
                <h1> tomatillos rancios </h1>
                <MoviesBox
                    movies={this.state.movies} 
                />
            </div>
        )
    }
}

export default App;
