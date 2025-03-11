import React,{useState} from 'react'
import {Nav,Navbar,Form,Container,Button} from "react-bootstrap"
import "../css/NavBar.css"

const NavBar = ({getValue}) => {

  const [search,setSearch] = useState("")

  const handleSubmit = (e) =>{
    e.preventDefault()
    getValue(search)
    setSearch(null)

  }

  return (
    <div>
       <Navbar expand="lg" className="bg-blue-200 NavBar">
             <Container fluid className="navigation">
               <Navbar.Brand href="#"className="navlink">🏠Inicio</Navbar.Brand>
               <Navbar.Toggle aria-controls="navbarScroll" />
       
               <Nav
                 className="me-auto my-2 my-lg-0"
                 style={{ maxHeight: "100px" }}
                 navbarScroll
               >
                 <Nav.Link href="#action1" className="navlink">🍿Peliculas</Nav.Link>
                 <Nav.Link href="#action2" className="navlink">📺Series</Nav.Link>
       
                 <Nav.Link href="#" className="navlink">🫏Anime</Nav.Link>
                 <Nav.Link href="#" className="navlink">📆Calendario</Nav.Link>
               </Nav>
               <Form className="d-flex" onSubmit={handleSubmit}>
                 <Form.Control
                   type="search"
                   placeholder="buscar"
                   className="me-2"
                   aria-label="Search"
                   onChange={(e)=>setSearch(e.target.value)}
                 />
                
               </Form>
             </Container>
           </Navbar>
    </div>
  )
}


export default NavBar