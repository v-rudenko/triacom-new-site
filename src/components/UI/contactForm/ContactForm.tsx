import { Box } from "@mui/material";
import Banner from "./banner/banner3.avif";
import classes from "./ContactForm.module.scss";
// type Props = {}

const ContactForm = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      
      <div className={classes.banner_div}>
      <img className={classes.banner} src={Banner}  alt="" />
      </div>
    </Box>
  );
};

export default ContactForm;
