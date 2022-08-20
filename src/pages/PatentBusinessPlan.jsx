import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const PatentBusinessPlan = () => {
  const [patentContent, setPatentContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/resources/7";

  const patentHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setPatentContent(response.data));
      setLoading(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    patentHandler();
  }, [api]);
  const description = () => {
    return { __html: patentContent.desc };
  };
  return (
    <div>
      {loading ? (
        <div>
          <p>{patentContent.title}</p>
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

export default PatentBusinessPlan;
