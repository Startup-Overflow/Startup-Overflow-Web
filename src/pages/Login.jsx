import loginBg from "../imgs/loginBg.png";
import styled from "styled-components";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import SubNav from "../components/SubNav";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${loginBg});
  background-size: cover;
  display: flex;
`;

const Wrapper = styled.div`
  margin: 100px 30px;
`;

const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginSubmitHandler = (e) => {
    e.preventDefault();
    const loginData = {};
    loginData.username = username;
    loginData.password = password;
    console.log(loginData);
    setUsername("");
    setPassword("");
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <SubNav />
          <LoginWrapper>
            <h1 style={{ textAlign: "center", color: "#fb923c" }}>
              Let's Sign In
            </h1>
            <div style={{ textAlign: "center", color: "blue" }}>
              Welcome to <span style={{ color: "#fb923c", fontSize:"1.5rem"}}>Startup</span>{" "}
              <span style={{ color: "#22c55e",fontSize:"1.5rem"}}>Overflow</span>
            </div>
            <Link to="/register" style={{ textAlign: "right" , paddingRight: "5rem", color: "blue"}}>
              Sign Up
            </Link>
            <form
              onSubmit={loginSubmitHandler}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0rem 5rem",
              }}
            >
              <input
                value={username}
                required
                type="text"
                placeholder="Username"
                onChange={(e) => {
                  setUsername(e.target.value);
                }}
                style={{
                  padding: "0.8rem",
                  marginBottom: "1rem",
                  border: "none",
                  borderRadius: "0.3rem",
                  fontSize: "20px",
                  margin: "20px 0px",
                }}
              />
              <input
                value={password}
                required
                type="password"
                placeholder="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                style={{
                  padding: "0.8rem",
                  border: "none",
                  borderRadius: "0.3rem",
                  fontSize: "20px",
                  margin: "20px 0px",
                }}
              />
              <div style={{marginBottom: "1rem"}}>
              <input type="checkbox" name="" id="" />
              <label htmlFor="" style={{color: "black"}}>Keep me signed in</label>
              </div>
              <button type="submit"style={{backgroundColor: "#fb923c", border: "none", padding: "0.8rem", color: "white", fontSize:"large", borderRadius: "0.3rem"}} >Sign In</button>
            </form>
          </LoginWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
