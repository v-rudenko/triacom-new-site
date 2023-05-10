import React from "react";

import { Box, Typography, styled } from "@mui/material";
// type Props = {}

const SeparatingBox = styled(Box) ({
  display: "flex",
  flexDirection: "column",
  gap: 15,
  margin: "10px 100px"
  // di
  // gap: "20px"
})

const ContactList = () => {
  return (
    <SeparatingBox>
      {" "}
      <Typography variant="h4">Контакти</Typography>
      <Box>
        <Typography variant="h6">Для підключення послуг:</Typography>
        <Box>
          <Typography>(044) 591-11-44</Typography>
          <Typography>sales@triacom.ua</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">Обслуговування абонентів:</Typography>
        <Box>
          <Typography>(044) 591-11-44</Typography>
          <Typography>ao@triacom.ua</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">Технічна підтримка:</Typography>
        <Box>
          <Typography>(044) 591-0-591</Typography>
          <Typography>support@triacom.ua</Typography>
        </Box>
      </Box>
      <Box>
        <Typography variant="h6">Наш офіс:</Typography>
        <Box>
          <Typography>(044) 591-11-11</Typography>
          <Typography>info@triacom.ua</Typography>
          <Box>
            <Typography>Адреса:</Typography>
            <Typography>04080, м. Київ вул. Тульчинська, 6</Typography>
          </Box>
        </Box>
      </Box>
    </SeparatingBox>
  );
};

export default ContactList;
