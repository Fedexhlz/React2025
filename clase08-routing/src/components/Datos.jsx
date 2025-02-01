import { useParams,useNavigate } from "react-router-dom"
import Header from "./Header"
import Footer from "./Footer"

const Datos = () => {

    let {id} = useParams()

    let navigate = useNavigate()

    const handleClick = () =>{
        // nos logueabamos y recien navegamos a nuestra pagina de CRUD
        //window.location.href = "/register"
        navigate("/register")
    }

    const handlelogin = () =>{
        window.location.href = "/login"
    }

  return (
    <>
    <Header/>
    <div>
        <br />
    <h3>los datos que vienen en mi ruta es: {id}</h3>

        <br />
        <br />
        <button onClick={handleClick}>navegar a Register</button>
        <button onClick={handlelogin}>login</button>
    </div>
    <Footer />
    </>
    
  )
}

export default Datos