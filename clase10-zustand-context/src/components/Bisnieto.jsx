//import { useAppContext } from "../context/myContext"
import useStore from "../Store/useStore"

const Bisnieto = () => {

//  
    const {nombre,mail,tel} = useStore()

    return (
        <div className="text-center">
            <br />
            <h3>Datos en mi BISNIETO</h3>
            <br />
            <li>{nombre}</li>
            <li>{mail}</li>
            <li>{tel}</li>
            <br />
        </div>
    )
}

export default Bisnieto