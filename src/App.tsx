// import { useState } from 'react'
import "./App.scss";
import ContactForm from "./components/UI/contactForm/ContactForm";
import Navbar from "./components/UI/navigation/Navbar";
import SolutionsList from "./components/UI/solutions/SolutionsList";

function App() {
  return (
    <>
      <Navbar />
      <ContactForm />
      <SolutionsList />
    </>
  );
}

export default App;
