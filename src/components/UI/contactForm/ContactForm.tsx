import { Button, TextField, Typography, Box, styled } from "@mui/material";
import { useState } from "react";
import TaskAltIcon from '@mui/icons-material/TaskAlt';
// type Props = {}



const ContactForm = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  const FormContainer = styled(Box)({
    display: "flex",
    flexDirection: "column",
    // background: "#1c92d2",
    background: "linear-gradient(to bottom, #1c92d26b, #1c92d270)",
    padding: "1rem 2rem 1.5rem",
    borderRadius: "15px",
    maxWidth: "400px",
    // gap: 20,
    gap: 15,
  });


  const submitHandler = async (event: any) => {
    // const api = "http://localhost:3030";
    const api = "http://172.19.19.51:3030/email/consultation";
    event.preventDefault();
    setFormSubmitted(true);
    await fetch(api, {
      method: "POST",
      body: JSON.stringify({
        name: event.target.name.value,
        company: event.target.company.value,
        phone: event.target.phone.value,
        email: event.target.email.value,
        message: event.target.message.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).catch((err) => console.log(err));
  };

  if (formSubmitted === true) {
    return (
      <FormContainer sx={{alignItems: "center", textAlign: "center"}}>
        <TaskAltIcon sx={{fontSize: "4rem", mt: "5rem", color: "green"}} />
        <Typography sx={{ fontFamily: "Fira Sans", mt: "1rem" }} variant="h5">
          Дякуємо за ваше звернення!
        </Typography>
        <Typography sx={{ fontFamily: "Fira Sans"}} variant="h6">
          Найближчим часом наш менеджер зв'яжеться з вами.
        </Typography>
      </FormContainer>
    )
  } else {
    return (
      <form onSubmit={submitHandler}>
        <FormContainer>
          <Typography sx={{ fontFamily: "Fira Sans" }} variant="h6">
            Ми відшукаємо оптимальне рішення для вашого бізнесу
          </Typography>
          <TextField
            type="text"
            id="filled-input-name"
            label="Ім'я"
            variant="filled"
            size="small"
            name="name"
            autoComplete="off"
            required={true}
          />
          <TextField
            type="text"
            id="filled-input-company"
            label="Назва компанії"
            variant="filled"
            size="small"
            name="company"
            autoComplete="off"
            required={true}
          />
          <TextField
            type="text"
            id="filled-input-phone"
            label="Телефон"
            variant="filled"
            size="small"
            name="phone"
            autoComplete="off"
            required={true}
          />
          <TextField
            type="text"
            id="filled-input-email"
            label="Електронна пошта"
            variant="filled"
            size="small"
            name="email"
            autoComplete="off"
          />
          <TextField
            id="filled-input-comment"
            label="Ваше звернення"
            multiline
            maxRows={3}
            variant="filled"
            size="small"
            name="message"
            autoComplete="off"
          ></TextField>
          <Button type="submit" variant="contained">
            Надіслати
          </Button>
        </FormContainer>
      </form>
    );
  }

 
};

export default ContactForm;
