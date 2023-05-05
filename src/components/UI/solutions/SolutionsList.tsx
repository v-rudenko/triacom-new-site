// type Props = {}

import { Box, styled } from "@mui/material";
import Solution from "./Solution";

const BoxWraper = styled(Box) ({
  margin: "50px 200px",
  textAlign: "center"
})

const StyledBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-evenly",
  flexWrap: "wrap",
  gap: 30,
  // padding: "50px 200px",
  // padding: "50px 15%",
});

const SolutionsList = () => {
  return (
    <BoxWraper>
      <div>
        <h1>Наші Послуги</h1>
      </div>
      <StyledBox>
        <Solution />
        <Solution />
        <Solution />
        <Solution />
        <Solution />
        <Solution />
        <Solution />
        <Solution />
        <Solution />
      </StyledBox>
    </BoxWraper>
  );
};

export default SolutionsList;
