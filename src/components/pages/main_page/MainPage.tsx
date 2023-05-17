// type Props = {}

import ContactForm from "../../UI/contactForm/ContactForm";
import BackgroundImage from "../../UI/background/BackgroundImage";
import Slider from "../../UI/contactForm/slider/Slider";
import SolutionsList from "../../UI/solutions/SolutionsList";
import Navbar from "../../UI/navigation/Navbar";

const MainPage = () => {
  return (
    <>
      <BackgroundImage />
      <ContactForm />
      <Slider />
      <SolutionsList />
    </>
  );
};

export default MainPage;
