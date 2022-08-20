import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import PostDisplay from "./PostDisplay";

const Goals = () => {
  const [businessContent, setBusinessContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/posts/views/36/";

  const startupKitHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setBusinessContent(response.data));
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
  const description = () => {
    return { __html: businessContent.desc };
  };
  return (
    <div>
      {loading ? (
        <div>
          <PostDisplay
            username={businessContent.username}
            date={businessContent.post_date}
            title={businessContent.title}
            short_desc={businessContent.short_desc}
          />
          <div
            style={{ margin: "10px" }}
            dangerouslySetInnerHTML={description()}
          />
        </div>
      ) : (
        <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default Goals;
