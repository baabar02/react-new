const Button = (props) => {
  return (
    <div>
      <button
        style={{
          height: "100%",
          width: "59px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#3C82F6",
          color: "white",
          cursor: "pointer",
        }}
      >
        {props.text}
        Add
      </button>
    </div>
  );
};

export default Button;
