import { Box, styled } from "@mui/material";
import colocationBanner from "./images/banner.avif";
import classes from "./Colocation.module.scss";

const CentringBox = styled(Box)({
  display: "flex",
  justifyContent: " space-around",
  margin: "70px 150px 70px",
});

const TextBox = styled(Box)({
  width: "560px",
  // height: "420.45px",
  // border: "1px solid red",
});

const ImageBox = styled(Box)({
  width: "600px",
  // borderRadius: "22px"
  // width: "558px",
  // height: "386px",
  // border: "1px solid red",
});

const Colocation = () => {
  return (
    <CentringBox>
      <TextBox></TextBox>
      
      <ImageBox>
        <img className={classes.banner} src={colocationBanner} height="500px" />
      </ImageBox>
    </CentringBox>
  );
};

export default Colocation;
