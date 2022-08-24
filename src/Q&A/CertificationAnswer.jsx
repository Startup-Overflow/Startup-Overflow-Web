import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import View from "./view";
const CertificationAnswer = () => {
  const [businessContent, setBusinessContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/questions/answer/16";

  const startupKitHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setBusinessContent(response.data));
      setLoading(true);
    //   console.log(data);
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
        <div>
         {businessContent.map((ans)=>{
            return <View
            desc = {ans.desc}
            />
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
export default CertificationAnswer;