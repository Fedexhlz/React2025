import { useState, useEffect } from "react"
import axios from "axios"
import { Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"


const MainProducts = () => {


  const [valor, setValor] = useState("")
  const [productos, setProductos] = useState([])
  const [categorias, setCategorias] = useState([])


  const getProducts = async () => {
    let response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${valor}&limit=20`)
    //console.log(response.data);
    setProductos(response.data.results)
  }

  const getCategories = async () => {
    let response = await axios.get("https://api.mercadolibre.com/sites/MLA/categories")
    //console.log(response.data);
    setCategorias(response.data)
  }



  const handleSubmit = (e) => {
    e.preventDefault();
    getProducts()
  }

  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div>
      <br /><br />
      <h3>aqui van todos mis productos</h3>
      <br />
      <form action="" onSubmit={handleSubmit}>
        <label htmlFor="">busca tu producto</label>
        <input type="text" onChange={(e) => setValor(e.target.value)} />
        <button type="submit">buscar</button>
      </form>

      <br /><br />

      {valor === "" ?
        <Row>
          {categorias.map(cat => <Col key={cat.id} md={3} className="mt-2 mb-2">
            <Card>
              <Link to={`/categorias/${cat.id}`} className="cursor-pointer">
                <Card.Title>{cat.id}</Card.Title>
                <Card.Body>

                  <Card.Text>nombre {cat.name}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>)}
        </Row>
        : <Row>
          {productos.map(producto => <Col key={producto.id} md={4} className="mt-2 mb-2">
            <Card>
              <Link to={`/products/${producto.id}`} className="cursor-pointer">
                <Card.Title>{producto.title}</Card.Title>
                <Card.Body>
                  <Card.Img src={producto.thumbnail} />
                  <Card.Text>precio: {producto.price}</Card.Text>
                </Card.Body>
              </Link>
            </Card>
          </Col>)}
        </Row>}


    </div>
  )
}

export default MainProducts