import { useState } from "react";
import Counts from "@/components/Youtube";
import Onclick from "@/components/Onclick";
const Home = () => {
  const [changes, setChanges] = useState(0);

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      <Onclick changes={changes} setChanges={setChanges} />
    </div>
  );
};

export default Home;
