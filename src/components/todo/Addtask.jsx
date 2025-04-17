import Button from "./To-do-Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const Addtask = ({ task, setTask, allSet, all, handleChecked }) => {
  const handleChange = (event) => {
    setTask(event.target.value);
    console.log(event.target.value);
  };

  const clickHandler = () => {
    const randomId = uuidv4();
    if (task === "") {
      alert("please enter task name");
      return;
    }

    allSet((prev) => [
      ...prev,
      { taskName: task, taskChecked: false, id: randomId },
    ]);
    setTask("");
  };

  const deleteHandler = () => {
    setTask("");
  };

  const handleChecked = () => {
    allSet((prev) => [...prev, { id: randomId }]);
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
        id="task-id"
        type="text"
        placeholder="Add a new task"
        value={task}
        onChange={handleChange}
      />
      <Button onClick={clickHandler} text="add" />
      <Button onClick={deleteHandler} text="delete" />
    </div>
  );
};

export default Addtask;

// import { useState } from "react";
// import Button from "./To-do-Button";

// const Addtask = ({ task, setTask, allSet, all }) => {
//   const handleChange = (event) => {
//     setTask(event.target.value);
//     console.log(event.target.value);
//   };

//   const clickHandler = () => {
//     if (task.trim()) {
//       allSet((prev) => [...prev, { taskName: task, taskChecked: false, id: Date.now() }]);
//       setTask("");
//     }
//   };

//   const deleteHandler = () => {
//     allSet([]);
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         gap: 5,
//         justifyContent: "center",
//         width: "100%",
//         maxWidth: 345,
//         padding: "0 10px",
//       }}
//     >
//       <label style={{ display: "none" }} htmlFor="task-input">
//         Add a new task
//       </label>
//       <input
//         id="task-input"
//         style={{
//           height: 40,
//           border: "0.3px solid grey",
//           width: "100%",
//           maxWidth: 280,
//           borderRadius: "6px",
//           padding: "0 10px",
//           "::placeholder": { color: "#A0AEC0", fontStyle: "italic" },
//         }}
//         type="text"
//         placeholder="Add a new task"
//         value={task}
//         onChange={handleChange}
//         aria-label="Add a new task"
//       />
//       <Button
//         text="Add"
//         backgroundColor="#3C82F6"
//         color="white"
//         onClick={clickHandler}
//         ariaLabel="Add new task"
//       />
//       <Button
//         text="Delete"
//         backgroundColor="#EF4444"
//         color="white"
//         onClick={deleteHandler}
//         ariaLabel="Delete all tasks"
//       />
//     </div>
//   );
// };

// export default Addtask;
