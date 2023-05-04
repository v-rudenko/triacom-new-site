import { Box, styled } from "@mui/material";
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
})

const Solution = () => {
  return (
    <SolutionBox>
      <IconBox>
        <LanguageIcon />
      </IconBox>
      <h4>Інтернет</h4>
    </SolutionBox>
  );
};

export default Solution;
