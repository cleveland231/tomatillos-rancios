import React, { Component } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import MoviesBox from '../MoviesBox/MoviesBox';
import './App.css'
import '../MoviesBox/MoviesBox.css'
import fetchApiData from './api-calls';

let movieData;

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            singleMovieView: false,
            selectedMovie: null
        }
    }


    componentDidMount = () => {
      fetchApiData()
      .then(data => {
          movieData = data.movies;
          this.setState({movies: movieData})
      })
      .catch(err => console.log(err))
    }

    seeMovie = event => {
      event.preventDefault();
      let parsedID = parseInt(event.target.id);
      let selectedMovie = this.state.movies.find(movie => movie.id === parsedID)
      this.setState({
         movies: movieData,
         singleMovieView: true,
         selectedMovie: selectedMovie
      })
    }

    goHome = (event) => {
        event.preventDefault();
        this.setState({
          movies: movieData,
          singleMovieView: false,
          selectedMovie: null
      })
    }

    render() {
        return (
            <div className='main'>
                <h1> 🍅 Bienvenidos a Tomatillos Rancios! 🍅 </h1>
                {!this.state.singleMovieView  && <MoviesBox movies={this.state.movies} method={this.seeMovie}/>}
                {this.state.singleMovieView && <SingleMovie movie={this.state.selectedMovie} method={this.goHome} />}
            </div>
        )
    }
}

export default App;
