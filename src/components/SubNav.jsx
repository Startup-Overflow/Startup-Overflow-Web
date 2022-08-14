import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Mentors
        </Link>
        <Link to="/">Partners</Link>
        <Link to="/">Investors</Link>
        <Link to="/">Incubators</Link>
        <Link to="/">Women Entrepreneurs</Link>
        <div style={{ border: "1px solid black" }}>
          <input
            type="text"
            placeholder="search anything"
            style={{ background: "transparent", border: "none" }}
          />
          <i
            class="fa-solid fa-magnifying-glass"
            style={{ cursor: "pointer" }}
          ></i>
        </div>
      </div>
    </>
  );
};

export default SubNav;
