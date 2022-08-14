import styled from "styled-components";
import { Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
const Container = styled.div`
  height: 0px;
`;

const Wrapper = styled.div`
  padding: 12px 20px;
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
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <Left>
            <Link to="/home">
              <Img src={Logo} />
            </Link>
          </Left>
          <Right>
            <NavItem>ABOUT</NavItem>
            <NavItem>RESOURCES</NavItem>
            <NavItem>SCHEME & POLICIES</NavItem>
            <NavItem>EVENTS</NavItem>
            <NavItem>GALLERY</NavItem>
            <NavItem>Q & A</NavItem>
            <i class="fa-solid fa-circle-user"></i>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
