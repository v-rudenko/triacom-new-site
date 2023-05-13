import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

import AboutCompany from "./components/pages/about_company/AboutCompany";
import Contacts from "./components/pages/contacts/Contacts";
import MainPage from "./components/pages/main_page/MainPage";
import Questions from "./components/pages/questions/Questions";

import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Admin from "./components/admin/Admin.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        {/* <App /> */}
        <Route path="/triacom-new-site" element={<App />}>
          {" "}
          <Route path="/triacom-new-site/" element={<MainPage />}></Route>
          <Route path="/triacom-new-site/about-company" element={<AboutCompany />}></Route>
          <Route path="/triacom-new-site/questions" element={<Questions />}></Route>
          <Route path="/triacom-new-site/contacts" element={<Contacts />}></Route>
        </Route>
        <Route path="/triacom-new-site/admin" element={<Admin />}></Route>

        {/* <Route path="/triacom-new-site/about-company" element={<Admin />}></Route>
        <Route path="/triacom-new-site/contacts" element={<Admin />}></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
