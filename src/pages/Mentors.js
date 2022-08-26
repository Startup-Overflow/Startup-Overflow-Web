import React from "react";
import Card from "../pages/Card";
import "../pages/Card.css";
import "./Mentors.css";
import Mukesh from '../imgs/investment/mukesh.jpg'
import Alok from '../imgs/investment/alok.jpg'
import Animesh from '../imgs/investment/animesh.jpg'
import mohan from '../imgs/business/mohan.jpg'
import sudhir from '../imgs/business/sudhir.jpg'
import g from '../imgs/business/g.jpg'
import chetan from '../imgs/hardware/chetan.jpg'
import pradeep from '../imgs/hardware/pradeep.jpg'
import vijetha from '../imgs/hardware/vijetha.jpg'
import c from '../imgs/agriculture/c.jpg'
import d from '../imgs/agriculture/d.jpeg'
import ajay from '../imgs/agriculture/ajay.jpg'
import satbir from '../imgs/agriculture/satbir.jpg'
import krishna from '../imgs/market/kri.jpg'
import a from '../imgs/market/a.jpg'
import che from '../imgs/market/che.jpg'
import b from '../imgs/market/b.jpg'
import pra from '../imgs/medical/pra.jpg'
import nadig from '../imgs/medical/nadig.jpg'
import lalit from '../imgs/medical/lalit.jpg'
import gayatri from '../imgs/medical/gayatri.jpg'
import anil from '../imgs/medical/anil.jpg'
import {useState} from 'react'

