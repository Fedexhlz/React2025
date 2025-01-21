import {Form,Button} from "react-bootstrap"
import { useState } from "react";

const Register = (props) => {

    // console.log(props);
    //estados individuales
    const [nombre,setNombre] = useState("")
    const [ape,setApe] = useState("")
    const [edad,setEdad] = useState(null)

    //array con usuarios
    const [users,setUsers] = useState([])

    // let {nombre,apellido,edad} = props.persona
    const [mostrar, setMostrar] = useState(false)

    let user = {
        nombre:"lorena",
        apellido:"perez",
        edad:30,
        
    }

    const {usuario,setUsuario} = useState(user)


    const handleSubmit =(e) =>{
        e.preventDefault()
       
    }

    // const handleNombre = (event) =>{
    //     console.log(event.target.value);
    //     setNombre(event.target.value)
    // }
   const handleApellido = (e) =>{
    setApe(e.target.value)
   }
   const handleEdad = (e) =>{
    setEdad(e.target.value)
   }

  return (
    <div>
        <br />
        <Form onSubmit={handleSubmit}>
            <Form.Label>nombre</Form.Label>
            <Form.Control placeholder="ingresa tu nombre" onChange={(e)=>setNombre(e.target.value)}/>
            <br />
            <Form.Label>apellido</Form.Label>
            <Form.Control placeholder="ingresa tu nombre" onChange={handleApellido}/>
            <br />
            <Form.Label>edad</Form.Label>
            <Form.Control placeholder="ingresa tu nombre" onChange={handleEdad}/>
            <br />
            <Button type="submit" >guardar</Button>
        </Form>
        <br />

        <h3>{nombre} {ape} {edad}</h3>
    </div>
  )
}

export default Register