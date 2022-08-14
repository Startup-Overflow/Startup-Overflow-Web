import homeBg from "../imgs/homeBg.png";
import styled from "styled-components";

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
      <Container>
        <Wrapper>check</Wrapper>
      </Container>
    </>
  );
};

export default Home;
