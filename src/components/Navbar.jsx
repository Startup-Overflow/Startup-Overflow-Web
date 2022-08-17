import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
import { useState } from "react";
import ResourcesDropdown from "./ResourcesDropdown";
const Container = styled.div`
  height: 0px;
`;

const Wrapper = styled.div`
  padding: 12px 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  width: 8vw;
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const NavItem = styled.div`
  font-size: 20px;
  cursor: pointer;
  margin-left: 4px;
  padding: 2px 4px;
  color: #3e7ddb;
  background-color: #f0f9ff;
  border-radius: 5px;
  margin-right: 1.8rem;
`;

const Navbar = () => {
  const [dropdown, showDropdown] = useState(false);
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/">
              <Img src={Logo} />
            </Link>
          </Left>
          <Right>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>About</NavItem>
            </Link>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavItem
                  onMouseEnter={() => showDropdown(true)}
                  onMouseLeave={() => showDropdown(false)}
                >
                  Resources
                </NavItem>
              </Link>
              {<ResourcesDropdown />}
            </div>
            <Link to="/" style={{}}></Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>Schemes & Policies</NavItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>Events</NavItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>Gallery</NavItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>Q & A</NavItem>
            </Link>
            <Link
              to="/register"
              style={{
                textDecoration: "none",
                color: "black",
                height: "35px",
                width: "35px",
                borderRadius: "50%",
                backgroundColor: "#f0f9ff",
              }}
            >
              <NavItem>
                <i class="fa-solid fa-circle-user"></i>
              </NavItem>
            </Link>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
