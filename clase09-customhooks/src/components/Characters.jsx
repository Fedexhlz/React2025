import { useState } from "react"
import Character from "./Character"
import { BASE_URL } from "../constants/contants"
import { Row } from "react-bootstrap"
import ClipLoader from "react-spinners/ClipLoader";
//import { Pagination } from "react-bootstrap";
import Paginate from "./Paginate";
import { URL_CHARACTER } from "../constants/contants";
import { useFetch } from "../customHooks/useFetch";


const Characters = ({value}) => {
    
    

    //estado url tiene dentro "character"
    const [url,setUrl] = useState(URL_CHARACTER)
    
    const [data,loading,error] = useFetch(url)

    //console.log(data);

    const {info,results:personajes} = data
    //console.log(results);



    // const handleValue = async () => {
    //     console.log("ejecuto handleValue");
    //     //https://rickandmortyapi.com/api/character/?name=rick
    //     let response = await fetch(`${BASE_URL}/?name=${value}`)
    //     let datos = await response.json()
    //     console.log(datos);
    //     setPersonajes(datos.results)
    //     setInfo(datos.info)
    //     setNombre("")
    // }

    const handlePages = async(newPage) =>{
        //console.log(newPage);
       

                         //characater       //page=2
        const newUrl = `${URL_CHARACTER}/?${newPage}`
        setUrl(newUrl)
    }


    return (
        <div>
            <br />
            <h2>Aqui van mis personajes</h2>
            <br />
            <br />

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