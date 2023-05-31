// type Props = {}

import { Box, styled } from "@mui/material";
import Solution from "./Solution";

import LanguageIcon from "@mui/icons-material/Language";
import PhoneInTalkIcon from "@mui/icons-material/PhoneInTalk";
import StorageIcon from "@mui/icons-material/Storage";
import AccountTreeIcon from "@mui/icons-material/AccountTreeOutlined";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import FaxIcon from "@mui/icons-material/FaxOutlined";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";

const BoxWraper = styled(Box)(({ theme }) => ({
  margin: "50px 200px",
  textAlign: "center",
  // [theme.breakpoints.down("xl")]: {
  //   margin: "50px 200px",
  // },
}));

const StyledBox = styled(Box)(({ theme }) => ({
  // display: "flex",
  // flexDirection: "row",
  // alignItems: "center",
  display: "grid",
  gridTemplateColumns: "repeat(3, max(450px))",
  // gridTemplateRows: "1fr 300px 300px",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: 30,
  // padding: "50px 200px",
  // padding: "50px 15%",
  [theme.breakpoints.down("xl")]: {
    gridTemplateColumns: "repeat(2, max(450px))",
  },
}));

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
          path="/internet"
        >
          <LanguageIcon sx={{ fontSize }} />
        </Solution>
        <Solution
          title="Телефонія"
          color="#00bf00b5"
          description="Якісна телефонія на базі SIP та PRI"
          path="/voip"
        >
          <PhoneInTalkIcon sx={{ fontSize }} />
        </Solution>
        <Solution
          title="Колокейшн"
          description="Розміщення серверів в нашому дата центрі"
          // color="#ff0000d1"
          color="rgb(255 0 0 / 64%)"
          path="/colocation"
        >
          <StorageIcon sx={{ fontSize }} />
        </Solution>
        <Solution
          title="Канали зв'язку"
          description="Поєднайте свій офіс, філію, склад в єдину систему "
          color="#007eff"
          path="/data-links"
        >
          <AccountTreeIcon sx={{ fontSize }}></AccountTreeIcon>
        </Solution>
        <Solution
          title="Віртуальна АТС"
          description="Комплексне рішення питання телефонії"
          color="#00bf00b5"
          path="/virtual-pbx"
        >
          <Box sx={{ position: "relative" }}>
            <CloudOutlinedIcon
              sx={{ fontSize: "46px", position: "relative" }}
            ></CloudOutlinedIcon>
            <FaxIcon
              sx={{
                position: "absolute",
                left: "10px",
                bottom: "14px",
                fontSize: "24px",
              }}
            ></FaxIcon>
          </Box>
        </Solution>
        <Solution
          title="Хостинг"
          description="Доступний та зручний хостинг сайтів"
          color="rgb(255 0 0 / 64%)"
          path="/hosting"
        >
          <WebOutlinedIcon sx={{ fontSize }} />
        </Solution>
      </StyledBox>
    </BoxWraper>
  );
};

export default SolutionsList;
