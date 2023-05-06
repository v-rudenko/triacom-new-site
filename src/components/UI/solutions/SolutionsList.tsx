// type Props = {}

import { Box, styled } from "@mui/material";
import Solution from "./Solution";
import LanguageIcon from "@mui/icons-material/Language";

const BoxWraper = styled(Box)({
  margin: "50px 200px",
  textAlign: "center",
});

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: 30,
  // padding: "50px 200px",
  // padding: "50px 15%",
});

const SolutionsList = () => {
  return (
    <BoxWraper>
      <div>
        <h1>Наші Послуги</h1>
      </div>
      <StyledBox>
        <Solution title="Інтернет" description="Швидкісний Інтернет до 10 Гбіт/с">
          <LanguageIcon fontSize="large"/>
        </Solution>
        <Solution title="Телефонія" description="Якісна телефонія на базі SIP та PRI"></Solution>
        <Solution></Solution>
        <Solution></Solution>
        <Solution></Solution>
        <Solution></Solution>
        <Solution></Solution>
        <Solution></Solution>
        <Solution></Solution>
      </StyledBox>
    </BoxWraper>
  );
};

export default SolutionsList;
