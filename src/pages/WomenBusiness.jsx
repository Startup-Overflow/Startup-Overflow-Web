import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
const WomenBusiness = () => {
  const [businessContent, setBusinessContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/resources/9";

  const startupKitHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setBusinessContent(response.data));
      setLoading(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startupKitHandler();
  }, [api]);
  const description = () => {
    return { __html: businessContent.desc };
  };
  return (
    <div>
      {loading ? (
        <div>
          <p>{businessContent.title}</p>
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
export default WomenBusiness;
