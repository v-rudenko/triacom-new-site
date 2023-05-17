// import React from 'react'

import { Box, Button, Modal, Typography, styled } from "@mui/material";

import classes from "./Internet.module.scss";

import LaptopSVG from "./images/Laptop3.svg";
import CheckboxSVG from "./images/Checkbox.svg";
import { useState } from "react";

// type Props = {}

const CentringBox = styled(Box)({
  display: "flex",
  justifyContent: " space-around",
  margin: "100px 150px",
});

const InternetTextBox = styled(Box)({
  width: "427.88px",
  height: "420.45px",
  // border: "1px solid red",
});

const InternetImageBox = styled(Box)({
  width: "558px",
  height: "386px",
  // border: "1px solid red",
});

const HeadingText = styled(Typography)({
  color: "#8CC5F9",
  fontSize: 35,
  fontWeight: 500,
  lineHeight: "50px",
});
const SubHeadingText = styled(Typography)({
  color: "#4F5665",
  marginTop: "20px",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "30px",
});

const CheckboxTextBox = styled(Box)({
  display: "flex",
  marginTop: "20px",
  // alignItems: "center"
});

const CheckboxText = styled(Typography)({
  color: "#4F5665",
  fontSize: "14px",
  fontWeight: 400,
  lineHeight: "30px",
});

const StyledButton = styled(Button) ({

})


const Internet = () => {
  const [modalOpen, setModalOpen] = useState(false)
  return (
    <CentringBox>
      <Modal open={modalOpen} onClose={modalCloseHandler}>
        {/* <Conta /> */}
      </Modal>
      <InternetTextBox>
        <HeadingText variant="h5">Швидкісний Інтернет для бізнесу.</HeadingText>
        <SubHeadingText>
          Відчуйте всі переваги швидкісного оптичного Інтернету з пропускною здатністю до 10 Гбіт/c.
        </SubHeadingText>
        <CheckboxTextBox>
          <img src={CheckboxSVG} alt="" />{" "}
          <CheckboxText sx={{ml: 1}}>Висока надійність каналів</CheckboxText>
        </CheckboxTextBox>
        <CheckboxTextBox>
          <img src={CheckboxSVG} alt="" />{" "}
          <CheckboxText sx={{ml: 1}}>Гнучкі тарифи від 1Мбіт/c до 10Гбіт/с</CheckboxText>
        </CheckboxTextBox>
        <CheckboxTextBox>
          <img src={CheckboxSVG} alt="" />{" "}
          <CheckboxText sx={{ml: 1}}>Симетрична швидкість</CheckboxText>
        </CheckboxTextBox>
        <CheckboxTextBox>
          <img src={CheckboxSVG} alt="" />{" "}
          <CheckboxText sx={{ml: 1}}>Кваліфікована цілодобова технічна підтримка</CheckboxText>
        </CheckboxTextBox>
        <CheckboxTextBox>
          {/* <CheckboxText sx={{ml: 4, mt: 1}}><button className={classes.button}>Замовити послугу</button></CheckboxText> */}
          <CheckboxText sx={{ml: 4, mt: 1}}><StyledButton variant="outlined" size="large">Замовити послугу</StyledButton></CheckboxText>
        </CheckboxTextBox>
      </InternetTextBox>
      <InternetImageBox>
        <img src={LaptopSVG} alt="" />
      </InternetImageBox>
    </CentringBox>
  );
};

export default Internet;
