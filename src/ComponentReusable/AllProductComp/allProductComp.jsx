import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import HeaderFile from "../../Home/Header/header";
// import useFetch from "../../FetchResuableComp/fetch";

const AllProductComponentFile = () => {
    const {productName} = useParams();
    // console.log("paramssss" ,params);
    const [allProductData, setAllProductData] = useState([]);

    useEffect(() => {
        
        const fetchData = async () => {
            const response = await fetch(`/api/${productName}`);
            console.log(response);
            const result = await response.json();
            console.log("dataaaaa" , result);
            setAllProductData(result[productName]);
            
            
            // switch (device) {
            //     case 'iphone':
            //         apiUrl = '/api/iPhoneGalleryGetToKnows';
            //         break;
            //     case 'mac':
            //         apiUrl = '';
            //         break;
            //     case 'ipad':
            //         apiUrl = '';
            //         break;
            // }
        };
        fetchData();
    }, [productName]); 

    return (
        <div style={{marginTop:'50px'}}>
            <HeaderFile />
            {allProductData.map((itm) =>{
                return(
                    <>
                        <h1>{itm.title}</h1>
                    </>
                )
            })} 
            {/* <h1>Hello</h1> */}
        </div>
    );
};

export default AllProductComponentFile;


// use param , se data kese le 
// iphone hai , imac hai kese fetch kroge 