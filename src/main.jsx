import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

// Global settings
document.title = "Paolino Angeletti - Portfolio";
const favicon = document.querySelector("link[rel='icon']");
if (favicon) {
  favicon.href = "react_js.svg";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <HashRouter>
    <App />
  </HashRouter>
);