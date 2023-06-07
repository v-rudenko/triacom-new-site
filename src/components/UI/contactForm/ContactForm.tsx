import { Button, TextField, Typography, Box, styled } from '@mui/material';

// type Props = {}

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

const ContactForm = () => {
  return (
    <form>
            <FormContainer>
              <Typography sx={{ fontFamily: 'Fira Sans'}} variant="h6">
                Ми відшукаємо оптимальне рішення для вашого
                бізнесу
              </Typography>
                  <TextField
                    type="text"
                    id="filled-name-input"
                    label="Ім'я"
                    variant="filled"
                    size="small"
                  />
              <TextField
                type="text"
                id="filled-name-company"
                label="Назва компанії"
                variant="filled"
                size="small"
              />
              <TextField
                type="text"
                id="filled-name-phone"
                label="Телефон"
                variant="filled"
                size="small"
              />
              <TextField
                type="text"
                id="filled-name-email"
                label="Електронна пошта"
                variant="filled"
                size="small"
              />
              <TextField
                id="filled-name-comment"
                label="Ваше звернення"
                multiline
                maxRows={3}
                variant="filled"
                size="small"
              ></TextField>
              <Button variant="contained">Надіслати</Button>
            </FormContainer>
          </form>
  )
}

export default ContactForm