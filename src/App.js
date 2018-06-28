import React, { Component } from 'react';
import './App.css';
import Catalog from './components/catalog_component/Catalog';
import Movie from './components/movie_component/Movie';
import MovieCreate from './components/movie_create_component/MovieCreate';
import MovieReview from './components/movie_review_component/MovieReview';

import {BrowserRouter, Route} from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
      <BrowserRouter> 
        <main>
          <Route exact path="/" component={Catalog}/>
          <Route exact path="/movie" component={Movie}/>
          <Route exact path="/create-movie" component={MovieCreate}/>
          <Route exact path="/review-movie" component={MovieReview}/>
        </main>
      </BrowserRouter>
      
    );
  }
}

export default App;
