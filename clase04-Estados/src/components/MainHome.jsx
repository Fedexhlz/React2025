import { Button } from "react-bootstrap"
import { useState } from "react"
import Register from "./Register"




const MainHome = () => {
    //estados individuales
    //estado 
    const [num, setNum] = useState(0)
    //estado para guardar un apellido
    const [apellido, setApellido] = useState("")
    const [show,setShow] = useState(true)




    let initialState = {
        nombre:"roberto",
        apellido:"carlos",
        edad:50
    }

    const [persona,setPersona] = useState(initialState)

    // let resultado = useState("alvaro")
    // console.log(resultado);

    // let nombre = resultado[0]
    // console.log(nombre);

    // let cambioNombre = resultado[1];

    let perritos = ["firu", "lazy"]

    //destructurar 
    const [firu, lazy] = perritos



    //first -> el geter y el seter 
    //second -> el valor inicial
    //const [first, setfirst] = useState(second)



    // let numero = 10;
    //console.log(numero);

    const handleClick = () => {

        // numero = numero + 20
        // //console.log(numero);
        // cambioNombre(numero+20)
        setNum(num + 50)
    }

    const handleApellido = () => {
        setApellido("Olivares")
    }

    const handleRegister = () =>{
        //toogle button
        setShow(!show)
    }

    return (
        <div>
            <br />

            <Button type="button" onClick={handleClick}>sumar 50</Button>
            <button type="button" onClick={handleApellido}>cambiar Apellido</button>
            <h3 className="text-info text-center">numero: {num}</h3>
            <br />
            <h3>apellido: {apellido}</h3>
            <br />
            <button type="button" onClick={handleRegister}>{show===false ? "mostrar Registro" : "ocultar registro"}</button>
            <br /><br />

            <h3>nombre: {persona.nombre}</h3>
            <h3>apellido: {persona.apellido}</h3>
            <h3>edad: {persona.edad}</h3>
            <br /><br />
            {/* {show===true ?  <Register /> : null} */}
            {show && <Register persona={persona}/>}
            <br />
        </div>
    )
}

export default MainHome








