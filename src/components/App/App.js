import React, { Component } from 'react';
import movieData from './movieData';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import './App.css'
import MoviesBox from '../MoviesBox/MoviesBox';
import '../MoviesBox/MoviesBox.css'
import fetchApiData from './api-calls';

class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: [],
            singleMovieView: false,
            selectedMovie: null,
        }
    }

    
    componentDidMount = () => {
        fetchApiData()
            .then(data => {
            this.setState({movies: data.movies})
            })
            .catch(err => console.log(err))
    }

    testMethod = event => {
      event.preventDefault();
      let parsedID = parseInt(event.target.id);
      let selectedMovie = this.state.movies.find(movie => movie.id === parsedID)

      this.setState({ movies: movieData.movies,
      singleMovieView: true,
      selectedMovie: selectedMovie })
    }

    goHome = (event) => {
        event.preventDefault();
        this.setState({ movies: movieData.movies,
        singleMovieView: false })
    }

    render() {
        return (
            <div className='main'>
                <h1> 🍅 Bienvenidos a Tomatillos Rancios! 🍅 </h1>
                { !this.state.singleMovieView  && <MoviesBox movies={this.state.movies} method={this.testMethod}/>}
                {this.state.singleMovieView && <SingleMovie movie={this.state.selectedMovie} method={this.goHome} />}
            </div>
        )
    }
}

export default App;
