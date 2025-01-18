import Footer from "../components/Footer"
import Header from "../components/Header"
import MainHome from "../components/MainHome"

const Home = ({nombre,titulo,saludar,Alumno:{domicilio:{calle,numero}}}) => {

  console.log(nombre,titulo);
  // //props son objetos
  // console.log(props.nombre);
  // console.log(props.titulo);

  // //destructuro de mis PROPS
  // const {nombre,titulo} = props

  console.log(numero);

  let Alumno2 = {
    nombre:"belen",
    edad:22,
    domicilio:{
      calle:"catamarca",
      numero:318
    },
    soltero:false
  }

  let perritos = ["salchicha",'sultan','toby']

  return (
    <div>
        <Header perritos={perritos}/>
        <MainHome nombre={nombre} saludar={saludar}/>
        {/* spread operator */}
        <Footer {...Alumno2}/>
    </div>
  )
} 

export default Home