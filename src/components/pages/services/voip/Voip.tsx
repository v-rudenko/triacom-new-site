import BackgroundImage from "../../../UI/background/BackgroundImage";

import { Box, styled } from "@mui/material";

import CallAnswerPhoto from "./images/phone3.jpg";

const CentringBox = styled(Box)({
  display: "flex",
  justifyContent: " space-around",
  margin: "70px 150px 70px",
});

const BenefitsTextBox = styled(Box)({
  width: "560px",
  // height: "420.45px",
  // border: "1px solid red",
});

const BenefitsImageBox = styled(Box)({
  width: "558px",
  height: "386px",
  // border: "1px solid red",
});

const Voip = () => {
  return (
    <>
      <BackgroundImage variant="green" />
      <CentringBox>
        <BenefitsTextBox>
          <h1>IP-Телефонія для бізнесу</h1>
          <p>
            IP-Телефонія від Triacom забезпечить вам легке підключення та
            голосовий зв'язок високої якості.
          </p>
          <p>Переваги нашого сервісу:</p>
          <ul>
            <li>
              Можливість вибору номерів з нашого власного номерного ресурсу
              (044) 591-00-00.
            </li>
            <li>
              Міські, міжміські та міжнародні дзвінки за гнучкими та вигідними
              тарифами.
            </li>
            <li>
              Використання багатоканальних номерів. До одного номера буде додано
              декілька безномерних ліній.
            </li>
            <li>
              Можливість переадресації дзвінків відповідно до вашого робочого
              часу та потреб.
            </li>
          </ul>
          <button>Замовити послугу</button>
        </BenefitsTextBox>
        <BenefitsImageBox>
          <img src={CallAnswerPhoto} width="700px" alt="phone-image" />
        </BenefitsImageBox>
      </CentringBox>
    </>
  );
};

export default Voip;
