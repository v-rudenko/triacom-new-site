// import { useState } from 'react'
import "./App.scss";
import ContactForm from "./components/UI/contactForm/ContactForm";
import Navbar from "./components/UI/navigation/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <ContactForm></ContactForm>
    </>
  );
}

export default App;
