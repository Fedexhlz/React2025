import {Outlet,Navigate} from "react-router-dom"
import useStore from "../store/useStore";

const PrivateRoute = () => {

    const {user} = useStore()

    //const bandera = false;

  return user ? <Outlet/> : <Navigate to={"/movies/login"}/>
}

export default PrivateRoute