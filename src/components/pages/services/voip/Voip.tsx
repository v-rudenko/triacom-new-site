import { useState } from "react";

import BackgroundImage from "../../../UI/background/BackgroundImage";

import { Box, Button, Typography, styled } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CallAnswerPhoto from "./images/phone4.jpg";

import classes from "./Voip.module.scss"
import ServiceContactForm from "../ServiceContactForm";


const CentringBox = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  margin: "70px 150px 70px",
});

const BenefitsTextBox = styled(Box)({
  width: "700px",
  // height: "420.45px",
  // border: "1px solid red",
});

const BenefitsImageBox = styled(Box)({
  width: "558px",
  height: "386px",
  // border: "1px solid red",
});

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.5rem",
  },
})) as typeof Typography;

const StyledSubHeading = styled(Typography)(({ theme }) => ({
  fontSize: "1.3rem",
  margin: "20px 0",
  fontWeight: "500"
})) as typeof Typography;

const CheckboxTextBox = styled(Box)({
  display: "flex",
  // marginTop: "20px",
  // lineHeight: 20,
  alignItems: "flex-start",
  gap: 8,
});


const Voip = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const modalOpenHandler = () => setModalOpen(true);
  const modalCloseHandler = () => setModalOpen(false);

  const fontSize = "large";
  return (
    <>
      <BackgroundImage variant="green" />
      <ServiceContactForm
          isOpen={modalOpen}
          onModalClose={modalCloseHandler}
        />
      <CentringBox>
        <BenefitsTextBox>
          <StyledHeading variant="h3" component={"h1"}>
            IP-Телефонія для бізнесу
          </StyledHeading>
          <StyledSubHeading>
            IP-Телефонія від Triacom забезпечить вам легке підключення та
            голосовий зв'язок високої якості.
          </StyledSubHeading>
          <Typography variant="h6">Переваги нашого сервісу:</Typography>
          <ul className={classes.benefits_list}>
            <li>
              <CheckCircleIcon fontSize={fontSize} />
              <Typography>
                Можливість вибору номерів з нашого номерного ресурсу
                (044) 591-**-**.
              </Typography>
            </li>
            <li>
            <CheckCircleIcon fontSize={fontSize} />
              <Typography>
                Міські, міжміські та міжнародні дзвінки за гнучкими та вигідними
                тарифами.
              </Typography>
            </li>
            <li>
            <CheckCircleIcon fontSize={fontSize} />
              <Typography>
                Використання багатоканальних номерів. До одного номера буде додано
                декілька безномерних ліній.
              </Typography>
            </li>
            <li>
            <CheckCircleIcon fontSize={fontSize} />
              <Typography>
                Можливість переадресації дзвінків відповідно до вашого робочого
                часу та потреб.
              </Typography>
            </li>
            <Button onClick={modalOpenHandler} sx={{color: "green", borderColor: "green"}} size="large" variant="outlined">Замовити послугу</Button>
          </ul>
        </BenefitsTextBox>
        <BenefitsImageBox>
          <img src={CallAnswerPhoto} className={classes.banner} width="700px" alt="phone-image" />
        </BenefitsImageBox>
      </CentringBox>
    </>
  );
};

export default Voip;
