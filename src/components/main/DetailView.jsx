import { Routes, Route } from "react-router-dom";

import Home from "../sections/Home";
import Download from "../sections/Download";
import Technologies from "../sections/Technologies";

export default function DetailView() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/technologies" element={<Technologies />} />
      <Route path="/download" element={<Download />} />
    </Routes>
  );
}
