import React, {useContext} from "react";
import {Link} from "react-router-dom"
import { Context } from "../store/appContext";


export const Card2 = (props) => {
  let item=props.item
  const{actions}=useContext(Context)

  let id = parseInt(props.id)+1;

	return (
		// <div className="container">
		// <h1 className="text-danger">Planets</h1>
		// <div className="row row-cols-1 row-cols-md-3 g-4">
    <div className="col m-4">
<div className="card h-100" style={{ width: "15rem"}}>    <img src={"https://starwars-visualguide.com/assets/img/planets/"+(id)+".jpg"} className="card-img-top" alt="..." />

      <div className="card-body">
        <h5 className="card-title">{props.planeta}</h5>
        <p className="card-text">Population: {props.poblacion}</p>
        <p className="card-text">Terrain: {props.terreno}</p>



		<div className="d-flex justify-content-between">
		<Link type="button" className="btn btn-outline-primary" to={"/singlePlanets/"+id}>Learn More</Link>
		<button type="button" className="btn btn-outline-warning"  onClick= {() => actions.agregarFavorito(item)}><i className={actions.changeColor(item)}></i></button>
		</div>
      </div>
    </div>
  </div>
  

	);
};

