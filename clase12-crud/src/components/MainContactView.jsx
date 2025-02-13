import { useEffect, useState } from "react"
import { useParams,Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/constants"
import {Card} from "react-bootstrap"
import "../css/MainContactView.css"

const MainContactView = () => {

    const {id} = useParams()

    const [datos,setDatos] = useState({})

    const getData = async () =>{
        let response = await axios.get(BASE_URL+id)
        setDatos(response.data)

    }

    useEffect(()=>{
        getData()
    },[])

  return (
    <div>
        <br /><br />
    <Card className="card-contact">
        <br />
        <Card.Title className="fw-bold">#{datos.id}</Card.Title>
        <Card.Img className="card-img img-fluid" src={datos.imagen}/>
        <Card.Body>
            <Card.Text className="fw-bold">Nombre Completo: <span className="text-primary">{datos.nombre} {datos.apellido}</span></Card.Text>
            <Card.Text className="fw-bold">Direccion: <span className="text-primary">{datos.direccion}</span> </Card.Text>
            <Card.Text className="fw-bold">Telefono: <span className="text-primary">{datos.telefono}</span> </Card.Text>
            <Card.Text className="fw-bold">Goles Totales: <span className="text-danger"> {datos.goles}</span></Card.Text>
        </Card.Body>
        <Link to="/contacts" className="btn btn-warning">volver</Link>
    </Card>



        <br /><br />
    </div>
  )
}

export default MainContactView