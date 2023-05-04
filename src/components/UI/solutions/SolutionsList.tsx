// type Props = {}

import { Box, styled } from "@mui/material";
import Solution from "./Solution";

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  margin: "50px 200px"
});

const SolutionsList = () => {
  return (
    <StyledBox>
      <div>
        <h1>Наші Послуги</h1>
        <Solution />
      </div>
    </StyledBox>
  );
};

export default SolutionsList;
