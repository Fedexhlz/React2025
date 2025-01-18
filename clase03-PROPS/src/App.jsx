
import './App.css'
import Home from './pages/Home'

function App() {
 
  let nombre = "alvaro"

  let Alumno = {
    nombre:"julian",
    edad:20,
    domicilio:{
      calle:"la rioja",
      numero:1520
    },
    soltero:true
  }

  

  const saludar = () =>{
    console.log("welocme to React 2025");
  }

  return (
    <>
       <Home nombre={nombre} titulo="hola chicos como estan" saludar={saludar} Alumno={Alumno}/> 
    </>
  )
}

export default App
