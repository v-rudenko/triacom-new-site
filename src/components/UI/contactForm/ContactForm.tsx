import { Box, Button, TextField, Typography, styled } from "@mui/material";
import Banner from "./banner/banner3.avif";
import classes from "./ContactForm.module.scss";
import GirlBanner from "./banner/GirlBanner";
import Slider from "./slider/Slider";

import PersonIcon from '@mui/icons-material/Person';

// type Props = {}

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  // background: "#1c92d2",
  background: "linear-gradient(to bottom, #1c92d26b, #1c92d270)",
  padding: "1rem 2rem 1.5rem",
  borderRadius: "15px",
  maxWidth: "450px",
    // gap: 20,
  gap: 15,
});

const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  padding: "0 150px",
  gap: 20,
  zIndex: 2,
});

const ContactForm = () => {
  return (
    <div>
      <FormWrapper>
        {/* <div className={classes.banner_div}><h3>Тут буде рекламна картинка та текст</h3></div> */}
        <GirlBanner />
        <div className={classes.form_div}>
          <form className={classes.form_div}>
            <FormContainer>
              <Typography variant="h6">
                Ми відшукаємо оптимальне рішення для вашого
                бізнесу
              </Typography>
                  <TextField
                    type="text"
                    id="filled-name-input"
                    label="Ім'я"
                    variant="filled"
                    size="small"
                  />
              <TextField
                type="text"
                id="filled-name-company"
                label="Назва компанії"
                variant="filled"
                size="small"
              />
              <TextField
                type="text"
                id="filled-name-phone"
                label="Телефон"
                variant="filled"
                size="small"
              />
              <TextField
                type="text"
                id="filled-name-email"
                label="Електронна пошта"
                variant="filled"
                size="small"
              />
              <TextField
                id="filled-name-comment"
                label="Ваше звернення"
                multiline
                maxRows={3}
                variant="filled"
                size="small"
              ></TextField>
              <Button variant="contained">Надіслати</Button>
            </FormContainer>
          </form>
        </div>
      </FormWrapper>
      <div className={classes.carusel_div}>
        <Slider></Slider>
      </div>

      <img className={classes.background} src={Banner} alt="" />
    </div>
  );
};

export default ContactForm;
