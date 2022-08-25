import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";

const StartABusiness = () => {
  const [businessContent, setBusinessContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/resources/1";

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
  const description = () => {
    return { __html: businessContent.desc };
  };
  return (
    <div>
      {loading ? (
        
        <div >
          <Navbar/>
          <div style={{margin:"10px"}}><p style={{textAlign:"center", color:"#3e7ddb", marginTop:"6rem", fontSize:"4rem" , fontWeight:"bold"}}>Business</p>
          {/* <p>{businessContent.title}</p> */}
          <div dangerouslySetInnerHTML={description()} /></div>
          
        </div>
      ) : (
        <div style={{ margin: "auto", width: "100vw", height: "100vh" }}>
          <Loader />
        </div>
      )}
    </div>
  );
};

export default StartABusiness;
