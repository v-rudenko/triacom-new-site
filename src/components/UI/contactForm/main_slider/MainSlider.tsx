// import React from 'react'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";

import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

import girlBanner from "../banner/girl-banner-edited.jpg";

import classes from "./MainSlider.module.scss";

import SupportImage from "./images/support.jfif";

// type Props = {}

const MainSlider = () => {
  return (
    <Swiper
      pagination={true}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      // allowTouchMove={false}
      loop={true}
      slidesPerView={1}
      className={classes.main_slider}
      autoplay={{
        delay: 4000,
        disableOnInteraction: true,
      }}
    >
      <SwiperSlide>
        {" "}
        <div className={classes.banner_div}>
          <div className={classes.relative_div}>
            <div className={classes.banner_desc_div}>
              <h4>Інтернет та телефонія для вашого бізнесу</h4>
              <div className={classes.banner_list_div}>
                <ul>
                  <li>
                    <p>Висока якість</p>
                  </li>
                  <li>
                    <p>Демократичні ціни</p>
                  </li>
                  <li>
                    <p>Цілодобова технічна підтримка</p>
                  </li>
                </ul>
              </div>
            </div>
            <img src={girlBanner} alt="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide><img src={SupportImage} alt="" /></SwiperSlide>
      {/* <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide> */}
    </Swiper>
  );
};

export default MainSlider;
