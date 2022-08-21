import homeBg from "../imgs/homeBg.png";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SubNav from "../components/SubNav";
import "./Home.css";
import PostRender from "../Posts/PostRender";
import Footer from "./Footer";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${homeBg});
  background-size: cover;
  display: flex;
`;

const Wrapper = styled.div`
  margin: 100px 30px;
`;

const Home = () => {
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <SubNav />
          <div div class="home-body">
            <p class="p1">
              <span class="s" style={{ color: "#3b82f6" }}>
                Start
              </span>
              <span class="s" style={{ color: "#3b82f6" }}>
                &
              </span>
              <span class="s" style={{ color: "#3b82f6" }}>
                Grow
              </span>
              <span class="s" style={{ color: "#3b82f6" }}>
                Your
              </span>
              <span class="s" style={{ color: "#22c55e" }}>
                Business
              </span>
            </p>
          </div>
        </Wrapper>
      </Container>
      <div
        style={{
          height: "60px",
          width: "20rem",
          backgroundColor: "#f0f9ff",
          display: "flex",
          margin: "auto",
          marginTop: "20px",
          marginBottom: "20px",
          alignItems: "center",
          justifyContent: "center",
          border: "1px solid #3b82f6",
          borderRadius: "0.5rem",
        }}
      >
        <p
          style={{
            textAlign: "center",
            color: "#3b82f6",
            fontWeight: "bold",
            fontSize: "2rem",
          }}
        >
          Recent Posts
        </p>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "1rem",
          margin: "1rem"
        }}
      >
        <PostRender />
      </div>

      <Footer />
    </>
  );
};

export default Home;
