
import { Row, Col } from "react-bootstrap"
import './App.css'
import Hijo1 from "./components/Hijo1"
import Hijo2 from "./components/Hijo2"
import useStore from "./Store/useStore"


function App() {

    const {cambiarColor,color} = useStore()

  // const [data, setData] = useState({})
  // const [valor, setValor] = useState(0)

  // const getDatos = (newDatos) => {
  //   setData(newDatos)
  // }
  // const getValue = (newValue) => {
  //   setValor(newValue)
  // }

  return (
    <div >
        <button onClick={cambiarColor}>{color ? "Dia" : "noche"}</button>
        <Row>
          <Col md={6}>
            <Hijo1 />
          </Col>
          <Col md={6}>
            <Hijo2  />
          </Col>
        </Row>


    </div>
  )
}

export default App
