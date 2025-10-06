import { useState } from "react";

import Sidebar from "./components/layout/Sidebar";
import DetailView from "./components/layout/DetailView";

function App() {
  
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768);

  return (
    <div className="app-container">

      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <Sidebar />
      </div>
      
      <div className="detail">
        <DetailView />
      </div>

    </div>
  );
}

export default App;