import styled from "styled-components";
import Logo from "../imgs/logo.png";
import { Link } from "react-router-dom";
const Container = styled.div`
  height: 0px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;

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
  height: 18%;
  width: 18%;
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
            <Img src={Logo} />
          </Left>
          <Right>
            <NavItem>ABOUT</NavItem>
            <NavItem>RESOURCES</NavItem>
            <NavItem>SCHEME & POLICIES</NavItem>
            <NavItem>EVENTS</NavItem>
            <NavItem>GALLERY</NavItem>
            <NavItem>Q & A</NavItem>
          </Right>
        </Wrapper>
      </Container>
    </>
  );
};

export default Navbar;
