import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
// import "swiper/css/navigation";

import classes from "./Slider.module.scss";
import { Autoplay } from "swiper";

import BoryspilLogo from "./icons/Boryspil_logo.svg";
import ZhulianyLogo from "./icons/Zhuliany_Logo.jpg";
import DreamLogo from "./icons/DreamLogo.png";
import VidiLogo from "./icons/vidi_logo.svg";
import HelenLogo from "./icons/Helen_Marlen_Logo.png";
import KonicaLogo from "./icons/Konica_Minolta_Logo.png";
import LuxopticaLogo from "./icons/Luxoptica_Logo.png";
import AvellumLogo from "./icons/Avellum_Logo.png";

// type Props = {};

const Slider = () => {
  return (
    // <Swiper spaceBetween={50} slidesPerView={4} className={classes.slider} >
    <>
      <h1 className={classes.heading_text}>Нам довіряють</h1>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        spaceBetween={200}
        slidesPerView={4}
        onSlideChange={() => console.log("slide changed")}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
        className={classes.slider}
      >
        <SwiperSlide className={classes.slide}>
          <img height={50} src={BoryspilLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img height={100} width={100} src={ZhulianyLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={DreamLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={AvellumLogo} height={190} width={200} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={HelenLogo} height={100} width={250} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={KonicaLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={LuxopticaLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img src={VidiLogo} height={100} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Slider;
