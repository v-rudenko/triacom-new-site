import { Box, Typography, styled } from "@mui/material";
import colocationBanner from "./images/servers.png";
import classes from "./Colocation.module.scss";
import BackgroundImage from "../../../UI/background/BackgroundImage";
import bg from "./images/bg.jpg";

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ColocationTable from "./ColocationTable";

const CentringBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: " space-around",
  margin: "30px 150px 100px",
  gap: 25,
  // paddingBottom: "50px",
  // background: "#D6E6F2"
});

const BenefitsBox = styled(Box)({
  display: "inline-flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  // width: "100%",
  marginLeft: "100px"
});

const CheckboxTextBox = styled(Box)({
  display: "flex",
  marginTop: "20px",
  alignItems: "flex-start",
  gap: 8
});

const ImageBox = styled(Box)({
  // width: "600px",
  // borderRadius: "22px"
  // width: "558px",
  // height: "386px",
  // border: "1px solid red",
});

const Colocation = () => {
  return (
    <>
      {/* <BackgroundImage /> */}
      <Box className={classes.bg_div}>
        <img className={classes.bg} src={bg} alt="" />
      </Box>
      <CentringBox>
        <Box>
          <Typography sx={{ fontWeight: 700 }} variant="h3" component={"h1"}>
            Послуга колокейшн - розміщення серверів
          </Typography>
        </Box>

        <ImageBox>
          <img
            className={classes.banner}
            src={colocationBanner}
            width={"1200px"}
            height={"400px"}
          />
        </ImageBox>
        <Box>
          <Typography sx={{ fontSize: 18 }}>
            Triangulum має власний дата-центр, для розміщення серверного та
            телекомунікаційного обладнання наших клієнтів
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 10}}>
          <BenefitsBox>
            <Typography variant="h5">Переваги нашого сервісу</Typography>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox}/>
              <Typography>Безперебійне електропостачання</Typography>
            </CheckboxTextBox>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox}/>
              <Typography>Можливість доступу до обладнання 24/7</Typography>
            </CheckboxTextBox>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox}/>
              <Typography>Стабільний температурний режим</Typography>
            </CheckboxTextBox>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox}/>
              <Typography>Можливість виділення додаткової мережі IP-адрес</Typography>
            </CheckboxTextBox>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox}/>
              <Typography>Цілодобова технічна підтримка</Typography>
            </CheckboxTextBox>
            
          </BenefitsBox>
          <Box sx={{width: "700px", float: "right"}}><ColocationTable /></Box>
        </Box>
        
      </CentringBox>
      
    </>
  );
};

export default Colocation;
