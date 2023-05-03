import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/scss";
// import "swiper/css/navigation";

import classes from "./Slider.module.scss";
import { Autoplay, Pagination, Navigation } from "swiper";

import BoryspilLogo from "./icons/Boryspil_logo.svg";
// import ZhulianyLogo from "./icons/Zhuliany_Logo.gif";
import ZhulianyLogo from "./icons/Zhuliany_Logo.jpg";
import DreamLogo from "./icons/DreamLogo.png";

// type Props = {};

const Slider = () => {
  return (
    // <Swiper spaceBetween={50} slidesPerView={4} className={classes.slider} >
    <Swiper
      modules={[Autoplay]}
      loop={true}
      spaceBetween={50}
      slidesPerView={4}
      onSlideChange={() => console.log("slide changed")}
      autoplay={{
        delay: 2500,
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
        <img height={50} src={BoryspilLogo} />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}><img src={DreamLogo} height={100} alt="" /></SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img height={50} src={BoryspilLogo} />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img height={100} width={100} src={ZhulianyLogo} />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}>
        <img height={50} src={BoryspilLogo} />
      </SwiperSlide>
      <SwiperSlide className={classes.slide}><img src={DreamLogo} height={100} alt="" /></SwiperSlide>
      {/* <SwiperSlide className={classes.slide}>Лого 9</SwiperSlide> */}
    </Swiper>
  );
};

export default Slider;
