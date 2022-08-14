import { Link } from "react-router-dom";

const SubNav = () => {
  return (
    <>
<<<<<<< HEAD
      <div style={{ display: "flex", flexDirection: "row" }}>
=======
      <div style={{ display: "flex", flexDirection: "row"}}>
>>>>>>> 1d91a0811ef5c57bdf15cc71e587f2b93d331f2b
        <Link to="/" style={{ textDecoration: "none" }}>
          Mentor
        </Link>
        <Link to="/">Partners</Link>
        <Link to="/">Investors</Link>
        <Link to="/">Incubators</Link>
        <Link to="/">Women Entrepreneurs</Link>
        <div style={{ border: "1px solid black" }}>
          <input
            type="text"
            placeholder="search anything"
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
            }}
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
