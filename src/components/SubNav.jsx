import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const NavTabs = styled.div`
  border: 2px solid black;
  border-radius: 1rem;
  padding: 5px;
  margin-right: 2rem;
`;

const SubNav = () => {
  return (
    <>
      <Wrapper>
        <NavTabs>
          <Link
            to="/mentors"
            style={{
              textDecoration: "none",
              marginRight: "1rem",
              marginLeft: "1rem",
              color: "#3e7ddb",
              fontWeight: "bold",
            }}
          >
            Mentors
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "1rem",
              color: "#3e7ddb",
              fontWeight: "bold",
            }}
          >
            Partners
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "1rem",
              color: "#3e7ddb",
              fontWeight: "bold",
            }}
          >
            Investors
          </Link>
          <Link
            to="/"
            style={{
              textDecoration: "none",
              marginRight: "1rem",
              color: "#3e7ddb",
              fontWeight: "bold",
            }}
          >
            Incubators
          </Link>
          <Link
            to="/womenlanding"
            style={{
              textDecoration: "none",
              marginRight: "1rem",
              color: "#3e7ddb",
              fontWeight: "bold",
            }}
          >
            Women Entrepreneurs
          </Link>
        </NavTabs>
        <div
          style={{
            border: "2px solid #3e7ddb",
            borderRadius: "1rem",
            padding: "5px",
          }}
        >
          <input
            type="text"
            placeholder="ask anything..."
            style={{
              background: "transparent",
              border: "none",
              outline: "none",
            }}
          />
          <i
            class="fa-solid fa-magnifying-glass"
            style={{ cursor: "pointer", color: "#3e7ddb" }}
          ></i>
        </div>
      </Wrapper>
    </>
  );
};

export default SubNav;
