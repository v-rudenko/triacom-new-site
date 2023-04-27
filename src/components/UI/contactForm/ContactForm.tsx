import { Box } from "@mui/material";
import Banner from "./banner/banner.jpg";
import classes from "./ContactForm.module.scss";
// type Props = {}

const ContactForm = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      {/* <img className={classes.banner} src={Banner} height="500px" alt="" /> */}
      <div className={classes.banner_div}>
        <div>Baboon</div>
      </div>
    </Box>
  );
};

export default ContactForm;
