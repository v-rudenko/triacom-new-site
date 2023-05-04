// import girlBanner from "./girl-banner.jpg";

import classes from "./Banner.module.scss";

const GirlBanner = () => {
  return (
    <div className={classes.banner_div}>
      {/* <img src={girlBanner} height={"600px"} alt="" /> */}
      <h3>Тут буде рекламна картинка та текст</h3>
    </div>
  );
};

export default GirlBanner;
