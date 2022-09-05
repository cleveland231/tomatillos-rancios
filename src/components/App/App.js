import React, { Component } from 'react';
import SingleMovie from '../SingleMovie/SingleMovie.js';
import MoviesBox from '../MoviesBox/MoviesBox';
import './App.css'
import '../MoviesBox/MoviesBox.css'
import fetchApiData from './fetchApiData';
import {Route, Switch} from 'react-router-dom'
import Trailer from '../Trailer/Trailer.js';


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
                  <Route path='/tomatillos-rancios' render={() => <MoviesBox movies={this.state.movies}/>}/>
                  <Route exact path='/movies/:id' render={({match}) => {
                    let id = parseInt(match.params.id)
                    return <SingleMovie movie={id}/>
                  }}/>
                  <Route exact path='/movies/:id/trailer' render={({match}) => {
                    let id = parseInt(match.params.id)
                    return <Trailer id={id}/>
                  }}
                  />
                  <Route render={() => <h2>This Path Does Not Exist!</h2>}/>
                </Switch>
            </div>
        )
    }
}

export default App;
