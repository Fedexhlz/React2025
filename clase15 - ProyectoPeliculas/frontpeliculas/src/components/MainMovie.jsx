import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Modal, Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const MainMovie = () => {

  const { id } = useParams()

  const [datos, setDatos] = useState({})

  const getProduct = async () => { 
    let response = await axios.get(`http://localhost:8000/peliculas/${id}`)
    console.log(response.data);

    setDatos(response.data[0])
  }

  useEffect(() => {
    getProduct()
  }, [])

  return (
    <div>
      <br /><br />
      <div
        className="modal show"
        style={{ display: 'block', position: 'initial' }}
      >
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>{datos.nombre}</Modal.Title>
          </Modal.Header>
          <img src={datos.imagen} alt="" />
          <Modal.Body>
            <p>Genero: {datos.genero}</p>
            <br />
            <h3>año: {datos.año}</h3>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary">Close</Button>
            <Link to="/products" className="btn btn-danger">cerrar</Link>
          </Modal.Footer>
        </Modal.Dialog>
      </div>
      <br /><br />
    </div>
  )
}

export default MainMovie