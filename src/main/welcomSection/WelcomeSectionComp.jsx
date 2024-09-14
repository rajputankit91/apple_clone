
import React from "react";
import "./welcomsec.css";

const WelcomeSectionComp = () => {

    return (
        <>
            <div className="welcome-content">
                <header className="welcome-header">
                    <h1>iPhone</h1>
                    <p>Designed to be loved</p>
                </header>
            </div>
            <div className="welcome-video">
                <video controls autoplay loop>
                    <source src="https://apple.com/105/media/us/iphone/family/2024/cf19f185-dd7e-4350-97ff-e44860713b54/anim/welcome/small_2x.mp4#t=6.695677.mp4" type="video/mp4" />
                </video>
            </div>
        </>
    )
}

export default WelcomeSectionComp;