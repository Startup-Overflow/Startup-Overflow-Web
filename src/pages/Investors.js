import React from "react";
import Card from "../pages/Card";
import "../pages/Card.css";
import "./Mentors.css";
import Kailash from "../imgs/kailash.jpg";
import Anil from "../imgs/medical/anil.jpg";
import Zar from "../imgs/zar.jpg";
import TrueDigital from "../imgs/trueDigital.jpg";
import Goldsachs from "../imgs/goldsachs.jpg";
import Eques from "../imgs/eques.jpg";


function Investors(props) {
  return (
    <div>
      <h1 className="card__heading">
        Find Your <span style={{ color: "#3e7ddb" }}>Investors</span>
      </h1>
      <div className="card-container">
        <Card
          img={Kailash}
          title="Dr Kailash Pinjani"
          desc="AI, Renewable Energy, Healthcare & Lifesciences, Nanotechnology, Sports"
          btn1="Connect with Investors"
          btn2="View Profile"
        />
        <Card
          img={Anil}
          title="Anil Bhambhani"
          desc="Finance Technology"
          btn1="Connect with Investors"
          btn2="View Profile"
        />
        <Card
          img={Zar}
          title="ZAR Partners"
          desc="AI, Enterprise Software, Internet of Things, Transportation & Storage, Logistics"
          btn1="Connect with Investors"
          btn2="View Profile"
        />
        <Card
          img={TrueDigital}
          title="Truedigital Startup"
          desc="Analytics, Agriculture, AI, Green Technology, Finance Technology, Education, Healthcare & Lifesciences, Internet of Things, Media & Entertainment, Retail, Real Estate, Biotechnology, Waste Management, Toys and Games"
          btn1="Connect with Investors"
          btn2="View Profile"
        />
        <Card
          img={Goldsachs}
          title="GoldSachs Ventures"
          desc="Analytics, Advertising, AR VR (Augmented + Virtual Reality), Automotive, Computer Vision, Telecommunication & Networking, Agriculture, AI, Finance Technology, Enterprise Software, Technology Hardware, Internet of Things, IT Services, Retail, Social Network, Logistics, Security Solutions"
          btn1="Connect with Investors"
          btn2="View Profile"
        />
        <Card
          img={Eques}
          title="Eques Capital"
          desc="AI, Green Technology, Finance Technology, Healthcare & Lifesciences, Pets & Animals, Logistics, Biotechnology, Waste Management"
          btn1="Connect with Investors"
          btn2="View Profile"
        />
      </div>
    </div>
  );
}

export default Investors;