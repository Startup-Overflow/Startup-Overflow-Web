import homeBg from "../imgs/homeBg.png";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${homeBg});
  background-size: cover;
  display: flex;
`;

const Wrapper = styled.div`
  padding: 100px 30px;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <SubNav />
        </Wrapper>
      </Container>
    </>
  );
};

export default Home;
