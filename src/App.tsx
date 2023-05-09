// import { useState } from 'react'
import "./App.scss";
import ContactForm from "./components/UI/contactForm/ContactForm";
import Navbar from "./components/UI/navigation/Navbar";
import SolutionsList from "./components/UI/solutions/SolutionsList";

import { Routes, Route } from "react-router-dom";
import AboutCompany from "./components/pages/about_company/AboutCompany";
import Contacts from "./components/pages/contacts/Contacts";
import MainPage from "./components/pages/main_page/MainPage";

function App() {
  return (
    <>
      <Navbar />
      
      <Routes>
        <Route
          path="/"
          element={<MainPage />}
        ></Route>
        <Route
          path="/about-company"
          element={<AboutCompany />}
        ></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
