import { useEffect } from "react";
import { useLocation } from "react-router";

export default function ScrollToTopPage(){
    const location = useLocation()
    // console.log(location)
    
    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0,
            behavior:"smooth"
        })
    },[location])
    return null
}