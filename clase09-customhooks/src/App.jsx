import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from "./pages/Login"
import Register from "./pages/Register"
import Personajes from "./pages/Personajes"
import {login,register,personajes} from "./routes/paths"
import Personaje from "./pages/Personaje"
import Error from "./components/Error"


function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path={login} element={<Login/>}/>
        <Route path={register} element={<Register/>}/>
        <Route path={personajes} element={<Personajes/>}/>
        <Route path="/personajes/:id" element={<Personaje/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
