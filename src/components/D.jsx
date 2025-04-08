import React from "react";
import styles from "../styles/Hover.module.css";

const D = (props) => {
return (
<div>
<button
      className={styles.buttonF}
      style={{
        backgroundColor: props.backgroundColor,
        color: props.color,
        width: props.width,
        height: "31px",
        borderRadius: "10px",
        border: "none",
        marginLeft: props.marginLeft,
        cursor: "pointer",
        textAlign: "center",
        justifyContent:"center",
        gap:"8px"
      }}
    >
{/*      
      {props.img && (
        <Image
        src={props.img}
        alt="Button icon"
        width={20}
        height={20}
        style={{Objectfit: "contain"}}
        />
    )} */}
    <span style={{ fontSize: "20px" }}>📘</span> {}
    <span className={styles.text}>{props.text}</span>
   

    </button> 
    </div>
)
}

export default D;

 {/* <span
        style={{
          color: isHovered ? "yellow" : props.color || "white",
          fontWeight: isHovered ? "bold" : "normal",
        }}
      >
        {props.text}
      </span> */}