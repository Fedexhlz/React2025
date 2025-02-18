import { useState } from "react"
import { useNavigate } from "react-router-dom"
import useStore from "../store/useStore"
import "../css/MainLogin.css"

const MainLogin = () => {

    const { loginUser } = useStore()

    const navigate = useNavigate()

    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()
        if (user === "raul" & pass === "1234") {
            alert("bienvenido jefe")
            navigate("/products")
            loginUser("token")
        } else {
            alert("usuario no encontrado")
        }
        e.target.reset()
    }

    return (
        <div className="mainlogin">
            <form action="" onSubmit={handleSubmit} className="login-form">
                <div className="form-group">
                    <label htmlFor="">usuario</label>
                    <input type="text"
                    onChange={(e) => setUser(e.target.value)}
                    required 
                    value={user}
                    placeholder="Ingresa tu Usuario"
                    />
                    

                </div>
                <div className="form-group">
                    <label htmlFor="">contraseña</label>
                    <input type="password"
                    onChange={(e) => setPass(e.target.value)} 
                    required
                    value={pass}
                    placeholder="Ingresa tu contraseña"
                    />
                    <br />
                </div>
                <button type="submit" className="submit-btn">login</button>
            </form>


            <br /><br />
        </div>
    )
}

export default MainLogin