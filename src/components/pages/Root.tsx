import { Outlet } from "react-router-dom"
import BackgroundImage from "../UI/background/BackgroundImage"
import Navbar from "../UI/navigation/Navbar"


const RootLayout = () => {
  return (
    <>
      <Navbar />
      <BackgroundImage />
      <Outlet />
    </>
  )
}

export default RootLayout