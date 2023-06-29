import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
import "swiper/scss/navigation";
// import "swiper/css/navigation";

import classes from "./Slider.module.scss";
import { Autoplay, Navigation } from "swiper";

import BoryspilLogo from "./icons/Boryspil_logo.svg";
import ZhulianyLogo from "./icons/Zhuliany_Logo.jpg";
import DreamLogo from "./icons/DreamLogo.png";
import VidiLogo from "./icons/vidi_logo.svg";
import HelenLogo from "./icons/Helen_Marlen_Logo.png";
import KonicaLogo from "./icons/Konica_Minolta_Logo.png";
import LuxopticaLogo from "./icons/Luxoptica_Logo.png";
import AvellumLogo from "./icons/Avellum_Logo.png";
import HrinchenkaLogo from "./icons/Hrinchenka_Logo.png";
import KovalskaLogo from "./icons/Kovalska_logo_black.png";
import PodatkovaLogo from "./icons/Podatkova_Logo.png";
import OceanLogo from "./icons/Ocean_Logo.png";
import NMULogo from "./icons/NMU_Logo.svg";
import NAULogo from "./icons/NAU_Logo.png";

// type Props = {};

const Slider = () => {
  return (
    // <Swiper spaceBetween={50} slidesPerView={4} className={classes.slider} >
    <div className={classes.carusel_div}>
      <h1 className={classes.heading_text}>Нам довіряють</h1>
      <Swiper
        id="our-clients-slider"
        draggable={false}
        navigation={true}
        modules={[Autoplay, Navigation]}
        allowTouchMove={false}
        loop={true}
        spaceBetween={200}
        slidesPerView={4}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        className={classes.slider}
      >
        <SwiperSlide className={classes.slide}>
          <img draggable={false} height={60} src={BoryspilLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} height={140} src={HrinchenkaLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} width={250} src={PodatkovaLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} height={80} src={OceanLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} width={250} src={NMULogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} height={80} src={ZhulianyLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={DreamLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={AvellumLogo} width={200} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={NAULogo} height={130} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={HelenLogo} height={70} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={KonicaLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={LuxopticaLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={KovalskaLogo} width={250} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={VidiLogo} height={100} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
