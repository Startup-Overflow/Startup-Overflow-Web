import React from "react";
import Card from "../pages/Card";
import "../pages/Card.css";
import "./Mentors.css";
import {useState} from 'react';
// import Brajesh from "../imgs/market/Brajesh_Maheshwari.jpg";
// import Vinay from "../imgs/Vinay-kumar-reddy.jpg";
// import Prasant from "../imgs/Dr P Prasant.jpg";
// import Chandan from "../imgs/Chandan_Aggarwal.jpg";
// import Durga from "../imgs/Dhana-Durga.jpeg";
// import Karan from "../imgs/market/Karan Shah.jpg";

function Partners(props) {
  const [filter,setFilter] = useState('')
  return (
    <div>
      <h1 className="card__heading">
        Look For <span style={{ color: "#3e7ddb" }}>Partners</span>
      </h1>
      <div style={{display:"flex",alignItems:"right", justifyContent:"right" , marginRight:"40px"}}>
      <select
      style={{height:"2rem", width:"10vw", color:"#3e7ddb", outline:"none", backgroundColor:"#f0f9ff",
    borderRadius:"0.5rem", fontWeight:"bold", border:"2px solid #3e7ddb", cursor:"pointer"
    }}
      onChange = {(e)=>{
        setFilter(e.target.value)
      }}
      >
        <option value="government" >Government</option>
        <option value="corporate">Corporate</option>
        <option value="globalbodies">Global Bodies</option>
       
      </select>
      </div>
      <div className="card-container">
        {/* <Card
          img={Brajesh}
          title="Brajesh Maheshwari"
          desc="Co-Founder Director of Allen Career Institute"
          btn1="Contact with Partners"
          btn2="View Profile"
        />
        <Card
          img={Vinay}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Contact with Partners"
          btn2="View Profile"
        />
        <Card
          img={Prasant}
          title="Dr P Prasant"
          desc="Speaker, Educator and Administrator in teaching Cyber Security IT, Computer Applications, and Management Courses"
          btn1="Contact with Partners"
          btn2="View Profile"
        />
        <Card
          img={Chandan}
          title="Dr Chandan Agarwal"
          desc="Chairperson of G.D. Goenka School, Kanpur & Bareilly"
          btn1="Contact with Partners"
          btn2="View Profile"
        />
        <Card
          img={Durga}
          title="Dhana Durga"
          desc="Founder and Principal, Sree Vivekananda Educational Society"
          btn1="Contact with Partners"
          btn2="View Profile"
        />
        <Card
          img={Karan}
          title="Karan Shah"
          desc="Founder & CEO of IIDE of India's Leading Digital Marketing Edtech"
          btn1="Contact with Partners"
          btn2="View Profile"
        /> */}
      </div>
    </div>
  );
}

export default Partners;


