import React from "react";
import Card from "../pages/Card";
import "../pages/Card.css";
import "./Mentors.css";
import i1 from "../imgs/incubator1.jpg";
import i2 from "../imgs/Incubator2.jpg";
import i3 from "../imgs/Incubator3.jpg";
import i4 from "../imgs/Incubator4.jpg";
import i5 from "../imgs/Incubator5.jpg";
import i6 from "../imgs/Incubator6.jpg";

function Investors(props) {
  return (
    <div>
      <h1 className="card__heading">
        Find Your <span style={{ color: "#3e7ddb" }}>Incubators</span>
      </h1>
      <div className="card-container">
        <Card
          img={i1}
          title="Annamalai Innovation and incubation research foundation"
          desc="Cuddalore, Tamil Nadu"
          btn1="Apply for Incubation"
          btn2="View Profile"
        />
        <Card
          img={i2}
          title="YCCE TBI Foundation"
          desc="Nagpur, Maharashtra"
          btn1="Apply for Incubation"
          btn2="View Profile"
        />
        <Card
          img={i3}
          title="CIPET CTEF INNOVEX"
          desc="Bhubaneswar, Odisha"
          btn1="Apply for Incubation"
          btn2="View Profile"
        />
        <Card
          img={i4}
          title="Centre for Innovation and Entrepreneurship Development at IIITS (CIEDI)"
          desc="Tirupati, Andhra Pradesh"
          btn1="Apply for Incubation"
          btn2="View Profile"
        />
        <Card
          img={i5}
          title="Research and Innovation Circle of Hyderabad"
          desc="Hyderabad, Telangana"
          btn1="Apply for Incubation"
          btn2="View Profile"
        />
        <Card
          img={i6}
          title="VentureStudio"
          desc="Ahmedabad, Gujarat"
          btn1="Apply for Incubation"
          btn2="View Profile"
        />
      </div>
    </div>
  );
}

export default Investors;