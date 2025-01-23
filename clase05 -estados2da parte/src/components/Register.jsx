import {useState} from 'react'
import { Form, Button } from "react-bootstrap"
import ShowUsers from './ShowUsers'


const Register = () => {

    let initialState = {
        nombre:"",
        apellido:"",
        edad:null,
        mail:""
    }

    const [datos,setDatos] = useState(initialState)
    const [usuarios,setUsuarios] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault()
        setUsuarios([...usuarios,datos])
        e.target.reset()
        setDatos(initialState)
    }

    const handleChange = (e) =>{
        console.log(e);
        setDatos({...datos,[e.target.name]:e.target.value})
    }

    // let user ={
    //     nombre:roxana,
    // }

    return (
        <div>
            <br />
            <h3>Registrate</h3>
            <br />
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>nombre</Form.Label>
                    <Form.Control type="text" placeholder="ingresa tu nombre" onChange={handleChange} name="nombre"
                    />
                    <br />
                    <Form.Label>apellido</Form.Label>
                    <Form.Control type="text" placeholder="ingresa tu apellido" onChange={handleChange} name="apellido" required/>
                    <br />
                    <Form.Label>edad</Form.Label>
                    <Form.Control type="number" placeholder="ingresa tu edad" onChange={handleChange} name="edad"/>
                    <br />
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="mail" placeholder="ingresa tu mail" onChange={handleChange} name="mail"/>
                    <br />
                    <Button type="submit" >guardar</Button>
                </Form.Group>

            </Form>
            <br />
            <ShowUsers usuarios={usuarios}/>


            <br />
        </div>
    )
}

export default Register



