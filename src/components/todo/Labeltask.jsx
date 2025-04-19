// import { Check, ClipboardCheck } from "lucide-react";
// import Button from "./To-do-Button";
// import Addtask from "./Addtask";

// const Labeltask = ({ handleChecked, taskName, id, setAll, handleDelete }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         width: 345,
//         height: 62,
//         marginTop: 20,
//         border: "0.3px solid grey",
//         borderRadius: "6px",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "#F9FAFB",
//       }}
//     >
//       <input
//         style={{
//           height: "20px",
//           width: "20px",
//           marginLeft: "20px",
//           border: "0.5px solid grey",
//           borderRadius: "6px",
//           display: "inline-block",
//           backgroundColor: "#3C82F6",
//           color: "white",
//           cursor: "pointer",
//           background: <Check />,
//         }}
//         type="checkbox"
//         onChange={() => handleChecked(id)}
//       ></input>
//       {taskName}
//       {handleDelete}
//       {handleChecked}
//       <Button
//         onClick={() => handleDelete(id)}
//         backgroundColor="#3C82F6"
//         text="delete"
//       />
//     </div>
//   );
// };

// export default Labeltask;
import { Check } from "lucide-react";
import Button from "./To-do-Button";

const Labeltask = ({ handleChecked, taskName, id, taskChecked, handleDelete }) => {
  return (
    <div
      style={{
        display: "flex",
        width: 345,
        height: 62,
        marginTop: 20,
        border: "0.3px solid grey",
        borderRadius: "6px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
      }}
    >
      <input
        style={{
          height: "20px",
          width: "20px",
          marginLeft: "20px",
          border: "0.5px solid grey",
          borderRadius: "6px",
          cursor: "pointer",
        }}
        type="checkbox"
        checked={taskChecked}
        onChange={() => handleChecked(id)}
        aria-label={`Mark ${taskName} as completed`}
      />
      <span style={{ textDecoration: taskChecked ? "line-through" : "none" }}>
        {taskName}
      </span>
      <Button
        onClick={() => handleDelete(id)}
        backgroundColor="#3C82F6"
        text="delete"
      />
    </div>
  );
};

export default Labeltask;