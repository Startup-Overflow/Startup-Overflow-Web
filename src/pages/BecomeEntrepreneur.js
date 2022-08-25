import React from "react";
import PartnersCard from "./PartnersCard";
import "./PartnersCard.css";

const BecomeEntrepreneur = () => {
  return (
    <div>
      <h1 style={{
          textAlign: "center",
        }}
      >
        Find <span style={{
          color: "#3e7ddb",
          textAlign: "center",
        }}>Resources</span>
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
        <PartnersCard
          title="Start a Business"
        />
        <PartnersCard
          title="Grow a Business"
        />
      </div>
    </div>
  );
};

export default BecomeEntrepreneur;