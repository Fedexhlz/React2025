
import './App.css'
import Despedirme from './Despedirme';
import Header from './Header';
import Saludar from "./Saludar"
import {Componente1} from "./Componente1"

function App() {


  console.log("React 2025");


  console.log("muestra 2 veces");


  let profesor = "raul politi"

  //document.getElementById("caja").innerHTML = profesor

  return (
    <>
      <Header />
      <br />
      <Saludar />
      <br />
      <h3>{profesor}</h3>
      <h6>suma de 2 + 4 = {2 + 4}</h6>
      <br />
      <Componente1/>

      <Despedirme />
    </>
  )
}

export default App
