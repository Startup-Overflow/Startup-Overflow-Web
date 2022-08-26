import PartnersCard from "./PartnersCard";
import "./PartnersCard.css";
import Corporates from "../imgs/Corporate.png";
import Government from "../imgs/government.png";
import Global from "../imgs/global.png";
import gif from "../imgs/partnergif.gif";
import {Link} from 'react-router-dom'

const InvestorsLanding = () => {
return <div>      <div style={{marginLeft:"12rem"}}><img src={gif} alt="found"/></div>
      
<h1 style={{
    textAlign: "center",
  }}
>
  Meet our <span style={{
    color: "#3e7ddb",
    textAlign: "center",
  }}>Investors</span>
</h1>
<p style={{margin: "2rem"}}>Funding refers to the money required to start and run a business. It is a financial investment in a company for product development, manufacturing, expansion, sales and marketing, office spaces, and inventory. Many startups choose to not raise funding from third parties and are funded by their founders only (to prevent debts and equity dilution). However, most startups do raise funding, especially as they grow larger and scale their operations. This page shall be your virtual guide to Startup funding. 

</p>
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
        <Link to='/investors' style={{textDecoration:"none"}}>
        <PartnersCard
          img={Corporates}
          title="Angel"

        />
        </Link>
        <Link to='/investors' style={{textDecoration:"none"}}><PartnersCard
          img={Government}
          title="Accelerators"
        /></Link>
        <Link to='/investors' style={{textDecoration:"none"}}><PartnersCard
          img={Global}
          title="Venture Capital Firms"
        /></Link>
        
      </div>

</div>
}

export default InvestorsLanding