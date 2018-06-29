import React, { Component } from 'react';
import './MovieReview.css';
import MovieReviewTemplate from './MovieReviewTemplate'; 

class MovieReview extends Component {
  constructor(props){
    super(props)
    console.log(this.props)
    this.state = {
      idPelicula : this.props.match.params.uid
    }
  }

  render() {
    return(
      <MovieReviewTemplate idPelicula={this.state.idPelicula}/>
    );
  }
}

export default MovieReview