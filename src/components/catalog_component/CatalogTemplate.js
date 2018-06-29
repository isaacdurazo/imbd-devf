import React, {Component} from 'react'
import './Catalog.css';
import { Link } from 'react-router-dom';


class CatalogTemplate extends Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
      <div className="col-6 card" style={{width:"18rem"}}>
        <div className="card-body">

          <div className="title_block">
            <div className="title_wrapper">
              <h1 className="nombre">{this.props.nombre}
                <span className="anio">{this.props.anio}</span>            
              </h1>
              <div className="subtext">
                <span className="clasificacion">Clasificación: {this.props.clasificacion}</span>
                <span className="duracion">Duración: {this.props.duracion}</span>
                <span className="genero" >Genero: {this.props.genero}</span>
              </div>
            </div>
          </div>

          <div className="portada_wrapper">
            <div className="portada">
              <img src={this.props.portada}/>
            </div> 
            <div className="video">
              <iframe src={`https://www.youtube.com/embed/${this.props.video}`} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div> 
          </div>

          <div className="info_wrapper">
            <div className="director_wrapper">Director: {this.props.director}</div>
            <div className="sinopsis">Sinopsis: {this.props.sinopsis}</div>
            <div className="premios">Premios: {this.props.premios}</div>
            <div className="actores_wrapper">
              <span className="actor">Actores: {this.props.actores}</span>
            </div>
          </div>

          <Link className="btn btn-primary" to={`/review-movie/${this.props._id}`}>Criticar Película</Link>
        </div>
      </div>
    );
  }
}

export default CatalogTemplate