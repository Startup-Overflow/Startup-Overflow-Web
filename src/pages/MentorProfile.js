import "./MentorProfile.css";
import { Button } from "../components/Button";
import location from '../imgs/location.png'

function MentorProfile(props) {
  const elements = props.specialization;
  const items = [];
  for (const [index, value] of elements.entries()) {
    items.push(<li key={index}>{value}</li>);
  }

  return (
    <div className="container">
      <div className="mentorContainer">
        <img
          className="card__image mentorImage"
          src={props.img}
          alt="Img not Found"
        />
        <div className="mentorName">
          <h1>{props.name}</h1>
          <h5>{props.desc}</h5>
          <h5><img src={location} alt='not found'style={{height:"20px", width:"20px"}}/>{props.location}</h5>
        </div>

        <div className="availability">Availability: {props.availability}</div>
        <div className="experience">Experience:{props.experience}</div>
        <hr />
        <div className="specialization" style={{fontWeight:"bold"}}>Mentor Specialization:</div>
        <div className="specializationItems">{items}</div>
        <div className="mentorBio"style={{fontWeight:"bold"}}>Mentor Bio:</div>
        <div className="bio">{props.bio}</div>
        <div className="mentorBtn">
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSeX5tATWMJqas8msH2v9lZjf_yFgA0dxNtSlxfEPBsiV7zUxg/viewform">
            <Button buttonStyle="btn--outline" buttonSize="btn--large">
              {props.btnName}
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default MentorProfile;
