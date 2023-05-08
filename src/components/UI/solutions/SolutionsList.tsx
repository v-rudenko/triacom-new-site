// type Props = {}

import { Box, styled } from "@mui/material";
import Solution from "./Solution";

import LanguageIcon from "@mui/icons-material/Language";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import StorageIcon from "@mui/icons-material/Storage";

const BoxWraper = styled(Box)(({ theme }) => ({
  margin: "50px 200px",
  textAlign: "center",
  [theme.breakpoints.down("xl")]: {
    margin: "50px 50px",
  },
}));

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
  const fontSize = "40px";
  return (
    <BoxWraper>
      <div>
        <h1>Наші Послуги</h1>
      </div>
      <StyledBox>
        <Solution
          title="Інтернет"
          color="#007eff"
          description="Швидкісний Інтернет до 10 Гбіт/с"
        >
          <LanguageIcon sx={{ fontSize }} />
        </Solution>
        <Solution
          title="Телефонія"
          color="#00bf00b5"
          description="Якісна телефонія на базі SIP та PRI"
        >
          <PhoneInTalkIcon sx={{ fontSize }} />
        </Solution>
        <Solution
          title="Колокейшн"
          description="Розміщення серверів в нашому дата центрі"
          color="#ff0000d1"
        >
          <StorageIcon sx={{ fontSize }} />
        </Solution>
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
