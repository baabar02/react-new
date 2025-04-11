// const Photos = ({ width, color, height }) => {
//   const files = [
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4ZS7DCmdbSRVP-c6TQnyhNQTitNI8RaDXIA&s",
//       title: "baabar",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTtf_eULIJm_KkFFexJwOUUX7lp9c6_YXeeQ&s",
//       title: "baabar",
//     },
//     {
//       image:
//         "data:image/jpeg;base64,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",
//       title: "planets",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuBO5mJ3KSC-rlu66dSCrQfrq12WFO8zfv2w&s",
//       title: "planet",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbpCxjs6QLl9mynrgyuWt3nCfoSwtBlklWQ&s",
//       title: "mustang",
//     },
//     {
//       image:
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbpCxjs6QLl9mynrgyuWt3nCfoSwtBlklWQ&s",
//       title: "mustang",
//     },
//   ];

//   return (
//     <div
//       style={{
//         display: "flex",
//         flexWrap: "wrap",
//         gap: "12px",
//         padding: "12px",
//         "&:hover": {
//           border: "1px solid red",
//         },
//       }}
//     >
//       {files.map((file, index) => (
//         <div key={index}>
//           <img
//             src={file.image}
//             title={file.title}
//             style={{
//               width: width,
//               height: height,
//               border: "1px, solid white",
//               borderRadius: "8px",
//               objectFit: "cover",
//             }}
//           />
//           {
//             <p style={{ color: color, textAlign: "center", margin: "8px" }}>
//               {file.title}
//             </p>
//           }
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Photos;
