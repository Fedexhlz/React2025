import {useState,useEffect} from "react"
import axios from "axios"
import {Modal}  from "react-bootstrap"
import { useParams } from "react-router-dom"
import { BASE_URL, URL_CHARACTER } from "../constants/contants"
import { Link } from "react-router-dom"

const Personaje = () => {

  const {id} = useParams()

  const [data,setData] = useState({})

  const getDatos =async () =>{
    let response = await axios.get(`${BASE_URL}${URL_CHARACTER}/${id}`)
    setData(response.data)

  }

  useEffect(()=>{
   getDatos() 
  },[])

  return (
    <div>
      
      <div
      className="modal show"
      style={{ display: 'block', position: 'initial' }}
    >
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>#{data.id} - {data.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img src={data.image} alt="" />
          
          <br />
          <h3>estado: {data.status}</h3>
          <h3>gender: {data.gender}</h3>
        </Modal.Body>

        <Modal.Footer>
          <Link className={"btn btn-danger"} to={"/personajes"} variant="secondary">Close</Link >
         
        </Modal.Footer>
      </Modal.Dialog>
    </div>
    </div>
  )
}

export default Personaje