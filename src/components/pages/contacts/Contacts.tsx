import { Box, styled } from "@mui/material";
// import classes from "./Contacts.module.scss";
import ContactList from "./ContactList";
import Map from "./Map";
import Navbar from "../../UI/navigation/Navbar";
import BackgroundImage from "../../UI/background/BackgroundImage";
// import Map from "./Map";
// type Props = {}

const Contacts = () => {
  const CentringBox = styled(Box)({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // textAlign: "center"
    // margin: "0 200px"
  });

  // const MapBox = styled(Box)({});

  return (
    <>
      <CentringBox>
        <ContactList />
        <Map></Map>
      </CentringBox>
      <BackgroundImage />
    </>
  );
};

export default Contacts;
