import {
  AppBar,
  Box,
  Button,
  Toolbar,
  styled,
} from "@mui/material";
import TriacomLogo from "./images/triacom-logo.jpg";
import PhoneNumber from "./PhoneNumber";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-evenly",
});

const StyledButton = styled(Button)({
  color: "#424242",
  fontSize: 10,
});


const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "white" }} position="sticky">
      <StyledToolbar>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <img src={TriacomLogo} height={50} alt="" />
          <StyledButton>Послуги</StyledButton>
          <StyledButton>Про Компанію</StyledButton>
          <StyledButton>Часті питання</StyledButton>
          <StyledButton>Абонентам</StyledButton>
          <StyledButton>Контакти</StyledButton>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          {/* <StyledText>Технічна підтримка: &nbsp;</StyledText>
          <StyledText sx={{fontWeight: 700, color: "#08212b"}}>044-591-0-591 &nbsp;</StyledText>
          <StyledText>Замовити послугу: &nbsp;</StyledText>
          <StyledText sx={{fontWeight: 700, color: "#08212b"}}>044-591-11-44</StyledText> */}
          <PhoneNumber description="Технічна підтримка">(044) 591-0-591</PhoneNumber>
          <PhoneNumber description="Замовити послугу">(044) 591-11-44</PhoneNumber>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
};

export default Navbar;
