import "./SessionCard.css";
import { Button } from "../components/Button.jsx";

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
        <a href="https://docs.google.com/forms/d/e/1FAIpQLSfN2awa_iIraN0Utc5W4smciqE1ok9r5W2SM2dxqq4ThQZjFg/viewform">
          <Button buttonStyle="btn--outline">Attend</Button>
        </a>
      </div>
    </div>
  );
}

export default SessionCard;
