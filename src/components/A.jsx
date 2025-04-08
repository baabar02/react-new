// import { B } from "../components/B";
// export const A = (props) => {
//   return (
//     <div>
//       <B gene={props.gene} color={props.color} font={props.font} />
//     </div>
//   );
// };


export const A = (props) => {
  return (
    <div style={{height:props.height, display:"flex", justifyContent:"center", width:"348px"}}
     >
    <input style={{ 
      width:"260px", 
      border:"0.5px solid grey",
      height:"30px",
      backgroundColor: "#FAFAFA",
      borderRadius:"4px", 
    }}
    placeholder={props.placeholder}


    />
  </div>
  )
} 


