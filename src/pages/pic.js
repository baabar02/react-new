// import Photos from "@/components/photos";

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

const youtubes = [
  {
    image:
      "https://i.ytimg.com/an_webp/IectiZVqDcA/mqdefault_6s.webp?du=3000&sqp=CKDp578G&rs=AOn4CLC-VOydM71ZzsjAzHhCxBzjZ5K_Iw",
    title: "Introduction to Pinecone",
    logo: "https://yt3.ggpht.com/ytc/AIdro_mBY_b6sYztE4DQ8CAiLNmv7JPv6QcoDx08tUvWpwVBATA=s88-c-k-c0x00ffffff-no-rj",
    desc: "Learn the basics of React in this beginner-friendly tutorial.",
    views: "10K views",
    postedTime: new Date("2025-03-21T12:42:00"),
  },
  {
    image:
      "https://i.ytimg.com/an_webp/P4DCgZI9DFI/mqdefault_6s.webp?du=3000&sqp=CMjn578G&rs=AOn4CLBytxA4-oxiZ4x995XQGngAKm950Q",
    title: "Video",
    logo: "https://yt3.ggpht.com/ytc/AIdro_mBY_b6sYztE4DQ8CAiLNmv7JPv6QcoDx08tUvWpwVBATA=s88-c-k-c0x00ffffff-no-rj",
    desc: "Deep dive into JavaScript techniques.",
    views: "1K views",
    postedTime: new Date("2025-01-01T23:59:00"),
  },
  {
    image:
      "https://i.ytimg.com/vi/dcKGN_lTdyM/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGCQgXihyMA8=&rs=AOn4CLBZA9G3VTpfh8QOBYOat0_nBQxFkw",
    title: "Inception soundtrack",
    logo: "https://yt3.ggpht.com/ytc/AIdro_mBY_b6sYztE4DQ8CAiLNmv7JPv6QcoDx08tUvWpwVBATA=s88-c-k-c0x00ffffff-no-rj",
    desc: "Inception soundtrack.",
    views: "1K views",
    postedTime: new Date("2025-02-01T23:59:00"),
  },
  {
    image:
      "https://i.ytimg.com/vi/E_ey8xCbUD8/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AH-CYAC0AWKAgwIABABGHIgSignMA8=&rs=AOn4CLD-Wxlj7OawjbiOs2SWvltFR75Fdg",
    title: "Last of the Mohicans",
    logo: "https://yt3.ggpht.com/ytc/AIdro_mBY_b6sYztE4DQ8CAiLNmv7JPv6QcoDx08tUvWpwVBATA=s88-c-k-c0x00ffffff-no-rj",
    desc: "Build a backend with Node.js.",
    views: "1K views",
    postedTime: new Date("2025-03-01T10:19:00"),
  },
  {
    image:
      "https://i.ytimg.com/vi/CjTrBPN3vwA/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLDu2314-0O9qZ5bu50LjrvD2ClGfA",
    title: "Gravity Soundtrack",
    logo: "https://yt3.ggpht.com/ytc/AIdro_mBY_b6sYztE4DQ8CAiLNmv7JPv6QcoDx08tUvWpwVBATA=s88-c-k-c0x00ffffff-no-rj",
    desc: "Composed by Steven Price",
    views: "100K views",
    postedTime: new Date("2025-04-11T10:00:00"),
  },
  {
    image:
      "https://i.ytimg.com/vi/yUi_S6YWjZw/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4EgALgA4oCDAgAEAEYVCBNKGUwDw==&rs=AOn4CLDPQRtmko1Zgn1g-B4IJrZIV0vzBQ",
    title: "Dirty Diana",
    logo: "https://yt3.ggpht.com/ytc/AIdro_mBY_b6sYztE4DQ8CAiLNmv7JPv6QcoDx08tUvWpwVBATA=s88-c-k-c0x00ffffff-no-rj",
    desc: "Michael Jackson's iconic hit.",
    views: "80M views",
    postedTime: new Date("2025-04-11T20:00:00"),
  },
  {
    image:
      "https://i.ytimg.com/vi/yUi_S6YWjZw/hqdefault.jpg?sqp=-oaymwExCOADEI4CSFryq4qpAyMIARUAAIhCGAHwAQH4Af4EgALgA4oCDAgAEAEYVCBNKGUwDw==&rs=AOn4CLDPQRtmko1Zgn1g-B4IJrZIV0vzBQ",
    title: "Dirty Diana",
    logo: "https://yt3.ggpht.com/ytc/AIdro_mBY_b6sYztE4DQ8CAiLNmv7JPv6QcoDx08tUvWpwVBATA=s88-c-k-c0x00ffffff-no-rj",
    desc: "Michael Jackson's iconic hit.",
    views: "80M views",
    postedTime: new Date("2025-04-11T20:00:00"),
  },
];

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

const people = [
  { id: 1, name: "bat", age: "21", isMarried: true },
  { id: 2, name: "bold", age: "15", isMarried: false },
  { id: 3, name: "boloroo", age: "40", isMarried: true },
  { id: 4, name: "usuhuu", age: "35", isMarried: false },
];

const Page = () => {
  return (
    <div style={{ backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <Videos youtubes={youtubes} />
    </div>
  );
};

export default Page;
