import { Box, styled } from "@mui/material";
// import classes from "./Contacts.module.scss";
import ContactList from "./ContactList";
import Map from "./Map";
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
    </>
  );
};

export default Contacts;
