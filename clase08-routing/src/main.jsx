import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from "react-router-dom"
import Home from './pages/Home.jsx'
import Register from "./pages/Register.jsx"
import Login from "./pages/Login.jsx"


const router = createBrowserRouter([
{
  path: "/",
  element: <Home/>,
  errorElement: <h3>pagina no encontrada</h3>
}, 
{
  path: "/register",
  element: <Register/>,
  errorElement: <h3>pagina no encontrada</h3>
},
{
  path: "/login",
  element: <Login/>,
  errorElement: <h3>pagina no encontrada</h3>
}
])

createRoot(document.getElementById('root')).render(
  // <RouterProvider router={router}/>
  <App />
  ,
)
