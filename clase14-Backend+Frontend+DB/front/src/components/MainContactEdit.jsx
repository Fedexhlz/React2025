import { useState, useEffect } from "react"
import { Form, Button } from "react-bootstrap"
import { useParams,useNavigate } from "react-router-dom"
import axios from "axios"
import { BASE_URL } from "../constants/constants"

const MainContactEdit = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  const initialState = {
    nombre: "",
    apellido: "",
    direccion: "",
    telefono: "",
    imagen: "",
    goles: ""
  }

  const [datos, setDatos] = useState(initialState)

  const handleChange = (e) => {
    const { name, value } = e.target
    setDatos({ ...datos, [name]: value })
  }


  const handleSubmit = async(e) => {
    e.preventDefault()
    //aqui actualizo mis datos a mi DB
    try {
      let response = await axios.put(BASE_URL+id,datos)

      if(response){
        alert("contacto actaulizado correctamente")
        navigate("/contacts")
      }else {
        alert("hubo algun problema")
      }
    } catch (error) {
      console.log(error.message);
    }



  }

  const getDatos = async () => {
    try {
      let response = await axios.get(BASE_URL + id)
      setDatos(response.data[0])
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(() => {
    getDatos()
  }, [])

  return (
    <div>
      <br />
      <h3>Actualiza la Info de tu Contacto</h3>
      <br />
      <Form className="" style={{ width: "50%", margin: "auto" }} onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>nombre</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={datos.nombre} name="nombre" />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>apellido</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={datos.apellido} name="apellido" />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>telefono</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={datos.telefono} name="telefono" />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>direccion</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={datos.direccion} name="direccion" />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>imagen</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={datos.imagen} name="imagen" />
          <br />
        </Form.Group>
        <Form.Group>
          <Form.Label>goles</Form.Label>
          <Form.Control onChange={handleChange} defaultValue={datos.goles} name="goles" />
          <br />
        </Form.Group>
        <Button type="submit" className="btn btn-warning">Actualizar</Button>
      </Form>

      <br />


      <br />
    </div>
  )
}

export default MainContactEdit