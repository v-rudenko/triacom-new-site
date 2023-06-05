import { useState } from "react";

import { Box, Button, Typography, styled } from "@mui/material";
import colocationBanner from "./images/servers.png";
import classes from "./Colocation.module.scss";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ColocationTable from "./ColocationTable";
import BackgroundImage from "../../../UI/background/BackgroundImage";
import ServiceContactForm from "../ServiceContactForm";

const CentringBox = styled(Box) (({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  // justifyContent: " space-around",
  margin: "30px 150px 100px",
  gap: 25,
  // paddingBottom: "50px",
  // background: "#D6E6F2"
  [theme.breakpoints.down("xl")]: {
    margin: "30px 50px",
  },
}));

const BenefitsBox = styled(Box)(({ theme }) => ({
  display: "inline-flex",
  flexDirection: "column",
  alignSelf: "flex-start",
  // width: "100%",
  marginLeft: "100px",
  gap: 20,

  [theme.breakpoints.down("xl")]: {
    marginLeft: "20px",
    gap: 20
  },
}));

const CheckboxTextBox = styled(Box)({
  display: "flex",
  // marginTop: "20px",
  // lineHeight: 20,
  alignItems: "flex-start",
  gap: 8,
});

const StyledCheckboxText = styled(Typography)(({ theme }) => ({

}));

const ImageBox = styled(Box)(({ theme }) => ({
  overflow: "hidden",
  borderRadius: "30px",
  [theme.breakpoints.down("xl")]: {
    height: "340px",
    width: "1000px",
  },
}));

const StyledHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  [theme.breakpoints.down("xl")]: {
    fontSize: "2.5rem",
  },
})) as typeof Typography;

const StyledSubHeading = styled(Typography)(({ theme }) => ({
  fontWeight: 700,
  fontSize: 18,

  [theme.breakpoints.down("xl")]: {
    fontWeight: 700,
  },
})) as typeof Typography;

const Colocation = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const modalOpenHandler = () => setModalOpen(true);

  const modalCloseHandler = () => setModalOpen(false);
  return (
    <>
      {/* <BackgroundImage /> */}
      <BackgroundImage variant="green" inverted={true} />
      <ServiceContactForm
          isOpen={modalOpen}
          onModalClose={modalCloseHandler}
        />
      <CentringBox>
        <Box>
          <StyledHeading variant="h3" component={"h1"}>
            Послуга колокейшн - розміщення серверів
          </StyledHeading>
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
          <StyledSubHeading variant="h3">
            Triangulum має власний дата-центр, для розміщення серверного та
            телекомунікаційного обладнання наших клієнтів
          </StyledSubHeading>
        </Box>
        <Box sx={{ display: "flex", gap: 10 }}>
          <BenefitsBox>
            <Typography variant="h5">Переваги нашого сервісу</Typography>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox} />
              <StyledCheckboxText>
                Безперебійне електропостачання
              </StyledCheckboxText>
            </CheckboxTextBox>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox} />
              <StyledCheckboxText>
                Можливість доступу до обладнання 24/7
              </StyledCheckboxText>
            </CheckboxTextBox>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox} />
              <StyledCheckboxText>
                Стабільний температурний режим
              </StyledCheckboxText>
            </CheckboxTextBox>
            <CheckboxTextBox>

              <CheckCircleIcon className={classes.checkbox} />
              <StyledCheckboxText>
              Можливість виділення додаткової мережі IP-адрес
              </StyledCheckboxText>
            </CheckboxTextBox>
            <CheckboxTextBox>
              <CheckCircleIcon className={classes.checkbox} />
              <StyledCheckboxText>
                Цілодобова технічна підтримка
              </StyledCheckboxText>
            </CheckboxTextBox>
            <Button onClick={modalOpenHandler} sx={{color: "green", borderColor: "green"}} variant="outlined">Замовити послугу</Button>
          </BenefitsBox>
          <Box sx={{ width: "700px", float: "right" }}>
            <ColocationTable />
          </Box>
        </Box>
      </CentringBox>
    </>
  );
};

export default Colocation;
