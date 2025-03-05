import { useState, useEffect } from "react"
import axios from "axios"
import { Table } from "react-bootstrap"
import { MdDelete } from "react-icons/md";
import { FaUserEdit, FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { BASE_URL } from "../constants/constants";
import "../css/MainContacts.css"

const MainContacts = () => {

    const [contacts, setContacts] = useState([])


    const getContacts = async () => {
        let response = await axios.get(BASE_URL)
        //console.log(response.data);
        setContacts(response.data)
    }

    const handleDelete = async (id) => {
        //console.log("borro este id"+ id);

        try {
            let response = await axios.delete(BASE_URL + id)
            if (response) {
                alert("contacto eliminado correctamente")
                getContacts()
            } else {
                alert("hubo algun error")
            }
        } catch (error) {
            console.log(error);
        }


    }



    useEffect(() => {
        getContacts()
    }, [])

    return (
        <div className="main-contacts">
            <br /><br />
            <h2 className="text-info h2">Listado de Contactos</h2>
            <br />
            <Link className="btn btn-success" to="/contacts/create">crear Contacto</Link>
            <br /><br />
            <Table striped bordered hover className="table-contact">
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="fw-bold">Nombre</th>
                        <th>Apellido</th>
                        <th>Direccion</th>
                        <th>Imagen</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => <tr key={contact.id}>
                        <td>{contact.id}</td>
                        <td>{contact.nombre}</td>
                        <td>{contact.apellido}</td>
                        <td>{contact.direccion}</td>
                        <td>
                            <img src={contact.imagen} alt="" style={{ width: "50px", height: "50px" }} />
                        </td>
                        <td>
                            <button onClick={() => handleDelete(contact.id)} className="btn btn-danger"><MdDelete /></button>
                            <Link className="btn btn-warning my-2" to={`/contacts/edit/${contact.id}`}><FaUserEdit /></Link >
                            <Link to={`/contacts/view/${contact.id}`} className="btn btn-success ml-2"><FaEye /></Link >
                        </td>
                    </tr>)}
                </tbody>
            </Table>



            <br /><br />
        </div>
    )
}

export default MainContacts