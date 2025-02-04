import { useState } from "react"

const Header = (props) => {


  const [nombre, setNombre] = useState("")

  const handleClick = () => {
    props.getValue(nombre)
    setNombre("")
  }

  return (
    <div className="border">
      <br />
      <h1>Rock y Morty Api </h1>
      <br />
      <label htmlFor="">busca tu personaje</label>
      <input type="text" onChange={(e) => setNombre(e.target.value)} value={nombre} />
      <button type="button" onClick={handleClick}>buscar</button>
      <br />
    </div>
  )
}

export default Header