import {useState} from 'react';
import Card from "../pages/Card";
import "../pages/Card.css";
import "./Mentors.css";
import krishna from '../imgs/market/kri.jpg'
import a from '../imgs/market/a.jpg'
import che from '../imgs/market/che.jpg'
import b from '../imgs/market/b.jpg'
import pra from '../imgs/medical/pra.jpg'
import nadig from '../imgs/medical/nadig.jpg'
import lalit from '../imgs/medical/lalit.jpg'
import gayatri from '../imgs/medical/gayatri.jpg'
import anil from '../imgs/medical/anil.jpg'

const PartnersView = () => {
    const [filter,setFilter] = useState('')
return <div><h1 className="card__heading">
Connect with your <span style={{ color: "#3e7ddb" }}>Partners</span>
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
<option value="" selected > Sort Types</option>
<option value="corporate" >Corporte</option>
<option value="government">Government</option>
<option value="global">Market Strategy</option>
</select></div>
<div className="card-container">

{filter === '' && 
<Card
        dom='Market Strategy'
        img={krishna}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"/>
      }
</div>
</div>
}

export default PartnersView;