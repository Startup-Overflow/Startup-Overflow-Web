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
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    patentHandler();
  }, [api]);
  return (
    <div>
      {loading ? (
        <div>{patentContent.title}</div>
      ) : (
        <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default PatentBusinessPlan;
