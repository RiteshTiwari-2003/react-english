import {useEffect,useState} from "react";
function useCurrencyInfo(currency){
    const [data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahemed0/currency-api@1/latest/currencies/${currency}.json`).then((res)=>{res.json()}).then((res)=>{setData(res[currency])})
    },[currency])
    console.log(data);
    return data;

}
export default useCurrencyInfo