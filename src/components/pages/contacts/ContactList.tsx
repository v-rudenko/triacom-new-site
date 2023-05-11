import React from "react";

import { Box, Typography, styled } from "@mui/material";

import PhoneIcon from "@mui/icons-material/Phone";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

// type Props = {}

const SeparatingBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  margin: "10px 100px",
  // di
  // gap: "20px"
});

const PhoneNumberBox = styled(Box)({
  display: "flex",
  gap: 5,
});

const ContactList = () => {
  return (
    <SeparatingBox>
      {" "}
      <Typography variant="h4">Контакти</Typography>
      <Box>
        <Typography variant="h6">Для підключення послуг:</Typography>
        <Box>
          <Box>
            <PhoneNumberBox>
              <PhoneIcon />
              <Typography>(044) 591-11-44</Typography>
            </PhoneNumberBox>
          </Box>
          <PhoneNumberBox>
            <EmailOutlinedIcon />
            <Typography>sales@triacom.ua</Typography>
          </PhoneNumberBox>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">Обслуговування абонентів:</Typography>
        <Box>
          <PhoneNumberBox>
            <PhoneIcon />
            <Typography>(044) 591-11-44</Typography>
          </PhoneNumberBox>
          <PhoneNumberBox>
            <EmailOutlinedIcon />
            <Typography>ao@triacom.ua</Typography>
          </PhoneNumberBox>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">Технічна підтримка:</Typography>
        <Box>
          <PhoneNumberBox>
            <PhoneIcon />
            <Typography>(044) 591-0-591</Typography>
          </PhoneNumberBox>
          <PhoneNumberBox>
            <EmailOutlinedIcon />
            <Typography>support@triacom.ua</Typography>
          </PhoneNumberBox>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">Наш офіс:</Typography>
        <Box>
          <PhoneNumberBox>
            <PhoneIcon />
            <Typography>(044) 591-11-11</Typography>
          </PhoneNumberBox>
          <PhoneNumberBox>
            <EmailOutlinedIcon />
            <Typography>info@triacom.ua</Typography>
          </PhoneNumberBox>

          <Box>
            <PhoneNumberBox>
              <HomeWorkOutlinedIcon />
              <Typography sx={{ fontWeight: "500" }}>Адреса:</Typography>
              <Typography>04080, м. Київ вул. Тульчинська, 6</Typography>
            </PhoneNumberBox>
          </Box>
        </Box>
      </Box>
    </SeparatingBox>
  );
};

export default ContactList;
