import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/index.css";
import Home from "@/pages/Home";
import Error from "@/pages/Error";
import Submission from "@/pages/Submission";
import NotFound from "@/pages/NotFound";

const appEl = document.querySelector("#app");
const root = createRoot(appEl);

root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/error" element={<Error />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
