import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const StartupGuide = () => {
  const [guideContent, setGuideContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/resources/3";

  const startupKitHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setGuideContent(response.data));
      setLoading(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startupKitHandler();
  }, [api]);
  const description = () => {
    return { __html: guideContent.desc };
  };
  return (
    <div>
      {loading ? (
        <div>
          <p>{guideContent.title}</p>
          <div dangerouslySetInnerHTML={description()} />
        </div>
      ) : (
        <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default StartupGuide;
