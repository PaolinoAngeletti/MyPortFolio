import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DetailView from "./components/DetailView";

function App() {
  const [selected, setSelected] = useState("Esperienza");

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Sidebar selected={selected} setSelected={setSelected} />
      <div style={{ flex: 1, paddingLeft: "20px" }}>
        <DetailView section={selected} />
      </div>
    </div>
  );
}

export default App;