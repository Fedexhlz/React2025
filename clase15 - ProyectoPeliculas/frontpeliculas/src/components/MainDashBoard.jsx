import React, { useState, useEffect } from 'react'
import useStore from '../store/useStore'
import { Row, Col, Table, Button, Form } from "react-bootstrap"
import axios from "axios"
import { MdDelete } from "react-icons/md";
import { FaUserEdit, FaEye } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../css/DashBoard.css"

const MainDashBoard = () => {

    const { logoutUser } = useStore()


    const initialState = {
        nombre: "",
        genero: "",
        año: "",
        imagen: "",
        url_descarga: ""
    }

    const [datos, setDatos] = useState(initialState)
    const [peliculas, setPeliculas] = useState([])
    const [idActualizado,setIdActualizado] = useState("")

    const handleChange = (e) => {
        //console.log("disparo change");
        const { name, value } = e.target
        setDatos({ ...datos, [name]: value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            let response = await axios.post("http://localhost:8000/peliculas", {
                nombre: datos.nombre,
                genero: datos.genero,
                año: datos.año,
                imagen: datos.imagen,
                url_descarga:datos.url_descarga

            })

            if (response) {
                alert("contacto creado correctamente")
                getPeliculas()
                e.target.reset()
            }
        } catch (error) {
            console.log(error.message);
        }
    }

    const getPeliculas = async () => {
        let response = await axios.get("http://localhost:8000/peliculas")
        //console.log(response);
        setPeliculas(response.data)
    }

    const handleEditar = (datos) => {
        setDatos({
            nombre:datos.nombre,
            genero: datos.genero,
            año: datos.año,
            imagen: datos.imagen,
            url_descarga:datos.url_descarga
        })
        setIdActualizado(datos.id)
    }
    const handleActualizar = async(e) =>{
        let response = await axios.put("http://localhost:8000/peliculas/"+idActualizado,datos)
        if(response) {
            alert("pelicula editada correctamente")
            e.target.reset()
            getPeliculas()
        }else {
            alert("ocurio un error al actualizar")
        }
    }

    const handleDelete = async (id) => {
        try {
            let response = await axios.delete("http://localhost:8000/peliculas/"+id)
            if (response) {
                alert("pelicula eliminida correctamente")
                getPeliculas()
            }else{
                alert("ocurrio un error")
            }
        } catch (error) {
            console.error(error)
        }
        
    }

    useEffect(() => {
        getPeliculas()
    }, [])

    return (
        <div>
            <br />
            <button className='btn btn-danger' onClick={() => logoutUser()} style={{ float: "right" }}>logout</button>
            <br />
            <br />
            <Row>
                <Col md={3}>
                    <Form action="" onSubmit={handleSubmit}>
                        <Form.Label htmlFor="">nombre</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name="nombre" value={datos.nombre} />
                        <br />
                        <Form.Label htmlFor="">genero</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name="genero" value={datos.genero}/>
                        <br />
                        <Form.Label htmlFor="">año</Form.Label>
                        <Form.Control type="number" onChange={handleChange} name="año" value={datos.año}/>
                        <br />
                        <Form.Label htmlFor="">imagen</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name="imagen" value={datos.imagen}/>
                        <br />
                        <Form.Label htmlFor="">url descraga</Form.Label>
                        <Form.Control type="text" onChange={handleChange} name="url_descarga" value={datos.url_descarga}/>
                        <br />
                        <button className='btn btn-success' type="submit">guardar contacto</button>
                        <button className='btn btn-warning' type='button' onClick={()=>handleActualizar()}>actualizar</button>
                        <br />
                    </Form>
                </Col>
                <Col md={8}>
                    <Table striped bordered hover className="table-contact">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th className="fw-bold">Nombre</th>
                                <th>genero</th>
                                <th>Año</th>
                                <th>Imagen</th>
                                <th>Url descarga</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {peliculas.map(pelicula => <tr key={pelicula.id}>
                                <td>{pelicula.id}</td>
                                <td>{pelicula.nombre}</td>
                                <td>{pelicula.genero}</td>
                                <td>{pelicula.año}</td>
                                <td>
                                    <img src={pelicula.imagen} alt="" style={{ width: "50px", height: "50px" }} />
                                </td>
                                <td>{pelicula.url_descarga}</td>
                                <td>
                                    <button onClick={() => handleDelete(pelicula.id)} className="btn btn-danger"><MdDelete /></button>
                                    <button onClick={()=>handleEditar(pelicula)} className="btn btn-warning my-2"><FaUserEdit /></button>
                                </td>
                            </tr>)}
                        </tbody>
                    </Table>
                </Col>
            </Row>

        </div>
    )
}

export default MainDashBoard