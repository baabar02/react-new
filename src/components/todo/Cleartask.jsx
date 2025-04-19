// import Button from "../todo/To-do-Button";

// const Cleartask = ({all, taskChecked, clearCompletedHandler, setAll}) => {



//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "space-between",
//         marginTop: "20px",
//         borderTop: "0.3px solid grey",
//         width: "345px",
//         padding: "10px 0",
//         alignItems: "center",
//         backgroundColor: "#F9FAFB",
//       }}
//     >
//       <p>x
// {all.filter((el)=> el.taskChecked).lenght} of {all.lenght} tasks completed
// </p>
//    <Button text="Clear completed" onClick={clearCompletedHandler} />
      
//     </div>
//   );
// };

// export default Cleartask;

import Button from "../todo/To-do-Button";

const Cleartask = ({ all, clearCompletedHandler }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
        borderTop: "0.3px solid grey",
        width: "345px",
        padding: "10px 0",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
      }}
    >
      <p>
        {all.filter((el) => el.taskChecked).length} of {all.length} tasks
        completed
      </p>
      <Button text="Clear completed" onClick={clearCompletedHandler} />
    </div>
  );
};

export default Cleartask;
