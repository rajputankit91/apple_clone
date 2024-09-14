
import React from "react";
import Ribbon from "./ribben/Ribbon";
import "./main.css"
import WelcomeSectionComp from "./welcomSection/WelcomeSectionComp";
import SelectSectionComp from "./selectSection/SelectSectionComp";
import Banner from "./bannerSection/bannerSection";

const MainComp = () =>{

    return (
        <>
        <Ribbon />
        <WelcomeSectionComp />
        <SelectSectionComp />
        <Banner />
        </>
    )
}

export default MainComp;