import { Bluetooth } from "lucide-react";
import Button from "../todo/To-do-Button";

const Filtertask = () => {
  // const changeBtn = {
  //   backgroundColor: "blue",
  // };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: 345,
        gap: 6,
      }}
    >
      {/* <Button
        backgroundColor="#3C82F6"
        color="white"
        width="100%" 
        onClick={onclick}
        text="all"
        changeBtn={changeBtn}
      /> */}

      <button
        style={{
          marginTop: 20,
          height: 32,
          width: 38,
          border: "none",
          borderRadius: 6,
          backgroundColor: "#3C82F6",
          color: "white",
          cursor: "pointer",
        }}
      >
        All
      </button>
      <button
        style={{
          marginTop: 20,
          height: 32,
          width: 60,
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Active
      </button>
      <button
        style={{
          marginTop: 20,
          height: 32,
          width: 87,
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Completed
      </button>
      <button
        style={{
          marginTop: 20,
          marginLeft: "80px",
          marginRight: "20x",
          height: 32,
          width: 60,
          border: "none",
          borderRadius: 6,
          cursor: "pointer",
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Filtertask;
