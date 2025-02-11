import {Row,Col} from "react-bootstrap"
import useStore from "../store/useStore"

const Header = () => {

    const {user,logoutUser} = useStore()

    return (
        <div className="bg-info">
            <br /><br />
            <h1>Mercado Libre API</h1>
            <br />
            <Row>

                <Col md={6}>
                {user && <h3>logueado correctamente...</h3>}
             
                </Col>
                <Col md={6}>
                {user && <button onClick={logoutUser} className="btn btn-danger">logout</button>}
                
                </Col>
            </Row>

            <br /><br />
        </div>
    )
}

export default Header