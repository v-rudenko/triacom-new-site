import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./components/admin/Admin.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="triacom-new-site/admin" element={<Admin />}></Route>
        <Route path="triacom-new-site/*" element={<App />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
