import React, { Component } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import MoviesBox from '../MoviesBox/MoviesBox';
import './App.css'
import '../MoviesBox/MoviesBox.css'
import fetchApiData from './api-calls';
import {Route, Switch} from 'react-router-dom'


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
          this.setState({movies: data.movies})
      })
      .catch(err => console.log(err))
    }

    render() {
        return (
            <div className='main'>
                <h1> 🍅 Bienvenidos a Tomatillos Rancios! 🍅 </h1>
                <Switch>
                  <Route exact path='/' render={() => <MoviesBox movies={this.state.movies}/>}/>
                  <Route exact path='/movies/:id' render={({match}) => {
                    const selectedMovie = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
                    return <SingleMovie movie={selectedMovie}/>
                  }}/>
                  <Route render={() => <h2>This Path Does Not Exist!</h2>}/>
                </Switch>
            </div>
        )
    }
}

export default App;
