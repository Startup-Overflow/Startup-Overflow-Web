const PostDisplay = (props) => {
  return (
    <div
      style={{
        height: "40vh",
        width: "100vw",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          backgroundColor: "#f0f9ff",
          border: "3px solid #3e7ddb",
          margin: "10px",
          width: "95vw",
          borderRadius: "0.5rem",
        }}
      >
        <p
          style={{
            marginTop: "0px",
            textAlign: "left",
            padding: "20px 20px",
          }}
        >
          {props.title}
        </p>
        <hr style={{ margin: "0px 20px" }} />
        <p style={{ textAlign: "left", padding: "0px 20px" }}>
          Posted By, {props.username}
        </p>
        <p style={{ textAlign: "left", padding: "0px 20px" }}>
          At <small style={{ fontStyle: "italic" }}>{props.date}</small>
        </p>
        <p style={{ padding: "0px 20px" }}>{props.short_desc}</p>
      </div>
    </div>
  );
};

export default PostDisplay;
