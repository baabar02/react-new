import Addtask from "@/components/todo/Addtask";
import Filtertask from "@/components/todo/Filtertask";
import Cleartask from "@/components/todo/Cleartask";
// import Alerttask from "@/components/todo/Alerttask";
import Labeltask from "@/components/todo/Labeltask";
import Button from "@/components/todo/To-do-Button";
import { useState } from "react";
import { uuid } from "react";

const Home = () => {
  const [task, setTask] = useState();
  const [all, allSet] = useState([]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          width: "377px",
          borderRadius: "6px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        {/* {JSON.stringify(all)} */}

        <h1 style={{ fontSize: 28 }}>To-Do List</h1>
        <Addtask
          task={task}
          setTask={setTask}
          allSet={allSet}
          all={all}
          handleChecked={handleChecked}
        />

        <div>
          {all.map((el, index) => {
            return (
              <Labeltask
                key={index}
                taskName={el.taskName}
                taskChecked={el.taskChecked}

                // onDelete={allSet(
                //   all.filter((task) =>
                //     el.taskChecked === false ? task.id : " "
                //   )
                // )}
              />
            );
          })}
        </div>

        {/* <Filtertask /> */}

        {/* <Cleartask /> */}
        {/* <Alerttask /> */}
      </div>
    </div>
  );
};

export default Home;

//   <div
//   style={{
//     ...,
//     transition: "background-color 0.2s",
//     ":hover": { backgroundColor: "#EDF2F7" },
//   }}
// ></div>

// const Home = () => {
//   const [task, setTask] = useState("");
//   const [all, setAll] = useState([]);

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         minHeight: "100vh",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "center",
//           alignItems: "center",
//           height: "auto",
//           width: "100%",
//           maxWidth: 377,
//           borderRadius: "6px",
//           boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
//           padding: 20,
//         }}
//       >
//
//         <div style={{ width: "100%", maxWidth: 345, marginTop: 20 }} role="list">
//           {all.length === 0 ? (
//             <p style={{ color: "grey", textAlign: "center" }}>No tasks yet. Add one above!</p>
//           ) : (
//             all.map((el) => (
//               <Labeltask
//                 key={el.id}
//                 taskName={el.taskName}
//                 taskChecked={el.taskChecked}
//
//
//               />
//             ))
//           )}
//         </div>
//         <Filtertask />
//         <Alerttask />
//       </div>
//     </div>
//   );
// };

// export default Home;
