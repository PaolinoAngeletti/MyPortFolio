import { useState, useEffect } from "react";
import Sidebar from "./components/Sidebar";
import DetailView from "./components/DetailView";

function App() {
  
  const [selected, setSelected] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768);

  return (
    <div className="app-container">

      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <Sidebar selected={selected} setSelected={setSelected} open={sidebarOpen} />
      
      <div className="detail">
        <DetailView section={selected} />
      </div>

    </div>
  );
}

export default App;