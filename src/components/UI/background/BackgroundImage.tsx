import classes from "./BackgroundImage.module.scss";
import NetworkImage from "./Background_Network.avif"




const BackgroundImage = () => {
  return (
    <img className={classes.background} src={NetworkImage} alt="" />
  )
}

export default BackgroundImage