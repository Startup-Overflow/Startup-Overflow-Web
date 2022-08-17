import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
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
<<<<<<< HEAD
          <Link to="/" style={{ textDecoration: "none", color: "#3e7ddb" , backgroundColor: "#f0f9ff", borderRadius: "5px", marginRight: "1rem"}}><NavItem>About</NavItem></Link>
          <Link to="/" style={{ textDecoration: "none", color: "#3e7ddb" , backgroundColor: "#f0f9ff", borderRadius: "5px", marginRight: "1rem"}}><NavItem>Resources</NavItem></Link>
          <Link to="/" style={{ textDecoration: "none", color: "#3e7ddb" , backgroundColor: "#f0f9ff", borderRadius: "5px", marginRight: "1rem"}}><NavItem>Schemes & Policies</NavItem></Link>
          <Link to="/" style={{ textDecoration: "none", color: "#3e7ddb" , backgroundColor: "#f0f9ff", borderRadius: "5px", marginRight: "1rem"}}><NavItem>Events</NavItem></Link>
          <Link to="/" style={{ textDecoration: "none", color: "#3e7ddb" , backgroundColor: "#f0f9ff", borderRadius: "5px", marginRight: "1rem"}}><NavItem>Gallery</NavItem></Link>
          <Link to="/" style={{ textDecoration: "none", color: "#3e7ddb" , backgroundColor: "#f0f9ff", borderRadius: "5px", marginRight: "1rem"}}><NavItem>Q & A</NavItem></Link>
=======
            <NavItem>About</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Scheme & Policies</NavItem>
            <NavItem>Events</NavItem>
            <NavItem>Gallery</NavItem>
            <NavItem>Q & A</NavItem>
>>>>>>> 1181b744001d5f942d5c7b888aa8930414cc2c67
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
