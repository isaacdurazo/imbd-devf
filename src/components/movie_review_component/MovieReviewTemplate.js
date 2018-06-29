import React, {Component} from 'react'
import axios from 'axios';
import {withRouter} from 'react-router-dom';

class MovieReviewTemplate extends Component {

  constructor(props){
    super(props);
    
    console.log(props.match.params.uid)
    this.state = {
      estrellas: "",
      comentario: ""
    }
  }

  onInputChange = (e) => {
    if (e.target.estrellas == 'estrellas') {
      this.setState({
        estrellas: e.target.value
      })
    } else if (e.target.comentario == 'comentario'){
      this.setState({
        comentario: e.target.value
      });    
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('Desde el submit', this.state)

    if (this.state.estrellas == "") {
      alert("Te falta la caificación")

    } else if (this.state.comentario == "") {
      alert("Te falta el comentatio")
    
    } else {
      let json = {
        estrellas: this.state.estrellas,
        comentario: this.state.comentario,
      }

      axios.post('https://72d06fd9.ngrok.io/api/v1/calificaciones/', json).then(review => {
        console.log(review)
        alert('Tu review ha sido guardado')
      }).catch(err => {
        console.log(err)
        alert("Lo sentimos, existe un problema")
      })
    }
  }

  render(){
    console.log(this.state)
    return (
      <div className="formulario">
        <form onSubmit={this.onSubmit}>
          <h3>Calificar Película</h3>
          
          <div className="form-group">
            <label>Estrellas</label>
            <input type="number" name="estrellas" class="form-control" placeholder="calificacion"
              onChange={this.onInputChange}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Comentario</label>
            <textarea name="comentario" class="form-control" rows="3"
            onChange={this.onInputChange}
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
}

export default MovieReviewTemplate