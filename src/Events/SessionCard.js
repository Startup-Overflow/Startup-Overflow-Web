import "./SessionCard.css";
import { Button } from "../components/Button.jsx";
import { Link } from "react-router-dom";

function SessionCard(props) {
  return (
    <div className="session_card">
      <div className="session_card__body">
        <img
          className="session_card__image"
          src={props.img}
          alt="Img not found"
        />
        <h2 className="session_card__title">{props.title}</h2>
        <div className="eventDateTime">
          <i className="fa fa-calendar"></i>
          <span className="date">{props.date}</span>
          <i className="fa fa-clock"></i>
          <span className="time">{props.time}</span>
        </div>
        <Link to="/login">
          <Button buttonStyle="btn--outline">Attend</Button>
        </Link>
      </div>
    </div>
  );
}

export default SessionCard;
