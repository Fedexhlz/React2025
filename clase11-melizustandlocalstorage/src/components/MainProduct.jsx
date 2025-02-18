import {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import { Modal,Button } from "react-bootstrap"
import { Link } from "react-router-dom"


const MainProduct = () => {

const {id} = useParams()

const [datos,setDatos] = useState({})

const getProduct = async() =>{
let response = await axios.get(`https://api.mercadolibre.com/items/${id}`)
console.log(response.data);
console.log(response.data.permalink);
setDatos(response.data)
}

useEffect(()=>{
getProduct()
},[])

  return (
    <div>
      <br /><br />
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>{datos.title}</Modal.Title>
        </Modal.Header>
        <img src={datos.pictures[0].url} alt="" />
        <Modal.Body>
          <p>Precio: {datos.price}</p>
          <br />
          <h3>condicion: {datos.condition}</h3>
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

export default MainProduct