import {useState,useEffect} from "react"
import axios from "axios"
import { BASE_URL } from "../constants/contants"


export const useFetch = (endpoint) =>{

    //endpoint seria (character,location,episode)

    const [data,setData] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)

    const getData =  () =>{

        try {
            axios.get(`${BASE_URL}${endpoint}`)
            .then(resp=>{
                setData(resp.data)
                setLoading(false)
                setError(false)
        })
        } catch (err) {
            setError(true)
            console.log(err);
            setData([])
            setLoading(false)
        }
        

        // fetch(`${BASE_URL}${endpoint}`).then(resp=> resp.json()).then(result=>setData(result))
    }

    useEffect( ()=>{
        getData()
    } , [endpoint] )

    return [data,loading,error]
}

