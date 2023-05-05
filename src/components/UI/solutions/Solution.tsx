import { Box, styled, Typography } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";

// type Props = {}

const IconBox = styled(Box)({
  background: "red",
  borderRadius: "50%",
  width: "50px",
  height: "50px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
});

const SolutionBox = styled(Box) ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#D6E6F2",
  padding: "50px 100px 100px",
  borderRadius: "15px"
})

const Solution = () => {
  return (
    <SolutionBox>
      <IconBox>
        <LanguageIcon />
      </IconBox>
      <Typography variant="h5">Інтернет</Typography>
      <Typography>Просто якийсь дуже довгий опис</Typography>
    </SolutionBox>
  );
};

export default Solution;
