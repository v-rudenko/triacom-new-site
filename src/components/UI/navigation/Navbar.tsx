import { useState } from "react";
import { AppBar, Box, Button, Menu, MenuItem, Toolbar, styled } from "@mui/material";
import TriacomLogo from "./images/triacom-logo.jpg";
// import TriacomLogo from "./images/triangulum-logo.png";
import PhoneNumber from "./PhoneNumber";

import classes from "./Navbar.module.scss";
import { Link } from "react-router-dom";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

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
  fontSize: 16,
  [theme.breakpoints.down("xl")]: {
    fontSize: 14,
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: 12,
  },
}));

const NavButtonsBox = styled(Box) (({ theme }) => ({
  display: "flex",
  alignItems: "center",
  [theme.breakpoints.down("lg")]: {
    // fontSize: 12
  },
}));

const Navbar = () => {
  const [services, setServices] = useState<null | HTMLElement>(null);
  const servicesOpen = Boolean(services);
  const servicesClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setServices(event.currentTarget);
  };
  const servicesCloseHandler = () => {
    setServices(null);
  };
  
  const [aboutCompany, setAboutCompany] = useState<null | HTMLElement>(null);
  const aboutCompanyOpen = Boolean(aboutCompany);
  const aboutCompanyClickHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAboutCompany(event.currentTarget);
  };
  const aboutCompanyCloseHandler = () => {
    setAboutCompany(null);
  };
  return (
    <AppBar
      draggable={false}
      sx={{ backgroundColor: "white" }}
      position="sticky"
    >
      <StyledToolbar draggable={false}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Link to={`${URL}`}>
            <img
              draggable={false}
              className={classes.logo}
              src={TriacomLogo}
              height={80}
              alt=""
            />
          </Link>
          <NavButtonsBox >
            <StyledButton id="services" onClick={servicesClickHandler} startIcon={<KeyboardArrowDownIcon />}>
              Послуги
            </StyledButton>
            <Menu
              id="services-menu"
              anchorEl={services}
              open={servicesOpen}
              onClose={servicesCloseHandler}
              MenuListProps={{
                "aria-labelledby": "services",
              }}
              
            >
              <MenuItem onClick={servicesCloseHandler}><Link className={classes.menu_link} to={`${URL}/internet`}>Інтернет</Link></MenuItem>
              <MenuItem onClick={servicesCloseHandler}><Link className={classes.menu_link} to={`${URL}/voip`}>Телефонія</Link></MenuItem>
              <MenuItem onClick={servicesCloseHandler}><Link className={classes.menu_link} to={`${URL}/colocation`}>Колокейшн</Link></MenuItem>
              <MenuItem onClick={servicesCloseHandler}><Link className={classes.menu_link} to={`${URL}/data-links`}>Канали зв'язку</Link></MenuItem>
              <MenuItem onClick={servicesCloseHandler}><Link className={classes.menu_link} to={`${URL}/virtual-pbx`}>Віртуальна АТС</Link></MenuItem>
              <MenuItem onClick={servicesCloseHandler}><Link className={classes.menu_link} to={`${URL}/hosting`}>Хостинг</Link></MenuItem>
            </Menu>
            {/* <Link draggable={false} to={`${URL}/about-company`}> */}
            <StyledButton id="about-company" onClick={aboutCompanyClickHandler} startIcon={<KeyboardArrowDownIcon />}>
              Про Компанію
            </StyledButton>
            <Menu
              id="about-company-menu"
              anchorEl={aboutCompany}
              open={aboutCompanyOpen}
              onClose={aboutCompanyCloseHandler}
              MenuListProps={{
                "aria-labelledby": "about-company",
              }}
              
            >
              <Link className={classes.menu_link} to={`${URL}/history`}><MenuItem onClick={aboutCompanyCloseHandler}>Історія компанії</MenuItem></Link>
              <Link className={classes.menu_link} to={`${URL}/documents`}><MenuItem onClick={aboutCompanyCloseHandler}>Дозвільні документи</MenuItem></Link>
              <Link className={classes.menu_link} to={`${URL}/reports`}> <MenuItem onClick={aboutCompanyCloseHandler}>Звіти</MenuItem></Link>
            </Menu>
            {/* </Link> */}
            <Link to={`${URL}/questions`}>
              <StyledButton>Часті питання</StyledButton>
            </Link>
            <StyledButton>Абонентам</StyledButton>
            <Link to={`${URL}/contacts`}>
              <StyledButton>Контакти</StyledButton>
            </Link>
          </NavButtonsBox>
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
