import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../components/Loader";
import PostView from "../components/PostView";
import postImg from "../imgs/logo.png";

const PostRender = () => {
  const [allpostContent, setAllpostContent] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = "https://startupof.herokuapp.com/posts/";

  const startupKitHandler = async () => {
    try {
      const data = await axios
        .get(api)
        .then((response) => setAllpostContent(response.data));
      setLoading(true);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    startupKitHandler();
  }, [api]);
  // const description = () => {
  //   return { __html: businessContent.desc };
  // };
  console.log(allpostContent);
  return (
    <div>
      {loading ? (
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* <p>{businessContent.title}</p>
          <div dangerouslySetInnerHTML={description()} /> */}
          {allpostContent.map((post) => {
            return (
              <PostView
                key={post.id}
                img={postImg}
                title={post.title}
                name={post.username}
                date={post.post_date}
                button={"Read Post"}
                path={post.id}
              />
            );
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

export default PostRender;
