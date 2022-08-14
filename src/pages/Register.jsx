import styled from "styled-components";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import registerBg from "../imgs/registerBg.png";
import SubNav from "../components/SubNav";
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
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [uName, setUName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");
  const [cPass, setCPass] = useState("");

  const registerSubmitHandler = (e) => {
    e.preventDefault();
    const registerData = {};
    registerData.fName = fName;
    registerData.lName = lName;
    registerData.uName = uName;
    registerData.mail = mail;
    registerData.pass = pass;
    registerData.cPass = cPass;
    console.log(registerData);
    setFName("");
    setLName("");
    setUName("");
    setMail("");
    setPass("");
    setCPass("");
  };
  return (
    <>
      <Navbar />
      <Container>
        <Wrapper>
          <SubNav />
          <RegisterWrapper>
          <h1 style={{ textAlign: "center", color: "#fb923c" }}>Please Sign Up</h1>
          <form onSubmit={registerSubmitHandler}
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "0rem 5rem",
          }}>
            <div style={{marginBottom: "0.8rem"}}>
            <input
              type="text"
              placeholder="First Name"
              required
              value={fName}
              onChange={(e) => {
                setFName(e.target.value);
              }}
              style={{
                padding: "0.8rem",
                marginBottom: "0.5rem",
                border: "none",
                borderRadius: "0.3rem",
                fontSize: "20px",
                marginRight:"1rem"
              }}
            />
            <input
              type="text"
              placeholder="Last Name"
              required
              value={lName}
              onChange={(e) => {
                setLName(e.target.value);
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
              value={uName}
              onChange={(e) => {
                setUName(e.target.value);
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
              value={mail}
              onChange={(e) => {
                setMail(e.target.value);
              }}
              style={{
                padding: "0.8rem",
                marginBottom: "0.8rem",
                border: "none",
                borderRadius: "0.3rem",
                fontSize: "20px",
              }}
            />
            <div style={{marginBottom: "0.5rem"}}>
            <input
              type="password"
              placeholder="Password"
              required
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
              }}
              style={{
                padding: "0.8rem",
                marginBottom: "0.5rem",
                border: "none",
                borderRadius: "0.3rem",
                fontSize: "20px",
                marginRight:"1rem"
              }}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              required
              value={cPass}
              onChange={(e) => {
                setCPass(e.target.value);
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
            <Link to="/login" style={{ textAlign: "right" , color: "white", textDecoration: "none"}}>
              Already have an Account
            </Link>
            <button type="submit" style={{backgroundColor: "#fb923c", border: "none", padding: "0.8rem", color: "white", fontSize:"large", borderRadius: "0.3rem" ,marginTop: "0.5rem"}}>Sign Up</button>
          </form>
          </RegisterWrapper>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
