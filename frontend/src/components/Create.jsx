import {React,useState,useEffect} from "react";
import AxiosInstance from '../components/axios.jsx';
const Create = () =>{
    const [country, setCountry] =useState([])
    console.log(country);
    const getData =()=>{
        AxiosInstance.get('country/').then((res)=>{
            setCountry(res.data)

        })
    }
    useEffect(()=>{
        getData()
    }, [ ])
    return(
        <div>This is the Createpage</div>
    )
}

export default Create