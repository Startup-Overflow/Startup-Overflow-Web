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
          <h2>Let's Sign In</h2>
          <h4>Welcome to Startup Overflow</h4>
          <Link to="/register" style={{ textDecoration: "none" }}>
            Signup
          </Link>
          <form onSubmit={loginSubmitHandler}>
            <input
              value={username}
              required
              type="text"
              placeholder="Username"
              onChange={(e) => {
                setUsername(e.target.value);
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
            />
            <input type="checkbox" name="" id="" />
            <label htmlFor="">Keep me signed in</label>
            <button type="submit">Sign In</button>
          </form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
