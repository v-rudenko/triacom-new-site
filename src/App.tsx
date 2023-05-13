
import "./App.scss";
// import Navbar from "./components/UI/navigation/Navbar";

import { Routes, Route } from "react-router-dom";
import AboutCompany from "./components/pages/about_company/AboutCompany";
import Contacts from "./components/pages/contacts/Contacts";
import MainPage from "./components/pages/main_page/MainPage";
import Questions from "./components/pages/questions/Questions";
import Navbar from "./components/UI/navigation/Navbar";
import BackgroundImage from "./components/UI/background/BackgroundImage";

function App() {
  return (
    <>  
      <Navbar />
      <BackgroundImage />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/about-company" element={<AboutCompany />}></Route>
        <Route path="/questions" element={<Questions />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </>
  );
}

export default App;
