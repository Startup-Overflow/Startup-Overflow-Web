import React from "react";
import "./PartnersCard.css";
import { Link } from "react-router-dom";

function Card(props) {
  const profileEventhandler = (event) => {
    event.preventDefault();
  };
  return (
    <div className="partners_card">
      <div className="partners_card__body">
        <img className="partners_card__image" src={props.img} alt="" />
        <h2 className="partners_card__title" onClick={profileEventhandler}>
        <Link to={`/${props.title}`} className="title-link" style={{color: "white", textDecoration: "none"}}>{props.title}
          </Link>
        </h2>
        </div>
    </div>
  );
}

export default Card;
