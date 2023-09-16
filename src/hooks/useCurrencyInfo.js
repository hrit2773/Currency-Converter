import { useState,useEffect } from "react";

function useCurrencyInfo(currency){
    let [data,setData]=useState({})
    
    useEffect(()=>{
        let api=fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        api.then((res)=>{
            return res.json()
        }).then((jsondata)=>{
            setData(jsondata[currency])
        }).catch(()=>{
            setData({})
        })
        console.log(data)

    },[currency])
    return data
}
export default useCurrencyInfo