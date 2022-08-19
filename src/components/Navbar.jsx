import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";

import { NavItems } from "../pages/NavItems";
import MenuItems from "./MenuItems";
import { NavLink } from "react-router-dom";
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

const Right = styled.ul`
  /* list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end; */
  display: flex;
  align-items: center;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 20px;
  height: 58px;
`;

const NavItem = styled.li`
  font-size: 20px;
  cursor: pointer;
  list-style: none;
  margin-left: 4px;
  padding: 2px 4px;
  color: #3e7ddb;
  background-color: #f0f9ff;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 1.8rem;
  transition: color 0.6s ease-in-out, box-shadow 0.6s ease-in-out;
  &:hover {
    box-shadow: inset 198px 0 0 0 #3e7ddb;
    color: #f0f9ff;
  }
`;

const Navbar = () => {
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
            {/* <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>{NavItems[0].title}</NavItem>
            </Link>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavItem>{NavItems[1].title}</NavItem>
              </Link>
            </div>
            <Link to="/" style={{}}></Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>{NavItems[2].title}</NavItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>{NavItems[3].title}</NavItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>{NavItems[4].title}</NavItem>
            </Link>
            <Link to="/" style={{ textDecoration: "none" }}>
              <NavItem>{NavItems[5].title}</NavItem>
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
            </Link> */}
            {NavItems.map((nav, index, path) => {
              const depthLevel = 0;
              <NavLink to={`/${path}`}></NavLink>
              return (
                <MenuItems
                  items={nav}
                  key={index}
                  depthLevel={depthLevel}
                  path={path}
                />
              );
            })}
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
