import girlBanner from "./girl-banner-edited.jpg";

import classes from "./Banner.module.scss";
import MainSlider from "../main_slider/MainSlider";


const GirlBanner = () => {
  return (
    <>

      <div className={classes.banner_div}>
        {/* <div className={classes.relative_div}>
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
        </div> */}
        <MainSlider></MainSlider>
      </div>
    </>
  );
};

export default GirlBanner;
