
import React from "react";
import Ribbon from "./ribben/Ribbon";
import "./main.css"
import WelcomeSectionComp from "./welcomSection/WelcomeSectionComp";
import SelectSectionComp from "./selectSection/SelectSectionComp";

const MainComp = () =>{

    return (
        <>
        <Ribbon />
        <WelcomeSectionComp />
        <SelectSectionComp />
        </>
    )
}

export default MainComp;