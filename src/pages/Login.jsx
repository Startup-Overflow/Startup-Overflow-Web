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
  padding: 100px 30px;
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
          <h1 style={{textAlign: "center", color: "#f97316"}}>Let's Sign In</h1>
          <h4 style={{textAlign: "center", color: "blue"}}>Welcome to <span style={{color: "#f97316"}}>Startup</span> <span style={{color: "green"}}>Overflow</span></h4>
          <Link to="/register" style={{textAlign: "right"}}>
            Signup
          </Link>
          <form onSubmit={loginSubmitHandler} style={{display: "flex", flexDirection: "column", padding: "0rem 5rem"}}>
            <input
              value={username}
              required
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              style={{padding: "1rem", marginBottom: "1rem", border: "none", borderRadius: "0.5rem"}}
            />
            <input
              value={password}
              required
              type="password"
              placeholder="Password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              style={{padding: "1rem",border: "none", borderRadius: "0.5rem"}}
            />
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Keep me signed in</label>
            <button type="submit">Sign In</button>
          </form>
          </LoginWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
