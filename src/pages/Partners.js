import PartnersCard from "./PartnersCard";
import "./PartnersCard.css";
import Corporates from "../imgs/Corporate.png";
import Government from "../imgs/government.png";
import Global from "../imgs/global.png";
import gif from "../imgs/partnergif.gif";
import {Link} from 'react-router-dom'

const Partners = () => {
  return (
    <div >
      <div style={{marginLeft:"12rem"}}><img src={gif} alt="found"/></div>
      
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
        <Link to='/partnersview' style={{textDecoration:"none"}}>
        <PartnersCard
          img={Corporates}
          title="Corporates"

        />
        </Link>
        <Link to='/partnersview' style={{textDecoration:"none"}}><PartnersCard
          img={Government}
          title="Government"
        /></Link>
        <Link to='/partnersview' style={{textDecoration:"none"}}><PartnersCard
          img={Global}
          title="Global Bodies"
        /></Link>
        
      </div>
    </div>
  );
};


export default Partners;

