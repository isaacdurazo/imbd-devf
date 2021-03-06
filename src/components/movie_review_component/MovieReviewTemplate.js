import React, {Component} from 'react'
import axios from 'axios';

class MovieReviewTemplate extends Component {

  constructor(props){
    super(props);
    
    this.state = {
      idPelicula: this.props.idPelicula,
      pelicula: {},
      idCritico : "5b35d5a0f86e7416dd8d3f34",
      estrellas : 0,
      comentarios : ""
      
    }

    console.log(this.state)
  }

  onInputChange = (e) => {
    switch(e.target.id){
      case "estrellas" : this.setState({estrellas: e.target.value}) ; break;
      case "comentario" : this.setState({comentarios: e.target.value}) ; break;
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
        idPelicula: this.state.idPelicula,
        idCritico : this.state.idCritico,
        estrellas: Number(this.state.estrellas),
        comentarios: this.state.comentarios
      }
      console.log(json);

      axios.post('https://booksapiappv1.herokuapp.com/api/v1/calificaciones/', json)
      .then(review => {
        console.log(review)
        alert('Tu review ha sido guardado');
        this.getMovieData();
        this.clearFormComentario();

      }).catch(err => {
        //console.log(err)
        alert("Lo sentimos, existe un problema")
      })
    }
  }

  componentDidMount(){
    //console.log("Did Mount Movies Template");
    this.getMovieData();
  }

  getMovieData(){
    axios.get(`https://booksapiappv1.herokuapp.com/api/v1/peliculas/${this.state.idPelicula}`)
    .then(pelicula => {
      this.setState({
        pelicula : pelicula.data
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  getCriticoName(id){
    axios.get(`https://booksapiappv1.herokuapp.com/api/v1/criticos/${id}`)
    .then(critico => {
      console.log(id,critico.data.nombre)
      let criticoName = critico.data.nombre + " " + critico.data.apellidos;
      console.log(criticoName)
      return criticoName;
    })
    .catch(error => {
      return "Anonimo";
      console.log(error);
    })
  }

  updateMovieData(){
    if(this.state.pelicula._id == undefined){
      return <div>Cargando</div>
    }
    else{
      
      let movieDataTemplate = this.getMovieDataTemplate();
      return movieDataTemplate;
    }
  }
  
  updateComentarios(){
    if(this.state.pelicula._id == undefined){
      return <div>Cargando</div>
    }
    else{
      let comentarios = this.getComentarios(this.state.pelicula.calificaciones)

      return comentarios ;
    }
  }

  updateFormComentario(){
    if(this.state.pelicula._id == undefined){
      return <div>Cargando</div>
    }
    else{
      
      let formComentario = this.getFormComentario();
      return formComentario;
    }
  }
  
  clearFormComentario(){
    document.getElementById("form_comentario").reset();
  }

  getMovieDataTemplate(){
    let movieDataTemplate =
    <div class="container">
   <div class="row panel-white">
    <div class="col-sm-6">
        <h4><b>{this.state.pelicula.nombre}</b> </h4>
        <img style={{height:"auto",width:100+"%"}} src={this.state.pelicula.portada}/>
    </div>
    <div class="col-sm-6">
    <h5 style={{textAlign:'center'}}><b>Trailer</b> </h5>
          <iframe width="100%" height="200px" src={"https://www.youtube.com/embed/"+this.state.pelicula.video} frameborder="0" allowfullscreen></iframe>
          <p><b>Año: </b>{this.state.pelicula.anio} </p>
          <p><b>Duración: </b>{this.state.pelicula.duracion} min</p>
          <p><b>Genero: </b>{this.state.pelicula.genero} </p>
          <p><b>Clasificación: </b>{this.state.pelicula.clasificacion}</p>
          <p><b>Director: </b>{this.state.pelicula.director} </p>
          <p><b>Actores: </b>{this.state.pelicula.actores} </p>
          <p><b>Sinopsis: </b>{this.state.pelicula.sinopsis} </p>
    </div>
    </div>
    </div>
    return movieDataTemplate;
  }

  getFormComentario(){
    let comentarioFormTemplate =   
    <div class="col-sm-12">            
        <div className="formulario">
        <form id="form_comentario" onSubmit={this.onSubmit}>
          <h3>Calificar Película</h3>
          
          <div className="form-group">
            <label>Estrellas</label>
            <input type="number" id="estrellas" name="estrellas" class="form-control" placeholder="calificacion"
              onChange={this.onInputChange}
            />
          </div>

          <div className="form-group">
            <label for="exampleFormControlTextarea1">Comentario</label>
            <textarea id="comentario" name="comentario" class="form-control" rows="3"
            onChange={this.onInputChange}
            placeholder="Agrega comentario"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
      </div>

      return comentarioFormTemplate;
  }

  getComentarios(comentarios){
    
    let comentariosTemplate = comentarios.map((elem,ix,arr) => {
      //console.log(elem)
        return <div class="col-sm-12">
                <div class="panel panel-white post panel-shadow">
                    <div class="post-heading">
                        <div class="pull-left image">
                            <img src="http://bootdey.com/img/Content/user_1.jpg" class="img-circle avatar" alt="user profile image" />
                        </div>
                        <div class="pull-left meta">
                            <div class="title h5">
                                <a href="#"><b>{elem.critico +"    "}</b></a>
                                made a post.
                            </div>
                            <h6 class="text-muted time">1 minute ago</h6>
                        </div>
                    </div> 
                    <div class="post-description"> 
                        <p>{elem.comentarios}</p>
                        <div class="stats">
                            <a href="#" class="btn btn-default stat-item">
                                <i class="fa fa-thumbs-up icon"></i>2
                            </a>
                            <a href="#" class="btn btn-default stat-item">
                                <i class="fa fa-thumbs-down icon"></i>12
                            </a>
                        </div>
                    </div>
                </div>
             </div>
             
    })

    

    return comentariosTemplate;
  }

  render(){
    console.log(this.state)
    return (

        <div class="container">
            <div class="row">
              {this.updateMovieData()}
            </div>        
            <div class="row">
              {this.updateFormComentario()}
            </div>
            <div class="row">
              {this.updateComentarios()}
            </div>
        </div>

     
    );
  };
}

export default MovieReviewTemplate