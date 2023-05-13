
import "./App.scss";
// import Navbar from "./components/UI/navigation/Navbar";

import { Routes, Route } from "react-router-dom";
import AboutCompany from "./components/pages/about_company/AboutCompany";
import Contacts from "./components/pages/contacts/Contacts";
import MainPage from "./components/pages/main_page/MainPage";
import Questions from "./components/pages/questions/Questions";
import Admin from "./components/admin/Admin";
import Navbar from "./components/UI/navigation/Navbar";

function App() {
  return (
    <>  
      <Navbar />
      <Routes>
        <Route path="triacom-new-site" element={<MainPage />}></Route>
        <Route path="triacom-new-site/about-company" element={<AboutCompany />}></Route>
        <Route path="triacom-new-site/questions" element={<Questions />}></Route>
        <Route path="triacom-new-site/contacts" element={<Contacts />}></Route>
        <Route path="triacom-new-site/admin" element={<Admin />} ></Route>
      </Routes>
    </>
  );
}

export default App;
