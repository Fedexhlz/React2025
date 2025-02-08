// import { useAppContext } from "../context/myContext"
import useStore from "../Store/useStore"

const Nieto4 = () => {

    // const {cambiarNombre,cambiarMail,cambiarTel} = useAppContext()
    const {cambiarNombre,cambiarMail,cambiarTel,color} = useStore()

    const handleSubmit = (e) => {
        e.preventDefault()
        
        //datos se envian a la DB
    }


    return (
        <div className={color ? "bg-dark text-center" : "bg-light text-center"}>
            <br />
            <form action="" onSubmit={handleSubmit}>
                <label htmlFor="">nombre</label>
                <input type="text" onChange={(e)=>cambiarNombre(e.target.value)} name="nombre"/>
                <br />
                <label htmlFor="">mail</label>
                <input type="text" name="mail" onChange={(e)=>cambiarMail(e.target.value)}/>
                <br />
                <label htmlFor="">telefono</label>
                <input type="number" name="tel" onChange={(e)=>cambiarTel(e.target.value)}/>
                <br />
                <button type="submit">guardar</button>
            </form>
            {/* <h3>datos: {datos.nombre} {datos.mail} {datos.tel}</h3> */}

            <br />
        </div>
    )
}

export default Nieto4