
import"../styles/Home.module.css"


export const Sidebaritem = ({haha, item, text}) => {
  const alerter = () => {
    alert(text)
}
  return (
    <div onClick={alerter} className="sidebar-item"
      style={{
        display: "flex",
        gap: "24px",
        "&:hover": { backgroundColor: "green" },
        padding: "12px",
        alignItems:"center",
        width: "100%",
        cursor:"pointer"
      }}
     
    >
      <div>
        {typeof haha === "string" ? 
        <img style={{borderRadius: '50%', height: "24px", width:"24px"}} src={haha}/>: <div>{haha}</div>}
        </div>
      <p>{item}</p>
      <p></p>
    </div>
  );
};




// export const Mainprofile = (props) => {
//   const calendar = new Date();
//   const hours = calendar.getHours();
//   const minutes = calendar.getMinutes();

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         // width: 300,
//         // height: 50,
//         border: "1px solid green",
//         backgroundColor: "",
//         alignItems: "center",
//         justifyContent: "space-between",
//         padding: "20px",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "row",
//           justifyContent: "center",
//           //   alignItems: "center",
//           gap: "20px",
//           padding: "20px",
//         }}
//       >
//         <div>{props.photo}</div>
//         <div>{props.identify}</div>
//         <div>
//           {hours} {minutes}
//         </div>
//       </div>
//       <button style={{ backgroundColor: "blue", height: "20px" }}>new</button>
//     </div>
//   );
// };
