import React, {Component} from 'react'
import './Catalog.css';
import { Link } from 'react-router-dom';


class CatalogTemplate extends Component {

  constructor(props){
    console.log(props)
    super(props);
  }

  render(){
    return (
      <div className="example-2 card">
        <div className="wrapper" style={{backgroundImage: "url(" + this.props.portada + ")"}} >
          <div className="header">
            <div className="date">
              {/* <span className="day">12</span>
              <span className="month">Aug</span> */}
              <span className="year">{this.props.anio}</span>
            </div>
            <ul className="menu-content">
              <li>
                <a href="#" className="fa fa-bookmark-o"></a>
              </li>
              <li><a href="#" className="fa fa-heart-o"><span>18</span></a></li>
              <li><a href="#" className="fa fa-comment-o"><span>3</span></a></li>
            </ul>
          </div>
          <div className="data">
            <div className="content">
              <span className="author">{this.props.director}</span>
              <h1 className="title"><a href="#">{this.props.nombre}</a></h1>
              <p className="text">{this.props.sinopsis}</p>
              
              <a href="#" className="button"><Link to={'/review-movie/'+ this.props._id}>Leer mas</Link></a>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default CatalogTemplate