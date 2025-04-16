import Addtask from "@/components/Addtask";
import Filtertask from "@/components/Filtertask";
import Cleartask from "@/components/Cleartask";
import Alerttask from "@/components/Alerttask";
import Labeltask from "@/components/Labeltask";
import Button from "@/components/To-do-Button";
import { useState } from "react";

const Home = () => {

  const [task, setTask] = useState();
  const [all, allSet] = useState([]);
  console.log(task,"sads");
  
 

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
        <h1 style={{ fontSize: 28 }}>To-Do List</h1>
        <Addtask  task={task} setTask={setTask} allSet={allSet} all={all}/>

     
        <div>
          
        {all.map((el,index) => {

          return (
           
            <Labeltask key={index} taskName={el.taskName} />
                )
              
            }
          
            
            
         )}
        </div> 
  
        <Filtertask />
       
        {/* <Cleartask /> */}
        <Alerttask />
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
//         <h1 style={{ fontSize: 28 }}>To-Do List</h1>
//         <Addtask task={task} setTask={setTask} allSet={setAll} all={all} />
//         <div style={{ width: "100%", maxWidth: 345, marginTop: 20 }} role="list">
//           {all.length === 0 ? (
//             <p style={{ color: "grey", textAlign: "center" }}>No tasks yet. Add one above!</p>
//           ) : (
//             all.map((el) => (
//               <Labeltask
//                 key={el.id}
//                 taskName={el.taskName}
//                 taskChecked={el.taskChecked}
//                 onDelete={() => setAll(all.filter((task) => task.id !== el.id))}
//                 onToggle={() => setAll(all.map((task) => task.id === el.id ? { ...task, taskChecked: !task.taskChecked } : task))}
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