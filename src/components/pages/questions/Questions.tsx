import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  styled,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// type Props = {}

const Questions = () => {
  const AcordionBox = styled(Box)({
    margin: "0 150px",
  });

  return (
    <AcordionBox>
      <Typography sx={{textAlign:"center", m: "20px", fontWeight:"500"}} variant="h4">Часті Питання</Typography>
      <Box sx={{background: "#B9D7EA"}}>
        <Accordion sx={{ background: "#D6E6F2"}}>
          <AccordionSummary
            sx={{ padding: "10px" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="question1-header"
          >
            <Typography variant="h6">
              Після того, як моя IP адреса змінилася, не працює телефонія, що
              робити?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "#D6E6F2" }}>
          <AccordionSummary
            sx={{ padding: "10px" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="question1-header"
          >
            <Typography variant="h6">Питання 2 ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "#D6E6F2" }}>
          <AccordionSummary
           sx={{ padding: "10px" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="question1-header"
          >
            <Typography variant="h6">Питання 3 ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion sx={{ background: "#D6E6F2" }}>
          <AccordionSummary
           sx={{ padding: "10px" }}
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="question1-header"
          >
            <Typography variant="h6">Питання 4 ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
              malesuada lacus ex, sit amet blandit leo lobortis eget.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </AcordionBox>
  );
};

export default Questions;
