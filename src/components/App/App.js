import React, { Component } from 'react';
import movieData from './movieData';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import './App.css'
import MoviesBox from '../MoviesBox/MoviesBox';
import '../MoviesBox/MoviesBox.css'

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: movieData,
            singleMovieView: false,
            selectedMovie: null,
        }
    }

    testMethod = event => {
      event.preventDefault();
      let parsedID = parseInt(event.target.id);
      let selectedMovie = this.state.movies.movies.find(movie => movie.id === parsedID)

      this.setState({ movies: movieData,
      singleMovieView: true,
      selectedMovie: selectedMovie })


    }

    render() {
        return (
            <div className='main'>
                <h1> 🍅 Bienvenidos a Tomatillos Rancios! 🍅 </h1>
                { !this.state.singleMovieView  && <MoviesBox movies={this.state.movies} method={this.testMethod}/>}
                {this.state.singleMovieView && <SingleMovie movie={this.state.selectedMovie} />}
            </div>
        )
    }
}

export default App;
