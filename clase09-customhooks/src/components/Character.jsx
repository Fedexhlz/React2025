import {Col,Card,Button} from "react-bootstrap"
import { Link } from "react-router-dom"

const Character = ({name,status,species,image,id,gender}) => {
    //console.log(props);
  return (
    <Col md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>#{id} - nombre: {name}</Card.Title>
        <Card.Text>
            estado: {status}
        </Card.Text>
        <Card.Text>
            genero: {gender}
        </Card.Text>
        <Card.Text>
            especie: {species}
        </Card.Text>
        <Link className="btn btn-success" to={`/personajes/${id}`} variant="primary">Ver Mas</Link >
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Character