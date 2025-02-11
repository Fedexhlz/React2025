import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Products from "./pages/Products"
import Product from "./pages/Product"
import Error from "./components/Error"
import Categoria from "./pages/categoria"

function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/categorias/:id" element={<Categoria/>}/>
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
