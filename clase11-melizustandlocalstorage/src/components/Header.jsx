import { Row, Col } from "react-bootstrap"
import useStore from "../store/useStore"
import "../css/header.css"


const Header = () => {

    const { user, logoutUser } = useStore()

    return (
        <div className="header text-center">
            <br /><br />
            <h1>Mercado Libre API</h1>
            <br />
            {/* <Row>

                <Col md={6}>
                {user && <h3>logueado correctamente...</h3>}
             
                </Col>
                <Col md={6}>
                {user && <button onClick={logoutUser} className="btn btn-danger">logout</button>}
                
                </Col>
            </Row> */}
            <Row className="row">
                <Col md={3}>
                    <div className="logo">

                    </div>
                </Col>
                <Col md={5}>
                    <input type="text" className="nav-search-input"
                        placeholder="Buscar productos, marcas y mas..."
                        maxLength={120}
                    />
                </Col>
                <Col md={4}>
                    <div className="envio">
                        <img src="https://http2.mlstatic.com/D_NQ_913160-MLA82004618940_022025-OO.webp" alt="" />
                    </div>
                </Col>
            </Row>

            <br /><br />
        </div>
    )
}

export default Header