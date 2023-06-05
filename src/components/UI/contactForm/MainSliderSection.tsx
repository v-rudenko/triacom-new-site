import { Box, styled } from "@mui/material";
import classes from "./MainSliderSection.module.scss";
import GirlBanner from "./banner/GirlBanner";
import ContactForm from "./ContactForm";

// import FiraSans from 'https://fonts.googleapis.com/css2?family=Fira+Sans:wght@500&display=swap';


// type Props = {}

const FormWrapper = styled(Box)({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  padding: "20px 80px",
  gap: 20,
  zIndex: 2,
});

const MainSliderSection = () => {
  return (
    <div>
      <FormWrapper>
        {/* <div className={classes.banner_div}><h3>Тут буде рекламна картинка та текст</h3></div> */}
        <GirlBanner />
        <div className={classes.form_div}>
          <ContactForm />
        </div>
      </FormWrapper>

      {/* <img className={classes.background} src={BackgroundNetwork} alt="" /> */}
    </div>
  );
};

export default MainSliderSection;
