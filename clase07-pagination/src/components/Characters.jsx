import { useEffect, useState } from "react"
import Character from "./Character"
import { BASE_URL } from "../constants/constants"
import { Row } from "react-bootstrap"
import ClipLoader from "react-spinners/ClipLoader";
import { Pagination } from "react-bootstrap";
import Paginate from "./Paginate";


const Characters = () => {

    //then()
    //async await
    const [personajes, setPersonajes] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [nombre, setNombre] = useState("")
    const [info,setInfo] = useState({})



    const getCharacters = async () => {

        try {

            let response = await fetch(BASE_URL)
            let respuesta = await response.json()
            //console.log(respuesta.results);
            setPersonajes(respuesta.results)
            setInfo(respuesta.info)
            setLoading(false)
            setError(false)

        } catch (error) {
            console.log(error);
            setError(true)
            setPersonajes([])
            setLoading(false)
        }

    }


    const handleClick = async () => {
        //https://rickandmortyapi.com/api/character/?name=rick
        let response = await fetch(`${BASE_URL}/?name=${nombre}`)
        let datos = await response.json()
        //console.log(datos);
        setPersonajes(datos.results)
        setInfo(datos.info)
        setNombre("")
    }

    const handlePages = async(newPage) =>{
        console.log(newPage);
        //https://rickandmortyapi.com/api/character?page=2
        let response = await fetch(`${BASE_URL}/?${newPage}`)
        let datos = await response.json()
       
        setPersonajes(datos.results)
        setInfo(datos.info)
    }


    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <div>
            <br />
            <h2>Aqui van mis personajes</h2>
            <br />
            <br />
            <label htmlFor="">busca tu personaje</label>
            <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
            <button type="button" onClick={handleClick}>buscar</button>
            <br />
            <br />
            <Row>
                {loading ? <ClipLoader

                    loading={loading}

                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                /> : personajes.map(personaje => <Character key={personaje.id} {...personaje} />)}
            </Row>
            <br />
            <Paginate {...info} handlePages={handlePages}/>







        </div>
    )
}

export default Characters