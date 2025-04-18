import Addtask from "@/components/todo/Addtask";
import Filtertask from "@/components/todo/Filtertask";
import Cleartask from "@/components/todo/Cleartask";
import Labeltask from "@/components/todo/Labeltask";
import Button from "@/components/todo/To-do-Button";
import { useState } from "react";
import Alerttask from "@/components/todo/Alerttask";
import { v4 as uuid } from "uuid";

const Home = () => {
  const [task, setTask] = useState("");
  const [all, setAll] = useState([]);

  const handleChecked = (id) => {
    setAll((prev) => {
      return prev.map((task) => {
        if (task.id === id) {
          return { ...task, taskChecked: !task.taskChecked };
        }
        return task;
      });
    });
  };

  const handleDelete = (id) => {
    setAll((prev) => prev.filter((task) => task.id !== id));
  };

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
        {JSON.stringify(all)}
        <h1 style={{ fontSize: 28 }}>To-Do List</h1>
        <Addtask
          task={task}
          setTask={setTask}
          setAll={setAll}
          all={all}
          handleChecked={handleChecked}
        />

        <div>
          {all.map((el) => {
            return (
              <Labeltask
                key={el.id}
                taskName={el.taskName}
                taskChecked={el.taskChecked}
                id={el.id}
                handleChecked={handleChecked}
                setAll={setAll}
                handleDelete={handleDelete}
              />
            );
          })}
        </div>

        <Filtertask />

        <Cleartask />
        {/* <Alerttask /> */}
      </div>
    </div>
  );
};

export default Home;
