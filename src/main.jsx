import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Home from "./pages/Home";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);

root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);
