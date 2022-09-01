import React, { Component } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import MoviesBox from '../MoviesBox/MoviesBox';
import './App.css'
import '../MoviesBox/MoviesBox.css'
import fetchApiData from './fetchApiData';
import {Route, Switch} from 'react-router-dom'
import Trailer from '../Trailer/Trailer.js';

let selectedMovie;


class App extends Component {
    constructor() {
        super();
        this.state = {
            movies: []
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
                    const selectedMovie1 = this.state.movies.find(movie => movie.id === parseInt(match.params.id))
                    selectedMovie = selectedMovie1
                    return <SingleMovie movie={selectedMovie1.id}/>
                  }}/>
                  <Route exact path='/movies/movies/:id/trailer' render={() => {
                    return <Trailer id={selectedMovie.id}/>
                  }}
                  />
                  <Route render={() => <h2>This Path Does Not Exist!</h2>}/>
                </Switch>
            </div>
        )
    }
}

export default App;
