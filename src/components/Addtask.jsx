import { useState } from "react";
import Button from "./Button";

const Addtask = ({ props }) => {
  const [changes, setChanges] = useState();

  const clickchange = (e) => {
    setChanges(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: 5,
        justifyContent: "center",
        width: 345,
      }}
    >
      <input
        style={{
          height: "40px",
          border: "0.3px solid grey",
          width: "280px",
          borderRadius: "6px",
        }}
        type="text"
        placeholder="Add a new task"
        onChange={clickchange}
        value={changes}
      />
      {/* <Button /> */}
      <button
        onClick={clickchange}
        style={{
          // height: "100%",
          height: 40,

          width: "59px",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#3C82F6",
          color: "white",
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Addtask;

{
  /* <button
style={{
  height: "40px",
  width: "59px",
  borderRadius: "6px",
  border: "none",
  backgroundColor: "#3C82F6",
  color: "white",
  cursor: "pointer",
}}
>
Add
</button> */
}
