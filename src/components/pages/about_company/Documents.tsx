import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import test1 from "./documents/test_vytyah/test1.png";
import test2 from "./documents/test_vytyah/test2.png";
import test3 from "./documents/test_vytyah/test3.png";
import test4 from "./documents/test_vytyah/test4.png";
import test5 from "./documents/test_vytyah/test5.png";
import dozvilNR from "./documents/dozvil_nr.png";
import gk1 from "./documents/gk_vytyah/gk1.png";
import gk2 from "./documents/gk_vytyah/gk2.png";
import gk3 from "./documents/gk_vytyah/gk3.png";
import atestat from "./documents/atestat.png";

// type Props = {}


const DocumentBox = styled(Box)({
  textAlign: "center",
});

const Documents = () => {
  return (
    <>
      <Accordion sx={{ background: "#D6E6F2" }}>
        <AccordionSummary
          sx={{ padding: "10px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="question1-header"
        >
          <Typography variant="h6">Електронні комунікації</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Accordion sx={{ background: "#B9D7EA" }}>
            <AccordionSummary
              sx={{ padding: "10px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="question1-header"
            >
              <Typography variant="h6">
                ТОВ "Т.Е.С.Т." ВИТЯГ з реєстру постачальників електронних
                комунікаційних мереж та послуг
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DocumentBox><img src={test1} alt="" /></DocumentBox>
              <DocumentBox><img src={test2} alt="" /></DocumentBox>
              <DocumentBox><img src={test3} alt="" /></DocumentBox>
              <DocumentBox><img src={test4} alt="" /></DocumentBox>
              <DocumentBox><img src={test5} alt="" /></DocumentBox>
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
                ТОВ "Т.Е.С.Т." Дозвіл на використання номерного ресурсу
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DocumentBox><img src={dozvilNR} alt="" /></DocumentBox>
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
                ТОВ "Глобальні Комунікації" ВИТЯГ з реєстру постачальників електронних
                комунікаційних мереж та послуг
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DocumentBox><img src={gk1} alt="" /></DocumentBox>
              <DocumentBox><img src={gk2} alt="" /></DocumentBox>
              <DocumentBox><img src={gk3} alt="" /></DocumentBox>
            </AccordionDetails>
          </Accordion>
          {/* <DocumentBox><img src={test1} alt="" /></DocumentBox> */}
        </AccordionDetails>
      </Accordion>
      <Accordion sx={{ background: "#D6E6F2" }}>
        <AccordionSummary
          sx={{ padding: "10px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="question1-header"
        >
          <Typography variant="h6">Захист інформаційно-телекомунікаційної системи</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <Accordion sx={{ background: "#B9D7EA" }}>
            <AccordionSummary
              sx={{ padding: "10px" }}
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="question1-header"
            >
              <Typography variant="h6">
                Атестат відповідності
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <DocumentBox><img src={atestat} alt="" /></DocumentBox>
            </AccordionDetails>
          </Accordion>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default Documents;
