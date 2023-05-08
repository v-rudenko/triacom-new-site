import { Height, Margin } from "@mui/icons-material";
import { Box, Button, styled, Typography } from "@mui/material";
import React from "react";

type Props = {
  title: string;
  description: string;
  color: string;
  children: JSX.Element;
};

const Solution = (props: Props) => {
  const IconBox = styled(Box)({
    background: `${props.color}`,
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    margin: "20px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  });

  const SolutionBox = styled(Box)({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-evenly",
    backgroundColor: "#D6E6F2",
    // padding: "50px 100px 100px",
    borderRadius: "15px",
    // width: "15%",
    height: "300px",
    flexBasis: "calc(33.333333% - 30px)",
  });
  return (
    <SolutionBox>
      <Box>
        <IconBox>{props.children}</IconBox>
        <Typography variant="h6">{props.title}</Typography>
      </Box>
      <Typography>{props.description}</Typography>
      <Button variant="outlined">Переглянути тарифи</Button>
    </SolutionBox>
  );
};

export default Solution;
