import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import axios from "axios"
import { BASE_URL_USERS } from "../constants/constants"
import Swal from 'sweetalert2'


const MainLogin = () => {


    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")


    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let response = await axios.get(BASE_URL_USERS)
            console.log(response.data);
            //filter 
            //va recorriendo el array y me genera un objeto con los valores que coincidieron
            //find
            //va recorriendo y al 1er valor que encuentra devuelve un true 

            let FoundUser = response.data.find(usuario => usuario.name === user && usuario.password === pass)
            //console.log(FoundUser);

            if (FoundUser) {
                if (FoundUser.rol === "admin") {
                    Swal.fire({
                        title: 'bienvenido BOSS',
                        text: 'Do you want to continue',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                    navigate("/dashBoardAdmin/")
                } else if (FoundUser.rol === "user") {
                    alert("Welcome user " + FoundUser.name)
                    navigate("/contacts")
                } else {
                    alert("rol no encontrado")
                }
            } else {
                alert("usuario no encontrado")
            }

        } catch (error) {
            console.log(error.message);
        }
        //aqui harcodeamos los valores de mi DB
        // if (user==="raul"& pass === "1234") {
        //     alert("bienvenido jefe")
        //     navigate("/contacts")
        //     //loginUser("token")
        // }else {
        //     alert("usuario no encontrado")
        // }
        e.target.reset()
    }


    return (
        <div>
            <br /><br />
            <h3>logueate en nuestra web</h3>
            <br />
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">usuario</label>
                <input type="text" onChange={(e) => setUser(e.target.value)} required />
                <br />
                <label htmlFor="">contraseña</label>
                <input type="password" onChange={(e) => setPass(e.target.value)} required />
                <br />
                <button type="submit">login</button>
            </form>
            <br />
            <Link to={"/register"}>Registrate en nuestra web</Link>
            <br /><br />
        </div>
    )
}

export default MainLogin