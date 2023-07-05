// type Props = {}

import MainSliderSection from "../../UI/contactForm/MainSliderSection";
import BackgroundImage from "../../UI/background/BackgroundImage";
import Slider from "../../UI/contactForm/slider/Slider";
import SolutionsList from "../../UI/solutions/SolutionsList";

// import TopBanner from "./TopBanner";

const MainPage = () => {
  return (
    <>
      <BackgroundImage variant="blue" inverted={true} />
      {/* <TopBanner /> */}
      <MainSliderSection />
      <Slider />
      <SolutionsList />
    </>
  );
};

export default MainPage;
