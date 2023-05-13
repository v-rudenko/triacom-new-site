// type Props = {}

import ContactForm from "../../UI/contactForm/ContactForm";
import BackgroundImage from "../../UI/background/BackgroundImage";
import Slider from "../../UI/contactForm/slider/Slider";
import SolutionsList from "../../UI/solutions/SolutionsList";

const MainPage = () => {
  return (
    <>
      {/* <BackgroundImage /> */}
      <ContactForm />
      <Slider />
      <SolutionsList />
    </>
  );
};

export default MainPage;
