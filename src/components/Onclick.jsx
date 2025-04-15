import { useState } from "react";

const Onclick = ({ changes, setChanges }) => {
  const handleChange = (e) => {
    setChanges(e.target.value);
    console.log(e.target.value);
  };

  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column", gap: "10" }}>
        <input
          type="text"
          placeholder="enter name"
          value={changes}
          onChange={handleChange}
        />
        <p>my name is {changes}</p>
      </div>
    </div>
  );
};

export default Onclick;
