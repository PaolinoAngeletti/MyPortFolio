import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/main/Sidebar";
import DetailView from "./components/main/DetailView";

import Home from "./components/sections/Home";
import Technologies from "./components/sections/Technologies";


function App() {
  
  const [selected, setSelected] = useState("Home");
  const [sidebarOpen, setSidebarOpen] = useState(() => window.innerWidth >= 768);

  const [targetParagraph, setTargetParagraph] = useState(null);

  const handleCardClick = (section, paragraphId) => {
  setSelected(section);        // esempio: "Technologies"
  setTargetParagraph(paragraphId); // esempio: "Paragrafo1"
};

  console.log("Sono in APP con section " + selected + "--" + setSelected);

  // return (
  //   <Router>
  //     <div className="app-container">
  //       <button
  //         className="hamburger"
  //         onClick={() => setSidebarOpen(!sidebarOpen)}
  //       >
  //         ☰
  //       </button>

  //       <Sidebar selected={selected} setSelected={setSelected} open={sidebarOpen} />

  //       <div className="detail">
  //         {/* Qui usiamo Routes solo per la parte “detail view” */}
  //         <Routes>
  //           <Route path="/" element={<Home />} />
  //           <Route path="/technologies" element={<Technologies />} />
  //           {/* altre pagine qui */}
  //         </Routes>
  //       </div>
  //     </div>
  //   </Router>
  // );

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
        <DetailView section={selected} handleCardClick={handleCardClick} />
      </div>

    </div>
  );
}

export default App;