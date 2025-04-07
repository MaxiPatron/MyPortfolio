import React from 'react'
import NavBar from '../components/NavBar'
import BackImg from '../components/BackImg'
import Footer from '../components/Footer'
import About from '../components/About'
import Skills from '../components/Skills'
import Proyects from '../components/Proyects'
const Home = () => {
  return (
    <div>
      <NavBar />
      <BackImg />
      <Proyects />
      <About />
      <Skills />
      <Footer />
    </div>
  )
}
export default Home