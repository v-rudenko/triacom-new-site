import { Box, Button, Typography } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import { styled } from "@mui/system";
// import React from "react";
import { Link } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  path: string;
  image: string
};

const SolutionBox = styled(Box)({
  width: "400px",
  height: "400px",
  border: "1px solid green",
  borderRadius: "20px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: 20,
  gap: 20,
  textAlign: "center",
  background: "#99ddcc40"
  
});

const ImageBox = styled(Box) ({
  width: "300px",
  height: "200px",
  // border: "1px solid black"
})

const DescriptionBox = styled(Box) ({
  height: "50px"
})

const VoiceSolution = (props: Props) => {
  return (
    <SolutionBox>
      <Typography variant="h6">{props.title}</Typography>
      <ImageBox><img height="200px" src={props.image} alt="" /></ImageBox>
      <DescriptionBox><Typography>{props.description}</Typography></DescriptionBox>
      <Link to={props.path}><Button variant="contained">Докладніше</Button></Link>
    </SolutionBox>
  );
};

export default VoiceSolution;
