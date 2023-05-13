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
import HrinchenkaLogo from "./icons/Hrinchenka_Logo.png"

// type Props = {};

const Slider = () => {
  return (
    // <Swiper spaceBetween={50} slidesPerView={4} className={classes.slider} >
    <div className={classes.carusel_div}>
      <h1 className={classes.heading_text}>Нам довіряють</h1>
      <Swiper
        draggable={false}
        navigation={true}
        modules={[Autoplay, Navigation]}
        allowTouchMove={false}
        loop={true}
        spaceBetween={200}
        slidesPerView={4}
        onSlideChange={() => console.log("slide changed")}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        onSwiper={(swiper) => {
          console.log(swiper);
        }}
        className={classes.slider}
      >
        <SwiperSlide className={classes.slide}>
          <img draggable={false} height={50} src={BoryspilLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} height={150} src={HrinchenkaLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} height={100} width={100} src={ZhulianyLogo} />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={DreamLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={AvellumLogo} height={190} width={200} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={HelenLogo} height={100} width={250} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={KonicaLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={LuxopticaLogo} height={100} alt="" />
        </SwiperSlide>
        <SwiperSlide className={classes.slide}>
          <img draggable={false} src={VidiLogo} height={100} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
