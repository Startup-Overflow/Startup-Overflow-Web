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
  const [questionContent, setQuestionContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/questions/";

  const startupKitHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setQuestionContent(response.data));
      setLoading(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startupKitHandler();
  }, [api]);
  // console.log(businessContent.desc);
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
