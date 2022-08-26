import React from "react";
import "./Card.css";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";
import {useEffect, useState} from "react";

function Card(props) {
  const [rating, setRating] =useState('');
  const profileEventhandler = (event) => {
    event.preventDefault();
  };
  const url = `https://sofrec.herokuapp.com/${props.user_id}`;
  console.log(url);
  useEffect(() => {
    fetch(url,{
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      }
  })
  .then(resp => resp.json())
  .then(resp => setRating(resp.Rating))
  .catch(error => console.log(error))
},[])
  return (
    <div className="card">
      <div className="card__body">
        <img className="card__image" src={props.img} alt="" />
        <h2 className="card__title">{props.title}</h2>
        <p style={{margin:"0px", color:"#3e7ddb", backgroundColor:"#f0f9ff"
      ,borderRadius:"0.5rem", width:"9vw" , margin:"auto", padding:"0.5rem", border:"2px solid #3e7ddb"
      }}>{props.dom}</p>
        <div className="card__description">{props.desc}</div>
        
        <div className="mentors__rating">
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <i className="fa fa-star"></i>
          <p>Rating: {`${rating}`}</p>
        </div>
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSeX5tATWMJqas8msH2v9lZjf_yFgA0dxNtSlxfEPBsiV7zUxg/viewform">
          <Button buttonStyle="btn--outline">{props.btn1}</Button>
        </a>
        <Button buttonStyle="btn--outline" onClick={profileEventhandler}>
          <Link to="/viewProfile" className="button-link">
            {props.btn2}
          </Link>
        </Button>
      </div>
    </div>
  );
}

export default Card;
