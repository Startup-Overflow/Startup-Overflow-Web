import React from "react";
<<<<<<< HEAD
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
=======
import PartnersCard from "./PartnersCard";
import "./PartnersCard.css";
import Corporates from "../imgs/Corporate.png";
import Government from "../imgs/government.png";
import Global from "../imgs/global.png";
import gif from "../imgs/partnergif.gif";

const Partners = () => {
  return (
    <div>
      <img src={gif} alt="found"/>
      <h1 style={{
          textAlign: "center",
        }}
      >
        Connect with <span style={{
          color: "#3e7ddb",
          textAlign: "center",
        }}>Partners</span>
      </h1>
      <p style={{margin: "2rem"}}>The Indian innovation ecosystem is growing faster than ever. Startup Overflow aims to build lasting relations with its nationwide network of disruptors and innovators to help fuel business growth and achieve innovation goals. Our innovation programs are one of its kind in the country and have helped over 150 corporates and government departments connect with the most innovative startups for mutually beneficial associations. Our gamut of programs and existing collaborations with our global partners have enabled Indian startups expand beyond boundaries.
Partner with us and tap into our network to accelerate innovation.</p>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 24rem))",
          gap: "2rem",
          justifyContent: "center",
          paddingTop: "2rem",
          paddingBottom: "2rem",
        }}
      >
        <PartnersCard
          img={Corporates}
          title="Corporates"
>>>>>>> 69bb3e27b52cbaa11ea9660ddc3db1fb8d228724
        />
        <PartnersCard
          img={Government}
          title="Government"
        />
        <PartnersCard
          img={Global}
          title="Global Bodies"
        />
      </div>
    </div>
  );
};

<<<<<<< HEAD
export default Partners;


=======
export default Partners;
>>>>>>> 69bb3e27b52cbaa11ea9660ddc3db1fb8d228724
