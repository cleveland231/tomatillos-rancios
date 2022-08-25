import React, { Component } from 'react';
import movieData from './movieData';
// import singleMovie from '../../singleMovie';
import './App.css'
import MoviesBox from '../MoviesBox/MoviesBox';
import '../MoviesBox/MoviesBox.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: movieData
        }
    }

    render() {
        return (
            <div className='main'>
                <h1> tomatillos rancios </h1>
                <MoviesBox movies={this.state.movies} />
            </div>
        )
    }
}

export default App;