function Mentors(props) {

  const [filter,setFilter] = useState('')
  console.log(filter)
  return (
    <div>
      <h1 className="card__heading">
        Find Your <span style={{ color: "#3e7ddb" }}>Mentors</span>
      </h1>
      <div style={{display:"flex",alignItems:"right", justifyContent:"right" , marginRight:"40px"}}>
      <select
      style={{height:"2rem", width:"10vw", color:"#3e7ddb", outline:"none", backgroundColor:"#f0f9ff",
    borderRadius:"0.5rem", fontWeight:"bold", border:"2px solid #3e7ddb", cursor:"pointer"
    }}
      onChange = {(e)=>{
        setFilter(e.target.value)
      }}
      ><option value="" selected > Sort Domain [A - Z]</option>
        <option value="investment" >Investment</option>
        <option value="business strategy">Business Strategy</option>
        <option value="market strategy">Market Strategy</option>
        <option value="medical">Medical</option>
        <option value="hardware">Hardware</option>
        <option value="agriculture">Agriculture</option>
      </select>
      </div>
     
      <div className="card-container">
        {
          filter === ''&& 
          <Card 
          img={c}
          dom="agriculture"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='1'
          />
        }
        {
          filter === ''&& 
          <Card 
          img={ajay}
          dom="agriculture"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='2'
          />
        }
        {filter === '' && 
        <Card
        img={d}
          title="Vinay Kumar Reddy Nuvvuru"
          dom="agriculture"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='3'
        />}
        {filter === '' && 
        <Card
        img={satbir}
          title="Vinay Kumar Reddy Nuvvuru"
          dom="agriculture"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='4'
          />
      }
      {filter === '' && 
        <Card
        img={mohan}
        dom="Business Strategy"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='5'/>
      }
      {filter === '' && 
        <Card
        img={sudhir}
        dom="Business Strategy"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='6'/>
      }
      {filter === '' && 
        <Card
        img={g}
        dom="Business Strategy"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='7'/>
      }
      {filter === '' && 
        <Card
        img={chetan}
        dom="Hardware"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='8'/>
      }
      {filter === '' && 
        <Card
        img={pradeep}
        dom="Hardware"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='9'/>
      }
      {filter === '' && 
        <Card
        img={Mukesh}
        dom="Investment"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='10'/>
      }
      {filter === '' && 
        <Card
        img={Alok}
        dom="Investment"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='11'/>
      }
      {filter === '' && 
        <Card
        img={Animesh}
        dom="Investment"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='12'/>
      }

      {filter === '' && 
        <Card
        img={vijetha}
          dom="Hardware"
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='13'/>
      }
      {filter === '' && 
        <Card
        dom='Market Strategy'
        img={krishna}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='14'/>
      }
      {filter === '' && 
        <Card
        dom='Market Strategy'
        img={a}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='15'/>
      }
      {filter === '' && 
        <Card
        dom='Market Strategy'
        img={che}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='16'/>
      }
      {filter === '' && 
        <Card
        dom='Market Strategy'
        img={b}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='17'/>
      }
      {filter === '' && 
        <Card
        dom='medical'
        img={pra}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='18'/>
      }
      {filter === '' && 
        <Card
        img={nadig}
        dom='medical'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='19'/>
      }
      {filter === '' && 
        <Card
        img={lalit}
        dom='medical'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='20'/>
      }
      {filter === '' && 
        <Card
        img={gayatri}
        dom='medical'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          user_id='3'/>
      }{filter === '' && 
      <Card
      img={anil}dom='medical'
        title="Vinay Kumar Reddy Nuvvuru"
        desc="Founder & Chairman of Indian Academy of Competitive Exams"
        btn1="Request Appointment"
        btn2="View Profile"
        user_id='3'/>
    }








        {(filter === 'investment')&& 
        <Card
        img={Mukesh}
        dom='investment'
        title="Brajesh Maheshwari"
        desc="Co-Founder Director of Allen Career Institute"
        btn1="Request Appointment"
        btn2="View Profile"
        />
        }
        {
          (filter === 'investment')&& 
          <Card
          dom='investment'
          img={Alok}
          title="Brajesh Maheshwari"
          desc="Co-Founder Director of Allen Career Institute"
          btn1="Request Appointment"
          btn2="View Profile"
          />
        }
        {
        (filter === 'investment')&& 
        <Card
        img={Animesh}
        dom='investment'
        title="Brajesh Maheshwari"
        desc="Co-Founder Director of Allen Career Institute"
        btn1="Request Appointment"
        btn2="View Profile"
        /> 
        }
        {
         (filter === 'business strategy') && <Card
         img={mohan}
         dom='business strategy'
         title="Vinay Kumar Reddy Nuvvuru"
         desc="Founder & Chairman of Indian Academy of Competitive Exams"
         btn1="Request Appointment"
         btn2="View Profile"
         />
        }
        {
         (filter === 'business strategy') && <Card
         img={sudhir}
         dom='business strategy'
         title="Vinay Kumar Reddy Nuvvuru"
         desc="Founder & Chairman of Indian Academy of Competitive Exams"
         btn1="Request Appointment"
         btn2="View Profile"
         />
        }
        {
         (filter === 'business strategy') && <Card
         img={g}
         dom='business strategy'
         title="Vinay Kumar Reddy Nuvvuru"
         desc="Founder & Chairman of Indian Academy of Competitive Exams"
         btn1="Request Appointment"
         btn2="View Profile"
         />
        }
        {
         (filter === 'hardware') && <Card
         img={chetan}
         dom='hardware'
         title="Vinay Kumar Reddy Nuvvuru"
         desc="Founder & Chairman of Indian Academy of Competitive Exams"
         btn1="Request Appointment"
         btn2="View Profile"
         />
        }        {
          (filter === 'hardware') && <Card
          img={pradeep}
          dom='hardware'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
          {
          (filter === 'hardware') && <Card
          img={vijetha}
          dom='hardware'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
                   {
          (filter === 'agriculture') && <Card
          img={c}
          dom='agriculture'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
         {
          (filter === 'agriculture') && <Card
          img={d}
          dom='agriculture'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
          {
          (filter === 'agriculture') && <Card
          img={ajay}
          dom='agriculture'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
           {
          (filter === 'agriculture') && <Card
          img={satbir}
          dom='agriculture'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
          {
          (filter === 'market strategy') && <Card
          img={krishna}
          dom='Market Strategy'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
          {        (filter === 'market strategy') && <Card
          img={a}
          dom='Market Strategy'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
         {        (filter === 'market strategy') && <Card
          img={che}
          dom='Market Strategy'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
         {        (filter === 'market strategy') && <Card
          img={b}
          dom='Market Strategy'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
         {        (filter === 'medical') && <Card
          img={pra}
          dom='medical'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
         {        (filter === 'medical') && <Card
          img={nadig}
          dom='medical'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
          {        (filter === 'medical') && <Card
          img={lalit}
          dom='medical'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
  {        (filter === 'medical') && <Card
          img={gayatri}
          dom='medical'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }
         {        (filter === 'medical') && <Card
          img={anil}dom='medical'
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
          />
         }



        {/* <Card
          img={Brajesh}
          title="Brajesh Maheshwari"
          desc="Co-Founder Director of Allen Career Institute"
          btn1="Request Appointment"
          btn2="View Profile"
        />
        <Card
          img={Vinay}
          title="Vinay Kumar Reddy Nuvvuru"
          desc="Founder & Chairman of Indian Academy of Competitive Exams"
          btn1="Request Appointment"
          btn2="View Profile"
        />
        <Card
          img={Prasant}
          title="Dr P Prasant"
          desc="Speaker, Educator and Administrator in teaching Cyber Security IT, Computer Applications, and Management Courses"
          btn1="Request Appointment"
          btn2="View Profile"
        />
        <Card
          img={Chandan}
          title="Dr Chandan Agarwal"
          desc="Chairperson of G.D. Goenka School, Kanpur & Bareilly"
          btn1="Request Appointment"
          btn2="View Profile"
        />
        <Card
          img={Durga}
          title="Dhana Durga"
          desc="Founder and Principal, Sree Vivekananda Educational Society"
          btn1="Request Appointment"
          btn2="View Profile"
        />
        <Card
          img={Karan}
          title="Karan Shah"
          desc="Founder & CEO of IIDE of India's Leading Digital Marketing Edtech"
          btn1="Request Appointment"
          btn2="View Profile"
        /> */}
      </div>
    </div>
  );
}

export default Mentors;
