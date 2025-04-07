// src/components/Button.jsx
import React from 'react';
// import ''; 

const Button = (props) => {
  return (
    <button
      className="custom-button"
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: props.width,
        height: "48px",
        borderRadius: "4px",
        border: "none",
        marginLeft: props.marginLeft,
        cursor: "pointer",
        textAlign: "center"
      }}
    >
      {props.text}
    </button>
  );
};

export default Button;