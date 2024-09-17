
import React from "react";
import Ribbon from "./ribben/Ribbon";
import "./main.css"
import WelcomeSectionComp from "./welcomSection/WelcomeSectionComp";
import SelectSectionComp from "./selectSection/SelectSectionComp";
import Banner from "./bannerSection/bannerSection";
import GetToKnownI from "./GetToKnownIPhone/GetToKnownIPhone";
import Essential from "./EssentialFile/Essential";
import FooterFile from "../../Home/Footer/footer";
// import GetToKnownGalleryComp from "../../ComponentReusable/GetToKnowGalleryComponent/getToKnowGallery";


const MainComp = () =>{

    return (
        <>
            <Ribbon />
            <WelcomeSectionComp />
            <GetToKnownI />
            {/* <SelectSectionComp />  */}
            {/* <GetToKnownGalleryComp /> */}
            <Banner /> 
            <Essential />
            <FooterFile />
        </>
    )
}

export default MainComp; 