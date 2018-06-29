import React, { Component } from 'react';
import CatalogTemplate from './CatalogTemplate'; 
import axios from 'axios';
// import Navbar from './components/Navbar';

class Catalog extends Component {

  constructor() {
    super();
    this.state = {
      peliculas:[]
    }
  }

  componentDidMount() {
    axios.get('https://booksapiappv1.herokuapp.com/api/v1/peliculas/')
    .then(response => {
      this.setState({ //siempre que se cambia el estado se vuelve a renderear
        peliculas:response.data
      })
    })
    .catch(err => console.log(err))
  }
  
  updateCardPelicula() {
    if (this.state.peliculas.length == 0) {
      return <div>Cargando...</div>
    } else {
      return this.state.peliculas.map(element => {
        return <CatalogTemplate 
        _id={element._id}
        nombre={element.nombre}
        anio={element.anio}
        clasificacion={element.clasificacion}
        duracion={element.duracion}
        genero={element.genero}
        portada={element.portada}
        video={element.video}
        director={element.director}
        sinopsis={element.sinopsis}
        premios={element.premios}
        actores={element.actores}
        />
      })
    }
  }

  render() {
    console.log('Me ejecuté render')
    return (
      
      // <Navbar/>

      <div className="home">
        <div className="container">
          <div className="row">
          {this.updateCardPelicula()}
          </div>
        </div>
      </div>
    );
  }
}

export default Catalog