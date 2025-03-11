import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Movies from "./pages/Movies"
import Movie from "./pages/Movie"
import Login from "./pages/Login"
import Register from "./pages/Register"
import PrivateRoute from "./components/PrivateRoute"
import DashBoard from "./pages/DashBoard"
import Error from "./components/Error"

function App() {


  return (
    <BrowserRouter>
    <Routes>
      {/* Rutas publicas */}
      <Route path="/" element={<Movies/>}/>
      <Route path="/movies/:id" element={<Movie/>}/>
      <Route path="/movies/login" element={<Login/>}/>
      <Route path="/movies/register" element={<Register/>}/>
      <Route path="*" element={<Error/>}/>
      {/* Rutas Privadas */}
      <Route element={<PrivateRoute/>}>
        <Route path="/admin/dashboard" element={<DashBoard/>}/>
        
      </Route>
      
    </Routes>
    </BrowserRouter>
  )
}

export default App
