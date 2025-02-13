import {BrowserRouter,Routes,Route} from "react-router-dom"
import './App.css'
import Login from "./pages/Login"
import Contacts from "./pages/Contacts"
import CreateContact from "./pages/CreateContact"
import EditContact from "./pages/EditContact"
import ViewContact from "./pages/ViewContact"
import Error from "./components/Error"

function App() {
 

  return (
    <div className="text-center">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
        <Route path="/contacts/create" element={<CreateContact/>}/>
        <Route path="/contacts/edit/:id" element={<EditContact/>}/>
        <Route path="/contacts/view/:id" element={<ViewContact/>}/>
        <Route path="*" element={<Error />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
