import SessionCard from "./SessionCard";
import Session1 from "../imgs/session1.webp";
import Session2 from "../imgs/session2.png";
import Session3 from "../imgs/session3.webp";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import Footer from "../pages/Footer";

const Events = () => {
  return (
    <div>
      <Navbar/>
      <div style={{marginTop:"6rem", marginLeft:"2rem"}}><SubNav/></div>
      <h1
        style={{
          color: "#3e7ddb",
          textAlign: "center",
        }}
      >
        Upcoming Live Sessions
      </h1>
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
        <SessionCard
          img={Session1}
          title="Innovation & Entrepreneurship"
          date="18/01/22 - 10/05/22"
          time="05:30 am IST"
        />
        <SessionCard
          img={Session2}
          title="Academy for Women Entrepreneurs"
          date="26/09/22"
          time="12:00 pm IST - 02:00 pm IST"
        />
        <SessionCard
          img={Session3}
          title="Entrepreneur Business Accelerator"
          date="14/03/22 - 23/03/22"
          time="08:00 am IST - 05:00 pm IST"
        />
      </div>
      <Footer/>
    </div>
  );
};

export default Events;
