import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const PatentImportant = () => {
  const [importantContent, setImportantContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/resources/12";

  const importantHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setImportantContent(response.data));
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    importantHandler();
  }, [api]);
  return (
    <div>
      {loading ? (
        <div class="content">{importantContent.title}</div>
      ) : (
        <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default PatentImportant;
