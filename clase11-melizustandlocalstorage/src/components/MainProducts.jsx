import { useState, useEffect } from "react"
import axios from "axios"
import { Row, Col, Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../css/MainProducts.css"

const MainProducts = () => {
  const [valor, setValor] = useState("")  // El término de búsqueda
  const [productos, setProductos] = useState([])  // Los productos de la búsqueda
  const [categorias, setCategorias] = useState([])  // Las categorías con todos sus detalles
  const [loading, setLoading] = useState(true)  // Para controlar si estamos cargando los datos

  // Función para obtener los productos
  const getProducts = async () => {
    setLoading(true)
    try {
      let response = await axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=${valor}&limit=20`)
      setProductos(response.data.results)
    } catch (error) {
      console.error("Error al obtener productos", error)
    }
    setLoading(false)
  }

  // Función para obtener las categorías (solo ID y nombre)
  const getCategories = async () => {
    setLoading(true)
    try {
      let response = await axios.get("https://api.mercadolibre.com/sites/MLA/categories")
      getDataCategories(response.data)
    } catch (error) {
      console.error("Error al obtener categorías", error)
    }
    setLoading(false)
  }

  
  const getDataCategories = async (array) => {
    let newCategories = []  
        for (const cat of array) {
      try {
        
        let response = await axios.get(`https://api.mercadolibre.com/categories/${cat.id}`)
        
        //console.log(response.data);
        newCategories.push(response.data)
      } catch (error) {
        console.error(`Error al obtener detalles de la categoría ${cat.id}`, error)
      }
    }
    setCategorias(newCategories)  
  }

  
  const handleSubmit = (e) => {
    e.preventDefault()
    getProducts()
  }

  // useEffect para obtener las categorías al cargar la página
  useEffect(() => {
    getCategories()
  }, [])

  return (
    <div className="bg-info">
      <br /><br />
      <h3>Aquí van todos mis productos</h3>
      <br />
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Busca tu producto</label>
        <input
          type="text"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>

      <br /><br />

      {valor === "" ? (
        <Row>
          {categorias.map(cat => (
            <Col key={cat.id} md={3} className="mt-2 mb-2">
              <Card>
                <Link to={`/categorias/${cat.id}`} className="cursor-pointer">
                  <Card.Title>{cat.name}</Card.Title>
                  <Card.Img src={cat.picture} />
                  <Card.Body>
                    <Card.Text>Cantidad de Productos:  {cat.total_items_in_this_category}</Card.Text>
                    <Card.Text>Fecha Creacion: {cat.date_created}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      ) : (
        
        <Row>
          {productos.map(producto => (
            <Col key={producto.id} md={4} className="mt-2 mb-2">
              <Card>
                <Link to={`/products/${producto.id}`} className="cursor-pointer">
                  <Card.Title>{producto.title}</Card.Title>
                  <Card.Body>
                    <Card.Img src={producto.thumbnail} />
                    <Card.Text>Precio: {producto.price}</Card.Text>
                  </Card.Body>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      )}
    </div>
  )
}

export default MainProducts
