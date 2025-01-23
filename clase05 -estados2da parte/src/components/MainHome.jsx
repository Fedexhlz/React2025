import {useState} from "react"



const MainHome = () => {

let initialState = ["paco","sultan","firulais"]

  const [perritos,setPerritos] = useState(initialState)

  const [nombrePerrito,setNombrePerrito] = useState("")

    const handleClick = () =>{
        setPerritos([...perritos,nombrePerrito])
        setNombrePerrito("")
    }

    const handleChange =(e) =>{
        setNombrePerrito(e.target.value)
      
    }

    const handleDelete =(id)=>{
       let nuevosPerritos = perritos.filter((_,index)=>index!==id)
       setPerritos(nuevosPerritos)
       
    }
  

  return (
    <div>
        <br />
        <h2>Listado de Perritos</h2>
        <br />
        <input type="text" onChange={handleChange} value={nombrePerrito}/>
        <button type="button" onClick={handleClick}>agregar</button>
        <br />
        {perritos.map((perro,index)=><ul key={index}>{perro} <button className="btn btn-danger" onClick={()=>handleDelete(index)}>eliminar</button></ul>)}

        <br />


    {/* <h3>nombre perritu: {nombrePerrito}</h3> */}

        <br />
    </div>
  )
}

export default MainHome