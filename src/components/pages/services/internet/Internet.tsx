// import React from 'react'

import { Box, Button, Stack, Typography, styled } from "@mui/material";

import classes from "./Internet.module.scss";

import LaptopSVG from "./images/Laptop3.svg";
import CheckboxSVG from "./images/Checkbox.svg";
import { useState } from "react";

import ServiceContactForm from "../ServiceContactForm";
import StackOfThree from "../../../UI/services/StackOfThree";
import BackgroundImage from "../../../UI/background/BackgroundImage";

// type Props = {}

const CentringBox = styled(Box)({
  display: "flex",
  justifyContent: " space-around",
  margin: "50px 150px 20px",
});

const InternetTextBox = styled(Box)({
  width: "560px",
  display: "flex",
  flexDirection: "column",
  gap: 30,
  // height: "420.45px",
  // border: "1px solid red",
});

const InternetImageBox = styled(Box)({
  width: "558px",
  height: "386px",
  marginRight: "-200px",
  // border: "1px solid red",
});

const HeadingText = styled(Typography)({
  color: "#8CC5F9",
  fontSize: 35,
  fontWeight: 500,
  // lineHeight: "50px",
});
const SubHeadingText = styled(Typography)({
  color: "#4F5665",
  marginTop: "20px",
  fontSize: 18,
  fontWeight: 700,
  lineHeight: "30px",
});

const CheckboxTextBox = styled(Box)({
  display: "flex",
  // marginTop: "20px",
  alignItems: "flex-start",
});

const CheckboxText = styled(Typography)({
  color: "#4F5665",
  fontSize: "1.2rem",
  fontWeight: 500,
  lineHeight: "30px",
});

const StackItem = styled(Box)({});

const CounterBox = styled(Box)({});

const StyledButton = styled(Button)({});

const Internet = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => setModalOpen(true);
  const modalCloseHandler = () => setModalOpen(false);

  const serviceTitle = "Інтернет";

  return (
    <>
      <BackgroundImage variant="blue" />
      <CentringBox>
        <ServiceContactForm
          isOpen={modalOpen}
          onModalClose={modalCloseHandler}
          service={serviceTitle}
        />
        <InternetTextBox>
          <Box>
            <HeadingText variant="h5">
              Швидкісний Інтернет для бізнесу.
            </HeadingText>
            <SubHeadingText>
              Відчуйте всі переваги швидкісного оптичного Інтернету з пропускною
              здатністю до 10 Гбіт/c.
            </SubHeadingText>
          </Box>
          <CheckboxTextBox>
            <img className={classes.checkbox} src={CheckboxSVG} alt="" />{" "}
            <CheckboxText sx={{ ml: 1 }}>
              Розгалужена оптична мережа загальною довжиною &gt; 1000 кілометрів
            </CheckboxText>
          </CheckboxTextBox>
          <CheckboxTextBox>
            <img className={classes.checkbox} src={CheckboxSVG} alt="" />{" "}
            <CheckboxText sx={{ ml: 1 }}>
              Гнучкі тарифи від 1 Мбіт/c до 10 Гбіт/с
            </CheckboxText>
          </CheckboxTextBox>
          <CheckboxTextBox>
            <img className={classes.checkbox} src={CheckboxSVG} alt="" />{" "}
            <CheckboxText sx={{ ml: 1 }}>
              Статична зовнішня IP-адреса
            </CheckboxText>
          </CheckboxTextBox>
          <CheckboxTextBox>
            <img className={classes.checkbox} src={CheckboxSVG} alt="" />{" "}
            <CheckboxText sx={{ ml: 1 }}>
              Оптична лінія зв'язку до кінцевого абонента за технологією WDM та
              CWDM
            </CheckboxText>
          </CheckboxTextBox>
          <CheckboxTextBox>
            <img className={classes.checkbox} src={CheckboxSVG} alt="" />{" "}
            <CheckboxText sx={{ ml: 1 }}>
              Кваліфікована цілодобова технічна підтримка
            </CheckboxText>
          </CheckboxTextBox>
          <CheckboxTextBox>
            {/* <CheckboxText sx={{ml: 4, mt: 1}}><button className={classes.button}>Замовити послугу</button></CheckboxText> */}
            <CheckboxText sx={{ ml: 4, mt: 1 }}>
              <StyledButton
                onClick={modalOpenHandler}
                variant="outlined"
                size="large"
              >
                Замовити послугу
              </StyledButton>
            </CheckboxText>
          </CheckboxTextBox>
        </InternetTextBox>
        <InternetImageBox>
          {/* <img src={LaptopSVG} alt="" /> */}
        </InternetImageBox>
      </CentringBox>

      <StackOfThree />
    </>
  );
};

export default Internet;
