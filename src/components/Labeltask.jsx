import { Check, ClipboardCheck } from "lucide-react";

// const [changes, setChanges] = useState();
// const clickchange = (e) => {
//   setChanges(e.target.value);
//   console.log(e.target.value);
// };

const Labeltask = () => {
  return (
    <div
      style={{
        display: "flex",
        width: 345,
        height: 62,
        marginTop: 20,
        border: "0.3px solid grey",
        borderRadius: "6px",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#F9FAFB",
      }}
    >
      <label
        style={{
          height: "20px",
          width: "20px",
          marginLeft: "20px",
          border: "0.5px solid grey",
          borderRadius: "6px",
          display: "inline-block",
          backgroundColor: "#3C82F6",
          color: "white",
        }}
      >
        <Check />
      </label>
      <button
        style={{
          height: "30",
          width: "67",
          marginRight: "20px",
          border: "none",
          color: "red",
          backgroundColor: "transparent",
        }}
        // onChange={}
        // value={}
      >
        Delete
      </button>
    </div>
  );
};

export default Labeltask;
