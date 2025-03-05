import { useState } from "react"
import axios from "axios"
import { BASE_URL } from "../constants/constants"
import { useNavigate } from "react-router-dom"

const MainCreateContact = () => {

    const navigate = useNavigate()

    const initialState = {
        nombre:"",
        apellido:"",
        direccion:"",
        telefono:"",
        imagen:"",
        goles:""
    }

    const [datos,setDatos] = useState(initialState)

    const handleChange = (e) =>{
        console.log("disparo change");
        const {name,value} = e.target
        setDatos({...datos,[name]:value})
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        try {
            let response = await axios.post(BASE_URL,{
                nombre:datos.nombre,
                apellido:datos.apellido,
                direccion:datos.direccion,
                telefono:datos.telefono,
                imagen:datos.imagen,
                goles:datos.goles
            }) 

            if (response) {
                alert("contacto creado correctamente")
                navigate("/contacts")
            }
        } catch (error) {
         console.log(error.message);   
        }
    }

  return (
    <div>

        <br /><br />
        <form action="" onSubmit={handleSubmit}>
            <label htmlFor="">nombre</label>
            <input type="text" onChange={handleChange} name="nombre"/>
            <br />
            <label htmlFor="">apellido</label>
            <input type="text" onChange={handleChange} name="apellido"/>
            <br />
            <label htmlFor="">direccion</label>
            <input type="text" onChange={handleChange} name="direccion"/>
            <br />
            <label htmlFor="">telefono</label>
            <input type="text" onChange={handleChange} name="telefono"/>
            <br />
            <label htmlFor="">imagen</label>
            <input type="text" onChange={handleChange} name="imagen"/>
            <br />
            <label htmlFor="">goles</label>
            <input type="text" onChange={handleChange} name="goles"/>
            <br />
    <button type="submit">guardar contacto</button>
            <br />
        </form>
        
        <h3>{datos.nombre}</h3>
        <br /><br />
    </div>
  )
}

export default MainCreateContact