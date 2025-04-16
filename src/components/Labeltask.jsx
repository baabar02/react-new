import { Check, ClipboardCheck } from "lucide-react";
import Button from "./Button";

// const [changes, setChanges] = useState();
// const clickchange = (e) => {
//   setChanges(e.target.value);
//   console.log(e.target.value);
// };

const Labeltask = (props) => {
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
      
      <label
        style={{
          height: "20px",
          width: "20px",
          marginLeft: "20px",
          border: "0.5px solid grey",
          borderRadius: "6px",
          display: "inline-block",
          backgroundColor: "#3C82F6",
          color: "white",
        }}
      >
        <Check />
      </label>
      {props.taskName}
      <Button text="delete"/>
      {/* <button
        style={{
          height: "30",
          width: "67",
          marginRight: "20px",
          border: "none",
          color: "red",
          backgroundColor: "transparent",
        }}
        // onChange={}
        // value={}
      >
        Delete
      </button> */}
    </div>
  );
};

export default Labeltask;

// import { Check } from "lucide-react";
// import Button from "./To-do-Button";

// const Labeltask = ({ taskName, taskChecked, onDelete, onToggle }) => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         width: "100%",
//         maxWidth: 345,
//         height: 62,
//         marginTop: 20,
//         border: "0.3px solid grey",
//         borderRadius: "6px",
//         justifyContent: "space-between",
//         alignItems: "center",
//         backgroundColor: "#F9FAFB",
//         padding: "0 20px",
//       }}
//       role="listitem"
//     >
//       <label style={{ display: "flex", alignItems: "center", gap: 10 }}>
//         <input
//           type="checkbox"
//           checked={taskChecked}
//           onChange={onToggle}
//           style={{
//             height: 20,
//             width: 20,
//             border: "0.5px solid grey",
//             borderRadius: "6px",
//             cursor: "pointer",
//           }}
//           aria-label={`Mark ${taskName} as ${taskChecked ? "incomplete" : "complete"}`}
//         />
//         {taskChecked && <Check size={16} color="#3C82F6" />}
//         <span style={{ textDecoration: taskChecked ? "line-through" : "none" }}>
//           {taskName || "Untitled Task"}
//         </span>
//       </label>
//       <Button
//         text="Delete"
//         backgroundColor="transparent"
//         color="red"
//         onClick={onDelete}
//         ariaLabel={`Delete task: ${taskName}`}
//       />
//     </div>
//   );
// };

// export default Labeltask;