import styled from "styled-components";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import registerBg from "../imgs/registerBg.png";
import SubNav from "../components/SubNav";
import Host from "../Host";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${registerBg});
  background-size: cover;
  display: flex;
`;

const Wrapper = styled.div`
  margin: 100px 30px;
`;

const RegisterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 30vh;
`;

const Register = () => {
  const [first_name, setfirst_name] = useState("");
  const [last_name, setlast_name] = useState("");
  const [email, setemail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirm_password, setconfirm_password] = useState("");
  const [redirect, setRedirect] = useState(false);
  const registerSubmitHandler = async (e) => {
    e.preventDefault();
    const registerData = {};
    registerData.first_name = first_name;
    registerData.last_Name = last_name;
    registerData.username = username;
    registerData.email = email;
    registerData.password = password;
    registerData.confirm_password = confirm_password;
    console.log(registerData);
    setfirst_name("");
    setlast_name("");
    setusername("");
    setemail("");
    setpassword("");
    setconfirm_password("");
    if (password === confirm_password) {
      const response = await fetch(`${Host}/users/register/`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          first_name,
          last_name,
          email,
          username,
          password,
          confirm_password,
        }),
      });
      setRedirect(true);
      const content = await response.json();
      console.log(content);
    }
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <SubNav />
          <RegisterWrapper>
            <h1 style={{ textAlign: "center", color: "#fb923c" }}>
              Please Sign Up
            </h1>
            <form
              onSubmit={registerSubmitHandler}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "0rem 8rem",
              }}
            >
              <div style={{ marginBottom: "0.5rem" }}>
                <input
                  type="text"
                  placeholder="First Name"
                  required
                  value={first_name}
                  onChange={(e) => {
                    setfirst_name(e.target.value);
                  }}
                  style={{
                    padding: "0.8rem",
                    marginBottom: "0.5rem",
                    border: "none",
                    borderRadius: "0.3rem",
                    fontSize: "20px",
                    marginRight: "1rem",
                  }}
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  required
                  value={last_name}
                  onChange={(e) => {
                    setlast_name(e.target.value);
                  }}
                  style={{
                    padding: "0.8rem",
                    marginBottom: "0.5rem",
                    border: "none",
                    borderRadius: "0.3rem",
                    fontSize: "20px",
                  }}
                />
              </div>
              <input
                type="text"
                placeholder="Username"
                required
                value={username}
                onChange={(e) => {
                  setusername(e.target.value);
                }}
                style={{
                  padding: "0.8rem",
                  marginBottom: "0.8rem",
                  border: "none",
                  borderRadius: "0.3rem",
                  fontSize: "20px",
                }}
              />
              <input
                type="email"
                placeholder="Email Id"
                required
                value={email}
                onChange={(e) => {
                  setemail(e.target.value);
                }}
                style={{
                  padding: "0.8rem",
                  marginBottom: "0.8rem",
                  border: "none",
                  borderRadius: "0.3rem",
                  fontSize: "20px",
                }}
              />
              <div style={{ marginBottom: "0.5rem" }}>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                  style={{
                    padding: "0.8rem",
                    marginBottom: "0.5rem",
                    border: "none",
                    borderRadius: "0.3rem",
                    fontSize: "20px",
                    marginRight: "1rem",
                  }}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  required
                  value={confirm_password}
                  onChange={(e) => {
                    setconfirm_password(e.target.value);
                  }}
                  style={{
                    padding: "0.8rem",
                    marginBottom: "0.5rem",
                    border: "none",
                    borderRadius: "0.3rem",
                    fontSize: "20px",
                  }}
                />
              </div>
              <Link
                to="/login"
                style={{
                  textAlign: "right",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                Already have an Account
              </Link>
              {redirect ? (
                <p style={{ color: "green", fontSize: "small" }}>
                  Successfully Registered!!
                </p>
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
                  marginTop: "0.5rem",
                  cursor: "pointer",
                }}
              >
                Sign Up
              </button>
            </form>
          </RegisterWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;