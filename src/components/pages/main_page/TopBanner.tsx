import { Box, styled } from "@mui/material"

import CabbleImage from "./images/cabbles2.jpg"

import classes from "./TopBanner.module.scss"

const TopBannerBox = styled(Box) ({
  height: "300px",
  width: "100vw",
  // border: '2px solid red',
  marginTop: "1px",
})

const TopBanner = () => {
  return (
    <TopBannerBox><img className={classes.image} src={CabbleImage}></img></TopBannerBox>
  )
}

export default TopBanner