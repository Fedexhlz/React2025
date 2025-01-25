import { useState, useEffect } from "react";
import { Button } from "react-bootstrap"
import Hijo from "./Hijo";


const MainHome = () => {

    let [contador, setContador] = useState(0)
    const [nombre, setNombre] = useState("")
    const [show,setShow] = useState(false)
   

    const handleIncrement = () => {

        if (contador >= 9) {
            setContador(0)
        } else {
            setContador(contador + 1)
        }
        console.log("sumo el contador: "+contador);
    }

    const handleDecrement = () => {
        setContador(contador - 1)
        console.log("resto el contador: "+contador);
    }

    useEffect( ()=>{
        console.log("componente MainHome montado");
    } , [])//watcher observer

    useEffect(()=>{
        console.log("cambia mi estado NOMBRE"+nombre);
    },[nombre])

    // useEffect(() => {
    //     setInterval(saludar,1000)
    
    //   return () => {
    //     clearInterval()
    //   }
    // }, [third])
    

    return (
        <div>
            <br />

            <h3>UseEffect</h3>
            <br />
            <Button type="button" onClick={handleIncrement}>+</Button>
            <button type="button" onClick={handleDecrement}>-</button>
            <br />

            <h3>contador: {contador}</h3>
            <br />
            <input type="text" onChange={(e)=>setNombre(e.target.value)}/>
            <button>agregar</button>
            <br />
            <h3>nombre: {nombre}</h3>
            <br />
            <button onClick={()=>setShow(!show)}>{show ? "ocultar" : "mostrar"}</button>
            {show && <Hijo/>}
        </div>
    )
}
export default MainHome
