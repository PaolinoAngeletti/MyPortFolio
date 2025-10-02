import { useState } from "react";
import Sidebar from "./components/Sidebar";
import DetailView from "./components/DetailView";

function App() {
  const [selected, setSelected] = useState("Home");

  return (
    <div className="app-container">
      <Sidebar selected={selected} setSelected={setSelected} />
      <div className="detail">
        <DetailView section={selected} />
      </div>
    </div>
  );
}

export default App;