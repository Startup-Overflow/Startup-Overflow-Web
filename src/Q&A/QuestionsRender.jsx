import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import View from "./view";
import styled from "styled-components";

const P = styled.p`
  text-align: right;
  margin-right: 20px;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    font-style: italic;
    color: #3e7ddb;
  }
`;

const QuestionsRender = () => {
  const [questionContent, setQuestionContent] = useState({'title':'Please wait..', 'desc':'Page is loading...'});
  const[answers,setAnswers] = useState([{}]);
  const [loading, setLoading] = useState(false);

  // const pullMe = () => {
  //   setLoading(true)

  //   setTimeout(()=>{
  //       setLoading(false)
  //   }, 4000)
// }

  const api = "https://startupof.herokuapp.com/questions/";
  
  // console.log(api)
  //   useEffect(() => {
  //       fetch(`${api}`,{
  //         method:"GET",
  //         headers: {
  //           "Content-Type": "application/json",
  //         }
  //     })
  //     .then(resp => resp.json())
  //     .then(resp => setQuestionContent(resp))
  //     .catch(error => console.log(error))
  //     },[])

  //     console.log(`https://startupof.herokuapp.com/questions/answer/${questionContent.id}/`)

  //   useEffect(()=>{
  //       fetch(`https://startupof.herokuapp.com/questions/answer/${questionContent.id}`, {
  //           method:"GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           }  
  //       })
  //       .then(resp => resp.json())
  //       .then(resp => setAnswers(resp))
  //       .catch(error => console.log(error))
  //       },[])

  //       console.log(answers);

  //       const html = `${questionContent["desc"]}`

  const startupKitHandler = async () => {
    try {
      
      const data = await axios
        .get(api)
        .then((response) => setQuestionContent(response.data));
      setLoading(true);
      // console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startupKitHandler();
  }, [api]);

  const value =  questionContent.map(async (question)=>{
    return await (question.id)
  })
  console.log(value)

  useEffect(()=>{
    fetch(`https://startupof.herokuapp.com/questions/answer/${value}`, {
      method:"GET",
      headers: {
        "Content-Type": "application/json",
      }  
  })
  .then(resp => resp.json())
  .then(resp => setAnswers(resp))
  .catch(error => console.log(error))
  },[])

  console.log(answers)

  console.log(questionContent.desc);
  console.log(questionContent);
  return (
    <div>
      {loading ? (
        <div style={{ marginTop: "10px" }}>
          <h1
            style={{
              textAlign: "center",
              margin: "auto",
              border: "1px solid black",
              borderRadius: "0.5rem",
              padding: "20px",
              color: "#3e7ddb",
              width: "30vw",
            }}
          >
            Questions
          </h1>
          <P>Ask a Question</P>

          {questionContent.map((question) => {
          
            return (
              <View
                key={question.id}
                title={question.title}
                hashtag={question.hashtag}
                desc={question.desc}
                username={question.username}
              />
            );
          })}
        </div>
      ) : (
        <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default QuestionsRender;
