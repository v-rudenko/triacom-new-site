// import { useState } from 'react'
import "./App.scss";
// import Navbar from "./components/UI/navigation/Navbar";

import { Routes, Route } from "react-router-dom";
import AboutCompany from "./components/pages/about_company/AboutCompany";
import Contacts from "./components/pages/contacts/Contacts";
import MainPage from "./components/pages/main_page/MainPage";
import Questions from "./components/pages/questions/Questions";
import Admin from "./components/admin/Admin";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about-company" element={<AboutCompany />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
      </Routes>
    </>
  );
}

export default App;
