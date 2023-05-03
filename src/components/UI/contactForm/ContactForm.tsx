import { Box, Button, TextField, styled } from "@mui/material";
import Banner from "./banner/banner3.avif";
import classes from "./ContactForm.module.scss";
import GirlBanner from "./banner/GirlBanner";
// type Props = {}

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  // background: "#1c92d2",
  background: "linear-gradient(to bottom, #1c92d26b, #1c92d270)",
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
        {/* <div className={classes.banner_div}><h3>Тут буде рекламна картинка та текст</h3></div> */}
        <GirlBanner />
        <div className={classes.form_div}>
          <form className={classes.form_div}>
            <FormContainer>
              <h3>Заповніть форму і ми знайдемо найоптимальніше рішення для вашого бізнесу</h3>
              <TextField type="text" id="filled-name-input" label="Ім'я" variant="standard" />
              <TextField type="text" id="filled-name-phone" label="Телефон" variant="filled" />
              <TextField type="text" id="filled-name-email" label="Електронна пошта" variant="outlined"/>
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
