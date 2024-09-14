
import React from "react";
import "./banner.css";

const Banner = () => {
    return (
        <>
            <div className="bannerContainer">
                <div className="banner-heading">
                    <h2>
                        Take a closer look at
                        <br></br>
                        our latest models.
                    </h2>
                </div>
                <div className="banner-content">
                    <div className="head">
                        <div className="banner-content-heading">
                            <h2 className="headline">
                                A Guided Tour of
                                <br></br>
                                iPhone 16 & iPhone 16 Pro
                            </h2>
                        </div>
                        <div className="banner-image">
                            <a href="">
                                Watch the film
                            </a>
                        </div>
                    </div>
                    <div className="banner-image">
                        <img src="https://www.apple.com/v/iphone/home/bw/images/overview/banner/guided_tour__dna6wcz8ieie_large.jpg" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner;