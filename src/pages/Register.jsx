import styled from "styled-components";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import registerBg from "../imgs/registerBg.png";
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${registerBg});
  background-size: cover;
  display: flex;
`;

const Wrapper = styled.div`
  padding: 100px 30px;
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
          <h2>Please Sign Up</h2>
          <form onSubmit={registerSubmitHandler}>
            <input
              type="text"
              placeholder="First Name"
              required
              value={fName}
              onChange={(e) => {
                setFName(e.target.value);
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
            />
            <input
              type="text"
              placeholder="Username"
              required
              value={uName}
              onChange={(e) => {
                setUName(e.target.value);
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
            />
            <input
              type="password"
              placeholder="Password"
              required
              value={pass}
              onChange={(e) => {
                setPass(e.target.value);
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
            />
            <Link to="/login" style={{ textDecoration: "none" }}>
              Already have an Account
            </Link>
            <button type="submit">Sign Up</button>
          </form>
        </Wrapper>
      </Container>
    </>
  );
};

export default Register;
