import React from "react";
import styles from "../styles/Hover.module.css"; 

const B = (props) => {
  return (
    <button
      className={styles.button} 
      style={{
        color: props.color,
        width: props.width,
        height: "31px",
        borderRadius: "10px",
        border: "none",
        marginLeft: props.marginLeft,
        cursor: "pointer",
        textAlign: "center",
      }}
    >
      {props.text}
    </button>
  );
};

export default B;

