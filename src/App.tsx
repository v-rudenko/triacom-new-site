// import { useState } from 'react'
import "./App.scss";
import Navbar from "./components/UI/navigation/Navbar";

import { Routes, Route } from "react-router-dom";

import BackgroundImage from "./components/UI/background/BackgroundImage";

function App() {
  return (
    <>
      <Navbar />
      <BackgroundImage />
      <Routes>
      </Routes>
    </>
  );
}

export default App;
