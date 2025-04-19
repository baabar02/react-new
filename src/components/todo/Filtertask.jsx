// import { Bluetooth } from "lucide-react";
// import Button from "../todo/To-do-Button";
// import { useState } from "react";


// const Filtertask = ({setWhichButtonClicked}) => {
 


// // [
// //   {text:"All", isClicked: true},
// //   {text:"Active", isClicked: false},
// //   {text:"Completed", isClicked: false}]


//  // setButtonColor(prev=> {
//   //   return prev.map((el)=> {
//   //     if(el.text === param) {
//   //       return {...el, isClicked:true}
//   //     } else{ 
//   //       return {...el, isClicked:false}
//   //     }
//   //   })}
//   // )
// const [aliButtonDaragdsanbe,setAliButtonDaragdsanbe]=useState("All");
//   const buttons=["All", "Active", "Completed"]


//   return (
//     <div
//       style={{
//         display: "flex",
//         flexDirection: "row",
//         width: 345,
//         gap: 6,
//         marginTop:20
//       }}
//     >
// {buttons.map((text, index)=>{
//    const ugAvdagfunct = () => {
//     setAliButtonDaragdsanbe(text)
//     setWhichButtonClicked(text);
//   };
//  return (
//   <Button 
//   key={index}
//   text={text} 
//   // isClicked={isClicked} 
//   onClick={ugAvdagfunct}
//   aliButtonDaragdsanbe={aliButtonDaragdsanbe}
//   />

//  )
// })}
 
//     </div>
//   );
// };

// export default Filtertask;

import Button from "../todo/To-do-Button";
import { useState } from "react";

const Filtertask = ({ setWhichButtonClicked }) => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const buttons = ["All", "Active", "Completed"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        width: 345,
        gap: 6,
        marginTop: 20,
      }}
    >
      {buttons.map((text, index) => {
        const handleClick = () => {
          setSelectedFilter(text);
          setWhichButtonClicked(text);
        };
        return (
          <Button
            key={index}
            text={text}
            onClick={handleClick}
            aliButtonDaragdsanbe={selectedFilter} // Kept prop name for Button compatibility
          />
        );
      })}
    </div>
  );
};

export default Filtertask;