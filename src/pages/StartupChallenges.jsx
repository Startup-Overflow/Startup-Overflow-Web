import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const StartupChallenges = () => {
  const [challengeContent, setChallengeContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/resources/8";

  const startupChallengesHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setChallengeContent(response.data));
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startupChallengesHandler();
  }, [api]);
  const description = () => {
    return { __html: challengeContent.desc };
  };
  return (
    <div>
      {loading ? (
        <div>
          <div style={{fontSize: "3.5rem", textAlign: "center", color: "#3e7ddb"}}>{challengeContent.title}</div>
          <div  style={{margin: "30px"}} dangerouslySetInnerHTML={description()} />
        </div>
      ) : (
        <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default StartupChallenges;
