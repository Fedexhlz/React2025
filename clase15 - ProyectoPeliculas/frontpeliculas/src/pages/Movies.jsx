import React from 'react'
import Header from '../components/Header'
import MainMovies from '../components/MainMovies'
import Footer from '../components/Footer'
import NavBar from '../components/navBar'
import Carrousel from '../components/carrousel'

const Movies = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <Carrousel/>
        <MainMovies/>
        <Footer/>
    </div>
  )
}

export default Movies