import { Height, Margin } from "@mui/icons-material";
import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string,
  description: string,
  color: string,
  children: JSX.Element
}

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
  // padding: "50px 100px 100px",
  borderRadius: "15px",
  // width: "15%",
  height: "300px",
  flexBasis: "calc(33.333333% - 30px)",
})

const Solution = (props: Props) => {
  return (
    <SolutionBox>
      <IconBox>
        {props.children}
      </IconBox>
      <Typography variant="h5">{props.title}</Typography>
      <Typography>{props.description}</Typography>
      <Button variant="outlined">Переглянути тарифи</Button>
    </SolutionBox>
  );
};

export default Solution;
