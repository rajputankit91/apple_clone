
import React from "react";
import "./navbar.css";

const Navbar = ({ data }) => {

    return (
        <>
            <nav className="nav">
                <div className="wrapper">
                    <ul className="nav-items">
                        {
                            data && data.map((item, index) =>(
                                <li className="nav-item" id={item.id} key={index}>
                                    <a href="" className="nav-link">
                                        <img src={item.img} height="54px" />
                                        <span className="label">{item.title}</span>
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;