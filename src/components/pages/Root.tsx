import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import BackgroundImage from "../UI/background/BackgroundImage";
import Navbar from "../UI/navigation/Navbar";
import { ScrollRestoration } from "react-router-dom";

const RootLayout = () => {
  useEffect(() => {
    var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/645d3540ad80445890ec7172/1h061g118";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();
  }, [])
  
  return (
    <>
      <Navbar />
      <BackgroundImage />
      <ScrollRestoration />
      <Outlet />
    </>
  );
};

export default RootLayout;
