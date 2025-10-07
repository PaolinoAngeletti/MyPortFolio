import { HashRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../pages/Home";
import Download from "../pages/Download";
import Projects from "../pages/Projects";
import Companies from "../pages/Companies";
import Technologies from "../pages/Technologies";

export default function DetailView() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Companies />} />
        <Route path="/technologies" element={<Technologies />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/download" element={<Download />} />
      </Routes>
    </Router>
  );
}
