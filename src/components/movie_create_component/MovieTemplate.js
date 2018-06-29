import React, {Component} from 'react'
import axios from 'axios';

class MovieTemplate extends Component {

  constructor(props){
    super(props);

    this.state = {
      nombre: "",
      duración: "",
      clasificacion: "",
      genero: "",
      director: "",
      sinopsis: "",
      premios: "",
      anio: "",
      portada: "",
      actores: "",
      video: "",
      calificacion: ""
    }
  }

  onInputChange = (e) => {
    if (e.target.nombre == 'nombre') {
      this.setState({
        nombre: e.target.value
      })
    } else if (e.target.duración == 'duración'){
      this.setState({
        duración: e.target.value
      });    
    } else if (e.target.clasificacion == 'clasificacion'){
      this.setState({
        clasificacion: e.target.value
      });    
    } else if (e.target.genero == 'genero'){
      this.setState({
        genero: e.target.value
      });    
    } else if (e.target.director == 'director'){
      this.setState({
        director: e.target.value
      });    
    } else if (e.target.sinopsis == 'sinopsis'){
      this.setState({
        sinopsis: e.target.value
      });    
    } else if (e.target.premios == 'premios'){
      this.setState({
        premios: e.target.value
      });    
    } else if (e.target.anio == 'anio'){
      this.setState({
        anio: e.target.value
      });    
    } else if (e.target.portada == 'portada'){
      this.setState({
        portada: e.target.value
      });    
    } else if (e.target.actores == 'actores'){
      this.setState({
        actores: e.target.value
      });    
    } else if (e.target.video == 'video'){
      this.setState({
        video: e.target.value
      });    
    } else if (e.target.calificacion == 'calificacion'){
      this.setState({
        calificacion: e.target.value
      });    
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    console.log('Desde el submit', this.state)

    let json = {
      estrellas: this.state.estrellas,
      comentario: this.state.comentario,
    }

    axios.post('https://72d06fd9.ngrok.io/api/v1/peliculas/', json).then(pelicula => {
      console.log(pelicula)
      alert('Tu pelicula ha sido guardado')
    }).catch(err => {
      console.log(err)
      alert("Lo sentimos, existe un problema")
    })
  }

  render(){
    console.log(this.state)
    return (
      <div className="formulario">
        <form onSubmit={this.onSubmit}>
          <h3>Crear Película</h3>
          
          <div className="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input type="text" name="nombre" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Duración</label>
            <input type="text" name="duración" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Clasificacion</label>
            <input type="text" name="clasificacion" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Genero</label>
            <input type="text" name="genero" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Director</label>
            <input type="text" name="director" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Sinopsis</label>
            <input type="text" name="sinopsis" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Premios</label>
            <input type="text" name="premios" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Año</label>
            <input type="text" name="anio" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Portada</label>
            <input type="text" name="portada" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Actores</label>
            <input type="text" name="actores" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Video</label>
            <input type="text" name="video" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>
          <div className="form-group">
            <label for="exampleInputEmail1">Calificacion</label>
            <input type="text" name="calificacion" class="form-control"
              onChange={this.onInputChange} 
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  };
}

export default MovieTemplate