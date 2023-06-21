import React from "react";
import { Route, Routes } from "react-router-dom";
import Voip from "../voip/Voip";
import VoiceSolutions from "./VoiceSolutionsList";
import BackgroundImage from "../../../UI/background/BackgroundImage";
import VirtualPbx from "../virtual_pbx/VirtualPbx";

// type Props = {}

const Voice = () => {
  return (
    <>
    <BackgroundImage variant="green" />
      <Routes>
        <Route path="/" element={<VoiceSolutions />}></Route>
        <Route path="/voip" element={<Voip />}></Route>
        <Route path="/virtual-pbx" element={<VirtualPbx />}></Route>
      </Routes>
    </>
  );
};

export default Voice;
