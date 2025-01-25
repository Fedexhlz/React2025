import {Col,Card,Button} from "react-bootstrap"

const Character = ({name,status,species,image,id,gender}) => {
    //console.log(props);
  return (
    <Col md={4}>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>nombre: {name}</Card.Title>
        <Card.Text>
            estado: {status}
        </Card.Text>
        <Card.Text>
            genero: {gender}
        </Card.Text>
        <Card.Text>
            especie: {species}
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </Col>
  )
}

export default Character