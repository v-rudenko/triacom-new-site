import { AppBar, Box, Button, Toolbar, styled } from "@mui/material";
import TriacomLogo from "./images/triacom-logo.jpg";
// import TriacomLogo from "./images/triangulum-logo.png";
import PhoneNumber from "./PhoneNumber";

import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";

// const URL = "/triacom-new-site";
const URL = "";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-around",
  [theme.breakpoints.down("xl")]: {
    justifyContent: "space-between",
    height: "100px",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#424242",
  fontSize: 18,
  [theme.breakpoints.down("xl")]: {
    fontSize: 14
  },
}));

const Navbar = () => {
  return (
    <AppBar draggable={false} sx={{ backgroundColor: "white" }} position="sticky">
      <StyledToolbar draggable={false}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Link to={`${URL}`}><img draggable={false} className={classes.logo} src={TriacomLogo} height={80} alt="" /></Link>
          <Box sx={{ mt: 5 }}>
            <StyledButton>Послуги</StyledButton>
            <Link draggable={false} to={`${URL}/about-company`}><StyledButton>Про Компанію</StyledButton></Link>
            <Link to={`${URL}/questions`}><StyledButton>Часті питання</StyledButton></Link>
            <StyledButton>Абонентам</StyledButton>
            <Link to={`${URL}/contacts`}><StyledButton>Контакти</StyledButton></Link>
          </Box>
        </Box>
        <Box sx={{ display: { xs: "none", lg: "flex" }, flexDirection: "row" }}>
          {/* <StyledText>Технічна підтримка: &nbsp;</StyledText>
          <StyledText sx={{fontWeight: 700, color: "#08212b"}}>044-591-0-591 &nbsp;</StyledText>
          <StyledText>Замовити послугу: &nbsp;</StyledText>
          <StyledText sx={{fontWeight: 700, color: "#08212b"}}>044-591-11-44</StyledText> */}
          <PhoneNumber description="Замовити послугу">
            (044) 591-11-44
          </PhoneNumber>
          {/* <PhoneNumber description="Технічна підтримка">
            (044) 591-0-591
          </PhoneNumber> */}
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
