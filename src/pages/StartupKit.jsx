import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const StartupKit = () => {
  const [kitContent, setKitContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/resources/2";

  const startupKitHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setKitContent(response.data));
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startupKitHandler();
  }, [api]);
  return (
    <div>
      {loading ? (
        <div>{kitContent.title}</div>
      ) : (
        <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default StartupKit;
