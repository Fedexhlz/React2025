import { useState, useEffect } from 'react'
import { Row, Col, Card } from "react-bootstrap"
import axios from "axios"
import "../css/MainMovies.css"
import { Link } from 'react-router-dom'

const MainMovies = () => {

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    const getData = async () => {
        try {
            let response = await axios.get("http://localhost:8000/peliculas")
            setData(response.data)
            setLoading(false)
            console.log(response.data);
        } catch (error) {
            console.error(error)
            setData([])
            setLoading(false)
        }

    }

    useEffect(() => {
        getData()
    }, [])

    return (

        <div>
            <Row>


                {loading ? <h3>cragando...</h3> : data.map(dato => <Col md={4} key={dato.id}>
                    <Link to={`/movies/${dato.nombre}`}>
                    <Card className='card' >
                        <Card.Title className='card-title'>Blu Ray + DVD Rip</Card.Title>
                        <Card.Img src={dato.imagen}/>
                        <Card.Body>
                            <Card.Text>genero: {dato.genero}</Card.Text>
                            <Card.Text>año: {dato.año}</Card.Text>

                        </Card.Body>
                    </Card>
                    </Link>
                   
                </Col>)}
            </Row>

        </div>
    )
}

export default MainMovies