import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [error,setError]=useState(null);
    const [data,setData]=useState(null);
    const [isPending,setPanding]=useState((true));
    useEffect(() => {
        console.log(url + " trying to fetch this url");
        fetch(url)
        .then((response) => {
            if(!response.ok){
                console.log("this is the respond for the fetch");
                console.log(response);
                throw Error("could not fetch data");
            }
             return response.json()})
        .then((data) => {
            setData(data);
            setPanding(false);
        })
        .catch((err) => {
            console.log(err.message);
        });
    },[]);
    return {data, isPending, error};
}

export default useFetch;
