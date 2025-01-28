import {useEffect,useState} from "react"
import Character from "./Character"
//import { BASE_URL } from "../constants/constants";
import {Row} from "react-bootstrap"
import ClipLoader from "react-spinners/ClipLoader";



const Characters = () => {

    //then()
    //async await
    const [personajes,setPersonajes] = useState([])
    const [loading,setLoading] = useState(true)
    const [error,setError] = useState(false)
    const [apellido,setApellido] = useState("")
    
   
   

    const getCharacters = async () =>{

        try {

            let response = await fetch("https://rickandmortyapi.com/api/character") 
            let respuesta = await response.json()
            console.log(respuesta.results);
            setPersonajes(respuesta.results)
            setLoading(false)
            setError(false)

        } catch (error) {
            console.log(error);
            setError(true)
            setPersonajes([])
            setLoading(false)
        }
       
    }

    useEffect(()=>{
        getCharacters()
    },[])

    return (
        <div>
            <br />
            <h2>Aqui van mis personajes</h2>
            <br />
            <input type="text" onChange={(e)=>setApellido(e.target.value)}/>
           
            <Row>
            {loading ? <ClipLoader
       
        loading={loading}
        
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      /> : personajes.map(personaje => <Character key={personaje.id} {...personaje}/>)}
            </Row>
            
            

            



        </div>
    )
}

export default Characters