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
  background: "#F5FAFE",
  padding: "2rem 2rem 1.5rem",
  borderRadius: "15px",
  width: "600px",
  // gap: 20,
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
  const [services, setServices] = useState<string[]>([]);

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
            <FormControl sx={{ width: "100%" }}>
              <InputLabel id="demo-multiple-checkbox-label">Послуги</InputLabel>
              <Select
                labelId="demo-multiple-checkbox-label"
                id="demo-multiple-checkbox"
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
                    <ListItemText primary={service} />
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
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
