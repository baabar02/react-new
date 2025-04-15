// import Photos from "@/components/photos";

import { previousDay } from "date-fns";
import { useState } from "react";

// const Pic = () => {
//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         backgroundColor: "grey",
//         gap: "16px",
//         padding: "16px",
//       }}
//     >
//       <Photos width="200px" height="100px " color="white" />
//     </div>
//   );
// };

// export default Pic;
// import Videos from "@/components/Youtube";

// const Page = () => {
//   return (
//     <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
//       <Videos youtubes={youtubes} />
//     </div>
//   );
// };
// youtubes.sort((a, b) => b.postedTime - a.postedTime);

// export default Page;
// const names = [ "bat", "dorj", "dulmaa", "saran"];
// const Home = () => {
// const count = 0;

// const plus = () => {
//   count = count + 1;
// };
// console.log(count);
// const minus = () => {
//   count = count - 1;
// };
// console.log(count);

// return (
// <div>
// <button onClick(plus)>+</button>
// </div>
// )

//   const [index, setCounts] = useState(0);

//   const increment = () => {
//     setCounts((previous) => (previous >= 4 ? 0 : previous + 1));
//   };

//   // const sub = () => {
//   //   if (index === 0) {
//   //     setCounts(names.length - 1);
//   //   } else {
//   //     setCounts((previous) => previous - 1);
//   //   }
//   // };
//   const decrement = () => {
//     setCounts((previous) => (previous <= 0 ? 3 : previous - 1));
//   };

//   return (
//     <div>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//       {names[index]}
//     </div>
//   );
// };

// export default Home;

// const people = [
//   { id: 1, name: "bat", age: "21", isMarried: true },
//   { id: 2, name: "bold", age: "15", isMarried: false },
//   { id: 3, name: "boloroo", age: "40", isMarried: true },
//   { id: 4, name: "usuhuu", age: "35", isMarried: false },
// ];

// const Page = () => {
//   return (
//     <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
//       <Videos youtubes={youtubes} />
//     </div>
//   );
// };

// export default Page;

import Counts from "@/components/Youtube";
const Home = () => {
  const [counts, setCounts] = useState(0);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Counts counts={counts} setCounts={setCounts} />
    </div>
  );
};

export default Home;
