import { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import {
  Box,
  Button,
  Checkbox,
  FormControl,
  IconButton,
  InputLabel,
  ListItemText,
  MenuItem,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
  styled,
} from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";
import classes from "./ServiceContactForm.module.scss";

import TaskAltIcon from "@mui/icons-material/TaskAlt";

type Props = {
  isOpen: boolean;
  onModalClose: () => void;
  service: string;
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
  background: "#F5FAFE",
  padding: "2rem 2rem 1.5rem",
  borderRadius: "15px",
  width: "600px",
  // gap: 20,
  gap: 25,
});

const SubmittedFormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",

  background: "#F5FAFE",
  padding: "2rem 2rem 1.5rem",
  borderRadius: "15px",
  width: "600px",
  gap: 25,
});

const servicesList = [
  "Інтернет",
  "Канали зв'язку",
  "Телефонія",
  "Віртуальна АТС",
  "Колокейшн",
];

const ServiceContactForm = (props: Props) => {
  const [services, setServices] = useState<string[]>([props.service]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const ITEM_HEIGHT = 80;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 50,
      },
    },
  };

  const handleChange = (event: SelectChangeEvent<typeof services>) => {
    const {
      target: { value },
    } = event;
    setServices(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  const submitHandler = async (event: any) => {
    // const api = "http://localhost:3030";
    console.log("Handler");
    const api = "http://172.19.19.51:3030/email/order";
    event.preventDefault();
    setFormSubmitted(true);
    await fetch(api, {
      method: "POST",
      body: JSON.stringify({
        name: event.target.name.value,
        company: event.target.company.value,
        code: event.target.code.value,
        services: event.target.services.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => console.log(err));
    // alert("Надіслано!");
  };

  if (formSubmitted === true) {
    return (
      <Modal open={props.isOpen} onClose={props.onModalClose}>
        <CentringBox>
          <SubmittedFormContainer>
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
            <TaskAltIcon
              sx={{ fontSize: "6rem", mt: "1rem", color: "green" }}
            />
            <Typography sx={{ fontFamily: "Fira Sans" }} variant="h5">
              Дякуємо за ваше звернення!
            </Typography>
            <Typography sx={{ fontFamily: "Fira Sans" }} variant="h6">
              Найближчим часом наш менеджер зв'яжеться з вами.
            </Typography>
            <Button
              type="button"
              onClick={() => {
                props.onModalClose();
                setFormSubmitted(false);
              }}
              variant="contained"
            >
              Продовжити
            </Button>
          </SubmittedFormContainer>
        </CentringBox>
      </Modal>
    );
  } else {
    return (
      <Modal open={props.isOpen} onClose={props.onModalClose}>
        <form onSubmit={submitHandler}>
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
                name="name"
                id="filled-name-input"
                label="Ім'я"
                variant="outlined"
                size="small"
                required={true}
              />
              <TextField
                type="text"
                name="company"
                id="filled-name-company"
                label="Назва компанії"
                variant="outlined"
                size="small"
                required={true}
              />
              <TextField
                type="text"
                name="code"
                id="filled-name-code"
                label="Код ЄДРПОУ"
                variant="outlined"
                size="small"
                required={true}
              />
              <TextField
                type="text"
                name="phone"
                id="filled-name-phone"
                label="Телефон"
                variant="outlined"
                size="small"
                required={true}
              />
              <TextField
                type="text"
                name="email"
                id="filled-name-email"
                label="Електронна пошта"
                variant="outlined"
                size="small"
                required={true}
              />
              <FormControl sx={{ width: "100%" }}>
                <InputLabel id="demo-multiple-checkbox-label">
                  Послуги
                </InputLabel>
                <Select
                  labelId="demo-multiple-checkbox-label"
                  id="demo-multiple-checkbox"
                  name="services"
                  multiple
                  value={services}
                  onChange={handleChange}
                  input={<OutlinedInput label="Послуги" />}
                  renderValue={(selected) => selected.join(", ")}
                  MenuProps={MenuProps}
                >
                  {servicesList.map((service) => (
                    <MenuItem key={service} value={service}>
                      <Checkbox checked={services.indexOf(service) > -1} />
                      {/* <Checkbox checked={service === props.service ? true : false} /> */}
                      <ListItemText primary={service} />
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                name="message"
                id="filled-name-comment"
                label="Коментар"
                multiline
                maxRows={3}
                variant="outlined"
                size="small"
              ></TextField>
              <Button type="submit" variant="contained">
                Надіслати
              </Button>
            </FormContainer>
          </CentringBox>
        </form>
      </Modal>
    );
  }
};

export default ServiceContactForm;
