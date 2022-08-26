import React from "react";
import Card from "../pages/Card";
import "../pages/Card.css";
import "./Mentors.css";
import { useState } from "react";
import Kailash from "../imgs/kailash.jpg";
import Anil from "../imgs/medical/anil.jpg";
import Zar from "../imgs/zar.jpg";
import TrueDigital from "../imgs/trueDigital.jpg";
import Goldsachs from "../imgs/goldsachs.jpg";
import Eques from "../imgs/eques.jpg";


function Investors(props) {
  const [filter,setFilter] = useState('')
  return (
    <div>
      <h1 className="card__heading">
        Connect with <span style={{ color: "#3e7ddb" }}>Investors</span>
      </h1>
      <div style={{display:"flex",alignItems:"right", justifyContent:"right" , marginRight:"40px"}}>
      <select
      style={{height:"2rem", width:"10vw", color:"#3e7ddb", outline:"none", backgroundColor:"#f0f9ff",
    borderRadius:"0.5rem", fontWeight:"bold", border:"2px solid #3e7ddb", cursor:"pointer"
    }}
      onChange = {(e)=>{
        setFilter(e.target.value)
      }}
      ><option value="" selected >All Investors</option>
        
        <option value="angel">Angel</option>
        <option value="accelerators">Accelerators</option>
        <option value="venture">Venture Capital Firms</option>
      </select>
      </div>
      <div className="card-container">
        {filter === '' && <Card
          img={Kailash}
          dom="angel"
          title="Dr Kailash Pinjani"
          desc="AI, Renewable Energy, Healthcare & Lifesciences, Nanotechnology, Sports"
          btn1="Connect with Investors"
          btn2="View Profile"
        />}
        {filter === '' && <Card
          img={Anil}
          dom="angel"
          title="Dr Kailash Pinjani"
          desc="AI, Renewable Energy, Healthcare & Lifesciences, Nanotechnology, Sports"
          btn1="Connect with Investors"
          btn2="View Profile"
        />}
        {filter === '' && <Card
          img={Zar}
          dom="angel"
          title="Dr Kailash Pinjani"
          desc="AI, Renewable Energy, Healthcare & Lifesciences, Nanotechnology, Sports"
          btn1="Connect with Investors"
          btn2="View Profile"
        />}
        {filter === '' && <Card
          img={TrueDigital}
          dom="corporate"
          title="Dr Kailash Pinjani"
          desc="AI, Renewable Energy, Healthcare & Lifesciences, Nanotechnology, Sports"
          btn1="Connect with Investors"
          btn2="View Profile"
        />}
        {filter === '' && <Card
          img={Goldsachs}
          dom="corporate"
          title="Dr Kailash Pinjani"
          desc="AI, Renewable Energy, Healthcare & Lifesciences, Nanotechnology, Sports"
          btn1="Connect with Investors"
          btn2="View Profile"
        />}
        {filter === '' && <Card
          img={Goldsachs}
          dom="corporate"
          title="Dr Kailash Pinjani"
          desc="AI, Renewable Energy, Healthcare & Lifesciences, Nanotechnology, Sports"
          btn1="Connect with Investors"
          btn2="View Profile"
        />}

        
        
        
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