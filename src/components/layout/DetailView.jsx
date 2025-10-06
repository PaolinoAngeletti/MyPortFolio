import { Routes, Route } from "react-router-dom";

import Home from "../../pages/Home";
import Download from "../../pages/Download";
import Technologies from "../../pages/Technologies";

export default function DetailView() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
}
