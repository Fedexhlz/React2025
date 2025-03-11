import React,{useState} from 'react'
import Header from '../components/Header'
import MainMovies from '../components/MainMovies'
import Footer from '../components/Footer'
import NavBar from '../components/navBar'
import Carrousel from '../components/carrousel'

const Movies = () => {

  const [value,setValue] = useState("")

  const getValue = (newValue) =>{
    setValue(newValue)
  }

  return (
    <div>
        <Header/>
        <NavBar getValue={getValue}/>
        <Carrousel/>
        <MainMovies value={value}/>
        <Footer/>
    </div>
  )
}

export default Movies