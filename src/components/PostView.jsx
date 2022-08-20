import { Button } from "./Button";
import { Link } from "react-router-dom";
import "./PostView.css";

function Post(props) {
  return (
    <div className="post">
      <div className="wrapper">
        <div className="post__body">
          <img className="post__image" src={props.img} alt="Img not Found" />
          <h2 className="post__title">{props.title}</h2>
          <div className="posted__by">
            Posted by,
            <span className="posted-by-name">
              <Link
                to="/Login"
                className="postTitleLink"
                style={{
                  textDecoration: "none",
                  color: "#3b82f6",
                  fontWeight: "bold",
                  margin: "0px 10px",
                }}
              >
                {props.name.toUpperCase()}
              </Link>
            </span>
            on
            <span
              className="date"
              style={{
                fontStyle: "italic",
                margin: "0px 10px",
                color: "#9ca3af",
                fontSize: "0.9rem",
              }}
            >
              {props.date}
            </span>
          </div>
        </div>
        <div className="blog__button">
          <Link to={`${props.path}`}>
            <Button buttonStyle="btn--outline">{props.button}</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Post;
