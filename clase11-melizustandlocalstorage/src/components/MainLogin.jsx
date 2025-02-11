import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStore from "../store/useStore"

const MainLogin = () => {

    const {loginUser} = useStore()

    const navigate = useNavigate()

    const [user,setUser] = useState("")
    const [pass,setPass] = useState("")


    const handleSubmit = (e) =>{
        e.preventDefault()
        if (user==="raul"& pass==="1234") {
            alert("bienvenido jefe")
            navigate("/products")
            loginUser("token")
        }else {
            alert("usuario no encontrado")
        }
        e.target.reset()
    }

    return (
        <div>
            <br /><br />
            <h3>logueate en nuestra web</h3>
            <br />
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">usuario</label>
                <input type="text" onChange={(e)=>setUser(e.target.value)} required/>
                <br />
                <label htmlFor="">contraseña</label>
                <input type="password" onChange={(e)=>setPass(e.target.value)} required/>
                <br />
                <button type="submit">login</button>
            </form>


            <br /><br />
        </div>
    )
}

export default MainLogin