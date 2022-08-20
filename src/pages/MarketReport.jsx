import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";

const MarketReport = () => {
  const [reportContent, setReportContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/resources/6";

  const startupKitHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setReportContent(response.data));
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
    return { __html: reportContent.desc };
  };
  return (
    <div>
      {loading ? (
        <div>
          <p>{reportContent.title}</p>
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

export default MarketReport;
