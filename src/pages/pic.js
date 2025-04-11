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
import Videos from "@/components/Youtube";

const youtubes = [
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepnhsVT_l0wyOaLVsfcviEoBQ5XRLl3SYqg&s",
    title: "bbbb",
    logo: "",
    desc: "",
    views: "",
    postedTime: new Date("2025/03/21/ :12:42"),
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepnhsVT_l0wyOaLVsfcviEoBQ5XRLl3SYqg&s",
    title: "bbbb",
    logo: "",
    desc: "",
    views: "",
    postedTime: new Date("2025/01/01/ : 23: 59"),
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepnhsVT_l0wyOaLVsfcviEoBQ5XRLl3SYqg&s",
    title: "",
    logo: "",
    desc: "",
    views: "",
    postedTime: new Date("2025/02/01/ : 23: 59"),
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepnhsVT_l0wyOaLVsfcviEoBQ5XRLl3SYqg&s",
    title: "",
    logo: "",
    desc: "",
    views: "",
    postedTime: new Date("2025/03/01/ : 10: 19"),
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTepnhsVT_l0wyOaLVsfcviEoBQ5XRLl3SYqg&s",
    title: "",
    logo: "",
    desc: "",
    views: "",
    postedTime: new Date("2025/04/10/ : 00: 00"),
  },
];

const Page = () => {
  return (
    <div
      style={{
        display: "grid",
        // gridTemplateRows: "100px 100px 100px",
        // gridTemplateColumns: "200px 200px 200px ",
        gap: "12px",
      }}
    >
      {youtubes.map((youtube, index) => (
        <div key={index}>
          <img
            src={youtube.image}
            title={youtube.title}
            logo={youtube.logo}
            views={youtube.views}
            postedTime={youtube.postedTime}
            style={{
              border: "1px solid green",
              borderRadius: "8px",
              objectFit: "cover",
            }}
          />
          <Videos />
        </div>
      ))}
    </div>
  );
};
export default Page;
