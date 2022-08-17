import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
import NavbarHover from "./NavbarHover";
import { useState } from "react";
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
  margin-left: 15px;
  margin-right: 10px;

  &:hover {
    font-weight: bold;
  }
`;

const Navbar = () => {
  const [isHover, setIsHover] = useState(false);
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
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3e7ddb",
                backgroundColor: "#f0f9ff",
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              <NavItem>About</NavItem>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3e7ddb",
                backgroundColor: "#f0f9ff",
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              <NavItem
                onMouseOver={() => {
                  setIsHover(true);
                }}
                onMouseOut={() => setIsHover(false)}
              >
                Resources
              </NavItem>
            </Link>
            {isHover && (
              <div>
                <NavbarHover t1={"check"} />
              </div>
            )}

            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3e7ddb",
                backgroundColor: "#f0f9ff",
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            ></Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3e7ddb",
                backgroundColor: "#f0f9ff",
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              <NavItem>Schemes & Policies</NavItem>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3e7ddb",
                backgroundColor: "#f0f9ff",
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              <NavItem>Events</NavItem>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3e7ddb",
                backgroundColor: "#f0f9ff",
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              <NavItem>Gallery</NavItem>
            </Link>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#3e7ddb",
                backgroundColor: "#f0f9ff",
                borderRadius: "5px",
                marginRight: "1rem",
              }}
            >
              <NavItem>Q & A</NavItem>
            </Link>
            <Link
              to="/register"
              style={{ textDecoration: "none", color: "black" }}
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
