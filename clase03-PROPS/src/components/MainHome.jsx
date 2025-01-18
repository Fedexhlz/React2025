//import React from 'react'
import "../css/MainHome.css"
const MainHome = ({nombre,saludar}) => {

  //console.log(props.nombre);
  saludar()

  return (
    <div className="main">
        <br />

        <h3>aqui va todo MAIN</h3>
        <br />
        <h4>nombre: {nombre}</h4>
        <br />
    </div>
  )
}

export default MainHome