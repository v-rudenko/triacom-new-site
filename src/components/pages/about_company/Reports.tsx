import React from "react";
import BackgroundImage from "../../UI/background/BackgroundImage";
import { Accordion, AccordionDetails, AccordionSummary, Typography, Box, styled } from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import Zvit2022p1 from "./documents/reports/Zvit2022_1.jpg"
import Zvit2022p2 from "./documents/reports/Zvit2022_1.jpg"
import Zvit2021p1 from "./documents/reports/zvit2021-1.jpg"
import Zvit2021p2 from "./documents/reports/zvit2021-2.jpg"
import Zvit2020p1 from "./documents/reports/zvit_2020_1.png"
import Zvit2020p2 from "./documents/reports/zvit_2020_2.png"
import Zvit2019p1 from "./documents/reports/Zvit_2019_1.jpeg"
import Zvit2019p2 from "./documents/reports/Zvit_2019_2.jpeg"

const DocumentBox = styled(Box)({
  textAlign: "center",
});


const Reports = () => {
  return (
    <>
      <BackgroundImage />
      <Accordion sx={{ background: "#B9D7EA" }}>
            <AccordionSummary
              sx={{ padding: "10px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="question1-header"
            >
              <Typography variant="h6">
              Звіт оператора телекомунікації про якість телекомунікаційних послуг за 2022 рік 
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DocumentBox><img src={Zvit2022p1} alt="" /></DocumentBox>
              <DocumentBox><img src={Zvit2022p2} alt="" /></DocumentBox>
            </AccordionDetails>
          </Accordion>
      <Accordion sx={{ background: "#B9D7EA" }}>
            <AccordionSummary
              sx={{ padding: "10px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="question1-header"
            >
              <Typography variant="h6">
              Звіт оператора телекомунікації про якість телекомунікаційних послуг за 2021 рік 
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DocumentBox><img src={Zvit2021p1} alt="" /></DocumentBox>
              <DocumentBox><img src={Zvit2021p2} alt="" /></DocumentBox>
            </AccordionDetails>
          </Accordion>
      <Accordion sx={{ background: "#B9D7EA" }}>
            <AccordionSummary
              sx={{ padding: "10px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="question1-header"
            >
              <Typography variant="h6">
              Звіт оператора телекомунікації про якість телекомунікаційних послуг за 2020 рік 
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DocumentBox><img src={Zvit2020p1} alt="" /></DocumentBox>
              <DocumentBox><img src={Zvit2020p2} alt="" /></DocumentBox>
            </AccordionDetails>
          </Accordion>
      <Accordion sx={{ background: "#B9D7EA" }}>
            <AccordionSummary
              sx={{ padding: "10px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="question1-header"
            >
              <Typography variant="h6">
              Звіт оператора телекомунікації про якість телекомунікаційних послуг за 2019 рік 
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DocumentBox><img width="90%" src={Zvit2019p1} alt="" /></DocumentBox>
              <DocumentBox><img width="90%" src={Zvit2019p2} alt="" /></DocumentBox>
            </AccordionDetails>
          </Accordion>
    </>
  );
};

export default Reports;
