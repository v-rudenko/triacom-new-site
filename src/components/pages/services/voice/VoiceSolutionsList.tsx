// import React from 'react'

import { Box, Button, Typography, styled } from "@mui/material";
import VoiceSolution from "./VoiceSolution";

// type Props = {}

const WrapperBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: 20,
  gap: 20
});

const SolutionsBox = styled(Box)({
  display: "flex",
  gap: 50,
  // marginTop: 50
});

const VoiceSolutionsList = () => {
  return (
    <WrapperBox>
      <Typography variant="h3">Телефонія від Triacom</Typography>
      <Typography variant="h6" >Ми пропонуємо різні рішення, залежно від потреб вашої компанії</Typography>
      <SolutionsBox>
        <VoiceSolution
          title="IP-Телефонія"
          description="Універсальне рішення для будь-якої компанії"
          path="/voice/voip"
        />
        <VoiceSolution
          title="ISDN-Телефонія"
          description="Рішення для компаній, що мають власну АТС, та потребують великої кількості ліній"
          path="/voice/voip"
        />
        <VoiceSolution
          title="Віртуальна АТС"
          description="Я не придумав, що тут написати"
          path="/voice/virtual-pbx"
        />
      </SolutionsBox>
      <Typography variant="h4">Не знаєте що обрати?</Typography>
      <Typography variant="h6">Наші менеджери допоможуть знайти найоптимальніше рішення для вашої компанії</Typography>
      <Button size="large" variant="contained">Замовити консультацію</Button>
    </WrapperBox>
  );
};

export default VoiceSolutionsList;
