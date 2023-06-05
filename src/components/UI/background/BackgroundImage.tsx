import classes from "./BackgroundImage.module.scss";
import BlueBackground from "./Background_Network.avif";
import GreenBackground from "./Bg_Green.jpg";

type Props = {
  variant: string;
  inverted?: boolean;
};

const BackgroundImage = (props: Props) => {
  if (props.variant === "blue") {
    if (props.inverted === true) {
      return (
        <img className={classes.bg_blue_inverted} src={BlueBackground} alt="" />
      );
    } else {
      return <img className={classes.bg_blue} src={BlueBackground} alt="" />;
    }
  } else {
    if (props.inverted === true) {
      return (
        <div className={classes.bg_green_div}>
          <img
            className={classes.bg_green_inverted}
            src={GreenBackground}
            alt=""
          />
        </div>
      );
    } else {
      return (
        <div className={classes.bg_green_div}>
          <img className={classes.bg_green} src={GreenBackground} alt="" />
        </div>
      );
    }
  }
};

export default BackgroundImage;
