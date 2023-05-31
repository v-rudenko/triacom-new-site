import classes from "./BackgroundImage.module.scss";
import BlueBackground from "./Background_Network.avif";
import GreenBackground from "./Bg_Green.jpg";

type Props = {
  variant: string;
};

const BackgroundImage = (props: Props) => {
  if (props.variant === "blue") {
    return <img className={classes.bg_blue} src={BlueBackground} alt="" />;
  } else {
    return (
      <div className={classes.bg_green_div}>
        <img className={classes.bg_green} src={GreenBackground} alt="" />
      </div>
    );
  }
};

export default BackgroundImage;
