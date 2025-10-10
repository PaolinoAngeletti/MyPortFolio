import { useState } from "react";

import Sidebar from "./components/Sidebar";
import DetailView from "./components/DetailView";

function App() {

  const isMobile = () => {
    return window.innerWidth <= 768;
  }

  const [sidebarOpen, setSidebarOpen] = useState(() => !isMobile());

  const sidebarClickCallback = () => {
    if (isMobile()) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="app-container">

      <button
        className="hamburger"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        ☰
      </button>

      <div className={`sidebar ${sidebarOpen ? "open" : "closed"}`}>
        <Sidebar callback={sidebarClickCallback} />
      </div>

      <div className="detail">
        <DetailView />
      </div>

    </div>
  );
}

export default App;