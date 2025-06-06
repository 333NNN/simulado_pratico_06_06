import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import BarraNav from "./components/BarraNav.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BarraNav />
    <App />
  </StrictMode>
);
