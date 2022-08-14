import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <>
      <div style={{ display: "flex", flexDirection: "row", padding: "0.5rem 0rem"}}>
        <Link to="/" style={{ textDecoration: "none" }}>
          Mentor
        </Link>
        <Link to="/">Partners</Link>
        <Link to="/">Investors</Link>
        <Link to="/">Incubators</Link>
        <Link to="/">Women Entrepreneurs</Link>
        <input
          type="text"
          placeholder="search anything"
          style={{ background: "transparent" }}
        />
      </div>
    </>
  );
};

export default SubNav;
