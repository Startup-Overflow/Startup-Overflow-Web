import styled from "styled-components";

const Span = styled.span`
  font-weight: bold;
  cursor: pointer;
  &:hover {
    font-style: italic;
    color: #3e7ddb;
    text-decoration: underline;
  }
`;

const View = (props) => {
  function createMarkup() {
    return { __html: props.desc };
  }
  return (
    <div style={{ margin: "2rem 3rem" }}>
      <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>
        <span
          style={{
            marginRight: "10px",
            fontSize: "2.5rem",
            color: "#3e7ddb",
            fontWeight: "bold",
          }}
        >
          Q
        </span>
        {props.title}
      </div>
      <div style={{ backgroundColor: "#f0f9ff", width: "50vw" }}>
        <p
          style={{ padding: "20px", fontWeight: "bold", color: "#3e7ddb" }}
          dangerouslySetInnerHTML={createMarkup()}
        />
      </div>
      <div>
        <span
          style={{
            fontStyle: "italic",
            fontSize: "0.8rem",
            fontWeight: "bold",
          }}
        >
          Answered By,{" "}
        </span>
        <Span>{props.username}</Span>
        <span
          style={{
            marginLeft: "30px",
            color: "#3e7ddb",
            backgroundColor: "#f0f9ff",
            border: "1px solid #3e7ddb",
            borderRadius: "0.5rem",
            padding: "3px",
            cursor: "pointer",
          }}
        >
          <small>#{props.hashtag}</small>
        </span>
      </div>
    </div>
  );
};

export default View;
