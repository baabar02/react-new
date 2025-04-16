import Addtask from "@/components/Addtask";
import Filtertask from "@/components/Filtertask";
import Cleartask from "@/components/Cleartask";
import Alerttask from "@/components/Alerttask";
import Labeltask from "@/components/Labeltask";
import Button from "@/components/To-do-Button";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "auto",
          width: "377px",
          borderRadius: "6px",
          boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
        }}
      >
        <h1 style={{ fontSize: 28 }}>To-Do List</h1>
        <Addtask />
        <Button text={"Add"} />
        <Filtertask />
        <Labeltask />
        <Cleartask />
        <Alerttask />
      </div>
    </div>
  );
};

export default Home;

//   <div
//   style={{
//     ...,
//     transition: "background-color 0.2s",
//     ":hover": { backgroundColor: "#EDF2F7" },
//   }}
// ></div>
