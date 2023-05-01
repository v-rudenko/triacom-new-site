import { Box, Button, TextField, styled } from "@mui/material";
import Banner from "./banner/banner3.avif";
import classes from "./ContactForm.module.scss";
// type Props = {}

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#D6E6F2",
  backgroundImage: "url(https://www.transparenttextures.com/patterns/wavecut.png)",
  padding: "2rem",
  borderRadius: "15px",
  gap: 20
});

const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  padding: "0 15%",
  gap: 20
});

const ContactForm = () => {
  return (
    <div>
      <FormWrapper>
        <div className={classes.banner_div}></div>
        <div className={classes.form_div}>
          <form className={classes.form_div}>
            <FormContainer>
              <h3>Заповніть форму і наш фахівець зв'яжеться з вами</h3>
              <TextField type="text" id="filled-name-input" label="Ім'я" variant="filled" />
              <TextField type="text" id="filled-name-phone" label="Телефон" variant="filled" />
              <TextField type="text" id="filled-name-email" label="Електронна пошта" variant="filled"/>
              <TextField id="filled-name-comment" label="Ваше звернення" multiline maxRows={4} variant="filled" ></TextField>
              <Button variant="contained">Надіслати</Button>
            </FormContainer>
          </form>
        </div>
      </FormWrapper>
      <img className={classes.background} src={Banner} alt="" />
    </div>
  );
};

export default ContactForm;
