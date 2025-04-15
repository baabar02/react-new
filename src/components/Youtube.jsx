// import tsagiinZoruu from "./Time";
// import { Dot, EllipsisVertical } from "lucide-react";

import { Rss } from "lucide-react";

// const Videos = ({ youtubes }) => {
// const dotClick = (title)=> {
//   alert(`${title}`)
// }

//   return (
//     <div
//       style={{
//         display: "grid",
//         gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
//         gap: "16px",
//         padding: "16px",
//       }}
//     >
//       {youtubes.map((youtube, index) => (
//         <div
//           key={`${youtube.title}-${index}`}
//           style={{ display: "flex", flexDirection: "column" }}
//         >
//           <img
//             src={youtube.image}
//             alt={`Thumbnail for ${youtube.title}`}
//             style={{
//               width: "100%",
//               aspectRatio: "16/9",
//               objectFit: "cover",
//               borderRadius: "8px",
//               border: "1px solid #e0e0e0",
//             }}
//           />
//           <div style={{ display: "flex", gap: "8px", marginTop: "8px" }}>
//             <div style={{ flex: "0 0 auto" }}>
//               {youtube.logo && (
//                 <img
//                   src={youtube.logo}
//                   alt={`${youtube.title}`}
//                   style={{
//                     width: "30px",
//                     height: "30px",
//                     borderRadius: "50%",
//                   }}
//                 />
//               )}
//             </div>
//             <div style={{ flex: "1 1 auto" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   justifyContent: "space-between",
//                   alignItems: "flex-start",
//                 }}
//               >
//                 <h3
//                   style={{
//                     color: "#333",
//                     fontSize: "16px",
//                     margin: "0",
//                     overflow: "hidden",
//                     textOverflow: "ellipsis",
//                     whiteSpace: "nowrap",
//                   }}
//                 >
//                   {youtube.title}
//                 </h3>
//                 <EllipsisVertical
//                   style={{ color: "#606060", cursor: "pointer" }}
//                   aria-label={`${youtube.title}`}
//                   onClick={()=> dotClick("bla",youtube.title)}
//                 />
//               </div>
//               {youtube.desc && (
//                 <p style={{ color: "#606060", maxHeight:"40px", fontSize: "14px", margin: "4px 0" }}>
//                   {youtube.desc}
//                 </p>
//               )}
//               <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
//                 {youtube.views && (
//                   <p style={{ color: "#606060", fontSize: "14px" }}>
//                     {youtube.views}
//                   </p>
//                 )}
//                 <Dot style={{ color: "#606060" }} />
//                 <p style={{ color: "#606060", fontSize: "14px" }}>
//                   {tsagiinZoruu(youtube.postedTime, { })}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Videos;

const Counts = ({ counts, setCounts }) => {
  const increment = () => {
    // count = count + 1;
    setCounts((prev) => prev + 1);
  };
  const decrement = () => {
    // count = count - 1;
    setCounts((prev) => prev - 1);
  };

  const reset = () => {
    setCounts(0);
  };
  return (
    <div>
      <div style={{ display: "flex", gap: "10" }}>
        {setCounts}
        {<button onClick={increment}>+</button>}

        <p>{counts}</p>

        <button onClick={decrement}>-</button>
        {reset}
        <button onClick={reset}>reset</button>
      </div>
    </div>
  );
};

export default Counts;
