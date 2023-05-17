import { useState } from "react";
import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import classes from "./ServiceContactForm.module.scss";

type Props = {
  isOpen: boolean;
  onModalClose: () => void;
};

const CentringBox = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
});

const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  // background: "#1c92d2",
  // background: "#F7FBFC",
  background: "#D6E6F2",
  padding: "2rem 2rem 1.5rem",
  borderRadius: "15px",
  width: "600px",
  // gap: 20,
  gap: 25,
});

const ServiceContactForm = (props: Props) => {
  return (
    <Modal open={props.isOpen} onClose={props.onModalClose}>
      <form>
        <CentringBox>
          <FormContainer>
            <IconButton
              aria-label="close"
              onClick={props.onModalClose}
              sx={{
                position: "absolute",
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon className={classes.close} />
            </IconButton>
            <Typography sx={{ fontFamily: "Fira Sans" }} variant="h6">
              Замовлення послуг
            </Typography>
            <TextField
              type="text"
              id="filled-name-input"
              label="Ім'я"
              variant="outlined"
              size="small"
              required={true}
            />
            <TextField
              type="text"
              id="filled-name-company"
              label="Назва компанії"
              variant="outlined"
              size="small"
              required={true}
            />
            <TextField
              type="text"
              id="filled-name-company"
              label="Код ЄДРПОУ"
              variant="outlined"
              size="small"
              required={true}
            />
            <TextField
              type="text"
              id="filled-name-phone"
              label="Телефон"
              variant="outlined"
              size="small"
              required={true}
            />
            <TextField
              type="text"
              id="filled-name-email"
              label="Електронна пошта"
              variant="outlined"
              size="small"
              required={true}
            />
            <TextField
              id="filled-name-comment"
              label="Коментар"
              multiline
              maxRows={3}
              variant="outlined"
              size="small"
            ></TextField>
            <Button variant="contained">Надіслати</Button>
          </FormContainer>
        </CentringBox>
      </form>
    </Modal>
  );
};

export default ServiceContactForm;
