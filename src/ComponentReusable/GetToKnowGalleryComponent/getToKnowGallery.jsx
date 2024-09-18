import { useState, useEffect } from "react";
import './getToKnowGallery.css';
import { Image } from "antd";
import useFetch from "../../FetchResuableComp/fetch";

const GetToKnownGalleryComp = ({fetchUrl, title}) => {
    // const [gallery, setGallery] = useState([]);
    // console.log(gallery);//
    
    

    const {fetchData} = useFetch({url:fetchUrl});
    console.log(fetchData);

    // useEffect(() =>{
    //     setGallery(fetchData);
    // },[])
        
    
    return (
        <div className="gallery-main-outer-div">
            <div className="gallery-outer-inner-div">
                <h1>{title}</h1>
            </div>
            {/* <div className="gallery-Main-Container">
                {gallery.map((item) => (
                    <div className="gallery-inner" key={item.id}>
                        <div>
                            <Image src={item.url} preview={false} className="img"/>
                            <h3 style={{ color: item.color}} >{item.subTitle}</h3>
                        </div>
                        <div className="text-container">
                            <h1 style={{ color: item.color }}>{item.title}</h1>
                            <h1 style={{ color: item.color }}>{item.title1}</h1>
                        </div>
                    </div>
                ))}
            </div> */}
        </div> 
    );
}

export default GetToKnownGalleryComp;
