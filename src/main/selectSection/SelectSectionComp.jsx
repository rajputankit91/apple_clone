
import React, { useState, useEffect } from "react";
import "./selectSec.css"

const SelectSectionComp = () => {
    const [selectData, setSelectData] = useState([]);

    useEffect(() => {
        getSelectData();
    }, [])

    const getSelectData = () => {
        fetch("/api/selectPhones")
            .then((res) => {
                return (
                    res.json()
                );
            })
            .then((data) => setSelectData(data.selectPhones))
            .catch((err) => console.log(err))
    }

    //   console.log(selectData)
    return (
        <>
            <div className="select-content">
                <header className="select-header">
                    <h1>Explore the line-up.</h1>
                    <p>Compare all models</p>
                </header>
            </div>
            <div className="select-galleries">
                <div className="item-container">
                    <ul>
                        {
                            selectData && selectData.map((item, index) => {
                                console.log(item, "itemmmmmmmm")
                                return (
                                    <>
                                        <li className="product-title">
                                            {/* product image */}
                                            <div className="product-image">
                                                <img src={item.img} />
                                            </div>
                                            {/* product color */}
                                            <div className="product-image">
                                                <ul>
                                                    {
                                                        item.color.map((color, index) => {
                                                            return (
                                                                <li>
                                                                    <div style={{ backgroundColor: color,width:"15px",height:"15px",borderRadius:"50%" }}></div>
                                                                </li>
                                                            )
                                                        })
                                                    }
                                                </ul>
                                            </div>
                                        </li>
                                    </>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

        </>
    )
}

export default SelectSectionComp;