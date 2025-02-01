import { useState } from "react"
import Footer from "../components/Footer"
import Header from "../components/Header"
//import MainHome from "../components/MainHome"
import Characters from "../components/Characters"


const Home = () => {

  const [value,setValue] = useState("")

  const getValue = (valor) =>{
    //console.log(valor);
    setValue(valor)
  }


  return (
    <div>
        <Header getValue={getValue}/>
        <Characters value={value}/>
        <Footer />
    </div>
  )
}

export default Home