import { useState, useEffect } from 'react'
import { Row, Col, Card } from "react-bootstrap"
import axios from "axios"
import "../css/MainMovies.css"
import { Link } from 'react-router-dom'
import Flag from 'react-world-flags'

const MainMovies = ({value}) => {
    console.log("esto viene de mi busqueda "+value);
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

    const searchMovie = async () =>{
        let response = await axios.get("http://localhost:8000/peliculas/search/"+value)
        console.log(response);
        setData(response.data)
    }

    useEffect(() => {

        value ? searchMovie() : getData()   
        
    }, [value])

    return (

        <div className='cards'>
            <Row>
                {loading ? <h3>cargando...</h3> : data.map(dato => <Col md={4} key={dato.id}>
                    <Link to={`/movies/${dato.id}`} className='link-card'>
                        <Card className="custom-card">
                            <Card.Title className="card-title">Blu-Ray + Dvd Rip</Card.Title>
                            <Card.Body className="card-body">
                                <Card.Img src={dato.imagen} />
                                <Row className='justify-content-around'>
                                    <Col md={3} className='cards-datos'>2025</Col>
                                    <Col md={4} className='cards-datos'>
                                    <div className="flag-container">
                                            <Flag code="MX" className="flag" style={{ width: '20px', height: '12px' }} /> 
                                            <span>Latino</span>
                                        </div>
                                    </Col>
                                    <Col md={4} className='cards-datos'>
                                        <div className="flag-container">
                                            <Flag code="US" className="flag" style={{ width: '20px', height: '12px' }} /> 
                                            <span>Subs</span>
                                        </div>
                                        
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body className="card-body2">
                                <Card.Text className='card-name'>{dato.nombre}</Card.Text>

                            </Card.Body>
                        </Card>
                    </Link>

                </Col>)}
            </Row>

        </div>
    )
}

export default MainMovies