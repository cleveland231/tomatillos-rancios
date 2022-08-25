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

    testMethod() {
        console.log('tomat')
    }

    render() {
        return (
            <div className='main'>
                <h1> 🍅 Bienvenidos a Tomatillos Rancios! 🍅 </h1>
                <MoviesBox 
                    movies={this.state.movies} 
                    method={this.testMethod}
                />
            </div>
        )
    }
}

export default App;
