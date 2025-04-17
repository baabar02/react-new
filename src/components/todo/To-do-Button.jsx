const Button = ({
  text,
  onClick,
  backgroundColor = "#3C82F6",
  color = "white",
}) => {
  return (
    <button
      style={{
        height: 40,
        width: "59px",
        borderRadius: "6px",
        border: "none",
        backgroundColor,
        color,
        cursor: "pointer",
        transition: "background-color 0.2s, color 0.2s",
        ":hover": {
          backgroundColor:
            backgroundColor === "#3C82F6" ? "#2563EB" : backgroundColor,
          color: color === "red" ? "#B91C1C" : color,
        },
      }}
      onClick={onClick}
      type="button"
    >
      {text}
    </button>
  );
};

export default Button;

// const Button = ({ text, onClick, backgroundColor = "#3C82F6", color = "white", ariaLabel }) => {
//   return (
//     <button
//       style={{
//         height: 40,
//         width: "59px",
//         borderRadius: "6px",
//         border: "none",
//         backgroundColor,
//         color,
//         cursor: "pointer",
//         transition: "background-color 0.2s, color 0.2s",
//         ":hover": {
//           backgroundColor: backgroundColor === "#3C82F6" ? "#2563EB" : backgroundColor,
//           color: color === "red" ? "#B91C1C" : color,
//         },
//       }}
//       onClick={onClick}
//       type="button"
//       aria-label={ariaLabel || text}
//     >
//       {text}
//     </button>
//   );
// };

// export default Button;
