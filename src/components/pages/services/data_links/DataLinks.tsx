import { useState } from "react";

import BackgroundImage from "../../../UI/background/BackgroundImage";
// import pbxDiagram from "./images/pbxDiagram.jpg";

import { Box, Button, Typography, styled } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
// import CallAnswerPhoto from "./images/phone4.jpg";

import classes from "./DataLinks.module.scss";
import ServiceContactForm from "../ServiceContactForm";


const CentringBox = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  margin: "70px 150px 70px",
  gap: 50
});

const BenefitsTextBox = styled(Box)({
  width: "700px",
  // height: "420.45px",
  // border: "1px solid red",
});

const BenefitsImageBox = styled(Box)({
  // width: "700px",
  height: "600px",
  // borderRadius: "20px",
  // border: "3px solid black",
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


const DataLinks = () => {
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
            Канали зв'язку
          </StyledHeading>
          <StyledSubHeading>
            Triacom надає послуги з побудови каналів зв'язку, які забезпечать зв'язок між різними локаціями вашого бізнесу об'єднавши їх в єдину систему.
          </StyledSubHeading>
          <Typography variant="h6">Переваги нашого сервісу:</Typography>
          <ul className={classes.benefits_list}>
            <li>
              <CheckCircleIcon fontSize={fontSize} />
              <Typography>
              Канали будуються на базі власної розгалуженої оптичної мережі
              </Typography>
            </li>
            <li>
              <CheckCircleIcon fontSize={fontSize} />
              <Typography>
                Пропускна спроможність до 10 Гбіт/cек
              </Typography>
            </li>
            <li>
              <CheckCircleIcon fontSize={fontSize} />
              <Typography>
                Висока надійність 
              </Typography>
            </li>
            <li>
            <CheckCircleIcon fontSize={fontSize} />
              <Typography>
                Цілодобовий моніторинг та підтримка нашими фахівцями
              </Typography>
            </li>
            <Button onClick={modalOpenHandler} sx={{color: "green", borderColor: "green"}} size="large" variant="outlined">Замовити послугу</Button>
          </ul>
        </BenefitsTextBox>
        <BenefitsImageBox>
          {/* <h1>Тут буде схема або картинка</h1> */}
          {/* <img className={classes.schema} src={pbxDiagram} alt="" /> */}
        </BenefitsImageBox>
      </CentringBox>
    </>
  );
};

export default DataLinks;
