import { useEffect, useState } from "react";

const useFetch = ({url}) =>{
    const [fetchData , setFetchData] = useState([]);

    const fetchAllData = async() =>{
        const response = await fetch(url);
        console.log(response);
        const result = await response.json();
        setFetchData(result);
    }

    useEffect(() =>{
        fetchAllData();
    },[url])

    return {fetchData};
}

export default useFetch;