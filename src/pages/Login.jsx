import loginBg from "../imgs/loginBg.png";
import styled from "styled-components";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import SubNav from "../components/SubNav";
import Host from "../Host";

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
  const [redirect, setRedirect] = useState(false);
  const [msg, setMsg] = useState("");

  const loginSubmitHandler = async (e) => {
    e.preventDefault();
    const loginData = {};
    loginData.username = username;
    loginData.password = password;
    console.log(loginData);
    setUsername("");
    setPassword("");
    const response = await fetch(`${Host}/users/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const content = await response.json();
    if (typeof content.token !== "undefined") {
      localStorage.setItem("token", content.token);
      console.log("token type", content.token);
      setRedirect(true);
      setMsg("Successfully Logged in");
    } else {
      setRedirect(false);
      setMsg("Invalid Username or Password");
    }
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
              Welcome to{" "}
              <span style={{ color: "#fb923c", fontSize: "1.5rem" }}>
                Startup
              </span>{" "}
              <span style={{ color: "#22c55e", fontSize: "1.5rem" }}>
                Overflow
              </span>
            </div>
            <Link
              to="/register"
              style={{
                textAlign: "right",
                paddingRight: "8rem",
                color: "blue",
                marginBottom: "0.5rem"
              }}
            >
              Sign Up
            </Link>
            <form
              onSubmit={loginSubmitHandler}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0rem 8rem",
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
                  marginBottom: "0.8rem",
                  border: "none",
                  borderRadius: "0.3rem",
                  fontSize: "20px",
                }}
              />
              {!redirect ? (
                <p style={{ color: "red", fontSize: "large" }}>{msg}</p>
              ) : null}
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
                  marginBottom: "0.8rem"
                }}
              />
              <div style={{ marginBottom: "1rem" }}>
                <input type="checkbox" name="" id="" />
                <label htmlFor="" style={{ color: "black" }}>
                  Keep me signed in
                </label>
              </div>
              {redirect ? (
                <p style={{ color: "#4ade80", fontSize: "large" }}>{msg}</p>
              ) : null}
              <button
                type="submit"
                style={{
                  backgroundColor: "#fb923c",
                  border: "none",
                  padding: "0.8rem",
                  color: "white",
                  fontSize: "large",
                  borderRadius: "0.3rem",
                  cursor: "pointer",
                }}
              >
                Sign In
              </button>
            </form>
          </LoginWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Login;
