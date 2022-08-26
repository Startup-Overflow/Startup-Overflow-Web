import {useState} from "react";

function MentorFeedback(){
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [ans_1, setAns_1] = useState("");
    const [ans_2, setAns_2] = useState("");
    const [ans_3, setAns_3] = useState("");
    const [ans_4, setAns_4] = useState("");
    const [ans_5, setAns_5] = useState("");

    const SubmitHandler = async (e)=>{
        e.preventDefault();
        const data={};
        data.username=username;
        data.email=email;
        data.ans_1=ans_1;
        data.ans_2=ans_2;
        data.ans_3=ans_3;
        data.ans_4=ans_4;
        data.ans_5=ans_5;

        console.log(data);
    }

    return(
        <div>
            <form style={{display: "flex", flexDirection: "column", alignItems: "center"}} onSubmit={SubmitHandler}>
                <label style={{margin: "2rem"}}>
                    Name: 
                    <input type="text" name="name" onChange={(e) => {
                  setUsername(e.target.value);
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
                  setAns_1(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    How cooperative the mentor was?
                    <input type="text" name="name" onChange={(e) => {
                  setAns_2(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    What did you learn at the end of the sessions?
                    <input type="text" name="name" onChange={(e) => {
                  setAns_3(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    How responsive he/she was?
                    <input type="text" name="name" onChange={(e) => {
                  setAns_4(e.target.value);
                }}/>
                </label>
                <label style={{margin: "2rem"}}>
                    Suggessions given by mentor are worked or not?
                    <input type="text" name="name" onChange={(e) => {
                  setAns_5(e.target.value);
                }}/>
                </label>
                <button type="submit">Give Feedback</button>
            </form>
        </div>
    )
}

export default MentorFeedback;