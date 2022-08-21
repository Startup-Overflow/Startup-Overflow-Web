import Women from "../imgs/women.jpg";
import styled from "styled-components";
import { Link } from "react-router-dom";

const WomenLanding = () => {
  const Button = styled.div`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    text-align: center;
    padding: 6rem;
    margin: 0rem 4rem;
    font-size: 2rem;
    color: white;
    font-weight: bold;
    background: rgb(57, 128, 233);
    background: linear-gradient(
      90deg,
      rgba(57, 128, 233, 1) 0%,
      rgba(118, 168, 242, 1) 35%,
      rgba(155, 186, 232, 1) 100%
    );
    cursor: pointer;
    &:hover {
      background: rgb(57, 128, 233);
      background: linear-gradient(
        180deg,
        rgba(57, 128, 233, 1) 0%,
        rgba(118, 168, 242, 1) 35%,
        rgba(155, 186, 232, 1) 100%
      );
    }
  `;
  return (
    <>
      <div>
        <div
          style={{
            height: "75vh",
            width: "100vw",
            backgroundColor: "#f0f9ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={Women}
            alt="banner"
            style={{
              border: "2px solid #3e7ddb",
              borderRadius: "0.5rem",
              boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            margin: "60px 30px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Link to="/womenbusiness" style={{ textDecoration: "none" }}>
            <Button>Women in Business</Button>
          </Link>
          <Link to="/narishakti" style={{ textDecoration: "none" }}>
            <Button>Nari Shakti</Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default WomenLanding;
