import React from "react";
import Card from "../pages/Card";
import "../pages/Card.css";
import "./Mentors.css";
import Brajesh from "../imgs/Brajesh_Maheshwari.jpg";
import Vinay from "../imgs/Vinay-kumar-reddy.jpg";
import Prasant from "../imgs/Dr P Prasant.jpg";
import Chandan from "../imgs/Chandan_Aggarwal.jpg";
import Durga from "../imgs/Dhana-Durga.jpeg";
import Karan from "../imgs/Karan Shah.jpg";

function Partners(props) {
  return (
    <div>
      <h1 className="card__heading">
        Find Your <span style={{ color: "#3e7ddb" }}>Partners</span>
      </h1>
      <div className="card-container">
        <Card
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
        />
      </div>
    </div>
  );
}

export default Partners;

// import React from "react";
// import PartnersCard from "./PartnersCard";
// import Corporates from "../imgs/Corporate.png";
// import Government from "../imgs/government.png";
// import Global from "../imgs/global.jpg";

// const Partners = () => {
//   return (
//     <div>
//       <h1
//         style={{
//           color: "#3e7ddb",
//           textAlign: "center",
//         }}
//       >
//         Connect with Partners
//       </h1>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(auto-fit, minmax(15rem, 24rem))",
//           gap: "2rem",
//           justifyContent: "center",
//           paddingTop: "2rem",
//           paddingBottom: "2rem",
//         }}
//       >
//         <PartnersCard
//           img={Corporates}
//           title="Corporates"
//         />
//         <PartnersCard
//           img={Government}
//           title="Government"
//         />
//         <PartnersCard
//           img={Global}
//           title="Global Bodies"
//         />
//       </div>
//     </div>
//   );
// };

// export default Partners;
