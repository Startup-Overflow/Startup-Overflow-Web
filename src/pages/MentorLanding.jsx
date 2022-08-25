import PartnersCard from "./PartnersCard";
import "./PartnersCard.css";
import Corporates from "../imgs/Corporate.png";
import Government from "../imgs/government.png";
import mentorlogo from '../imgs/mentor-logo.jpg'
import {Link} from 'react-router-dom'


const MentorLanding = () => {
    return <div>
        <div style={{ }}><img src={mentorlogo} alt="found" style={{height:"20%"}}/>
        </div>
      
    <h1 style={{
        textAlign: "center",
      }}
    >
      Connect with <span style={{
        color: "#3e7ddb",
        textAlign: "center",
      }}>Mentors</span>
    </h1>
    <p style={{margin: "2rem"}}>A business mentor is someone with business experience and is willing to act as a trusted confidante over an extended period of time with an objective to provide advice, counseling from a fresh perspective, collaborate and help an entrepreneur stay focused on their long-term goal of making their venture a success.</p>
    <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 24rem))",
          gap: "2rem",
          justifyContent: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}> 
        <Link to='/mentors' style={{textDecoration:"none"}}>
        <PartnersCard
          img={Corporates}
          title="Find a Mentor"
          
        />
        </Link>
        <PartnersCard
          img={Government}
          title="Be a Mentor"
        /></div>
   
    </div>
}

export default MentorLanding;