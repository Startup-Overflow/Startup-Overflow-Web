import {useState} from "react";
import { Link, Navigate } from "react-router-dom";

function MentorFeedback(){
  const user_id=1;
    const [redirect, setRedirect] = useState(false);
    const [msg, setMsg] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [que_1, setQue_1] = useState("");
    const [que_2, setQue_2] = useState("");
    const [que_3, setQue_3] = useState("");
    const [que_4, setQue_4] = useState("");
    const [que_5, setQue_5] = useState("");

    const SubmitHandler = async (e)=>{
        e.preventDefault();
        const data={};
        data.name=name;
        data.email=email;
        data.user_id=user_id;
        data.que_1=que_1;
        data.que_2=que_2;
        data.que_3=que_3;
        data.que_4=que_4;
        data.que_5=que_5;
        const url = "https://sofrec.herokuapp.com/";
        // const url = "http://192.168.43.166:8000"

        console.log(data);
        const response = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            user_id,
            que_1,
            que_2,
            que_3,
            que_4,
            que_5,
          }),
        });
        const content = await response.json();
        if (typeof content.token !== "undefined") {
          localStorage.setItem("token", content.token);
          console.log("token type", content.token);
          setRedirect(true);
          setMsg("Feedback send!");
        } else {
          setRedirect(false);
          setMsg("Can't process to send feedback!");
        }
    }

    return(
        <div>
            <form style={{display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={SubmitHandler}>
                <label style={{margin: "2rem"}}>
                    Name: 
                    <input type="text" name="name" onChange={(e) => {
                  setName(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    Email id:
                    <input type="text" name="name" onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    How was your experience in three sessions? 
                    <input type="text" name="name" onChange={(e) => {
                  setQue_1(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    How cooperative the mentor was?
                    <input type="text" name="name" onChange={(e) => {
                  setQue_2(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    What did you learn at the end of the sessions?
                    <input type="text" name="name" onChange={(e) => {
                  setQue_3(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    How responsive he/she was?
                    <input type="text" name="name" onChange={(e) => {
                  setQue_4(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    Suggessions given by mentor are worked or not?
                    <input type="text" name="name" onChange={(e) => {
                  setQue_5(e.target.value);
                }}/>
                </label>
                <Link to="/mentors">
                <button type="submit">Give Feedback</button>
                </Link>
                {redirect ? (
                <div><p style={{ color: "red", fontSize: "large" }}>{msg}</p>
                <Navigate to="/mentors"/>
                </div>
                
              ) : null}
            </form>
        </div>
    )
}

export default MentorFeedback;