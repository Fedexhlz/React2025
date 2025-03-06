import React from 'react'
import Header from '../components/Header'
import NavBar from '../components/navBar'
import MainMovie from '../components/MainMovie'
import Footer from '../components/Footer'

const Movie = () => {
  return (
    <div>
        <Header/>
        <NavBar/>
        <MainMovie/>
        <Footer/>
    </div>
  )
}

export default Movie