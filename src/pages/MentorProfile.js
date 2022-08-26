import "./MentorProfile.css";
import {useState} from 'react';
import { Button } from "../components/Button";
import location from '../imgs/location.png'
import { DateTimePickerComponent } from '@syncfusion/ej2-react-calendars';


function MentorProfile(props) {
  const [time,setTime] = useState('24/08/2022, 14:30:20');
  console.log(time);
  const minDate = new Date();
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
        <div style={{display:"flex", flexDirection:"row"}}>
        <div className="availability">Availability: {time.toLocaleString(('en-GB'))}</div>
        <div style={{marginLeft:"2rem"}}>
      <DateTimePickerComponent placeholder="Choose a date and time"
      value={time}
      min={minDate}
      onChange={(e)=>setTime(e.target.value)}
      format="dd-MMM-yy HH:mm"
      step={60}></DateTimePickerComponent>
    </div>
        </div>
        
        
        
        
        
        
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
