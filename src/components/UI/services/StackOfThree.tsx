import { Divider, Stack, Typography, styled, Box } from '@mui/material';
import React from 'react';

import LocationOnIcon from '@mui/icons-material/LocationOn';
import CableIcon from '@mui/icons-material/Cable';
import PersonIcon from '@mui/icons-material/Person';
import WorkIcon from '@mui/icons-material/Work';

// type Props = {}

const StackItem = styled(Box)({
  // padding: "40px 70px",
  display: 'flex',
  alignItems: "center",
  // maxWidth: "400px"
});

const StackHeading = styled(Typography) ({
  fontWeight: 700,
  fontSize: "25px",
  lineHeight: "30px",
  color: "#0B132A"
})

const StackDescription = styled(Typography) ({
  fontWeight: 400,
  fontSize: "20px",
  lineHeight: "30px",
  color: "#4F5665"
})

const IconBox = styled(Box)({
  background: "#8CC5F9",
  borderRadius: "50%",
  width: "60px",
  height: "60px",
  display: "flex",
  margin: "20px",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const StackOfThree = () => {
  return (
    <Stack
        direction="row"
        justifyContent={"space-evenly"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={2}
        sx={{ maxHeight: "200px", padding: "40px 100px" }}
      >
        <StackItem>
          <IconBox><PersonIcon sx={{ color: "#F5FAFE" }} /></IconBox>
          <Box>
            <StackHeading>900+</StackHeading>
            <StackDescription>Вдячних клієнтів</StackDescription>
          </Box>
        </StackItem>
        <StackItem>
          <IconBox><CableIcon sx={{ color: "#F5FAFE" }} /></IconBox>
          <Box>
            <StackHeading>1000+</StackHeading>
            <StackDescription>Кілометрів оптичного зв'язку </StackDescription>
          </Box>
        </StackItem>
        <StackItem>
          <IconBox><WorkIcon sx={{ color: "#F5FAFE" }} /></IconBox>
          <Box>
            <StackHeading>50+</StackHeading>
            <StackDescription>Бізнес-центрів підключено</StackDescription>
          </Box>
        </StackItem>
      </Stack>
  )
}

export default StackOfThree