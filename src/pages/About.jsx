import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import AboutShowcase from '../components/about-components/AboutShowcase'
import ColorPaletteComponent from '../components/ColorPaletteComponent'

const About = () => {
  return (
    <>
    <Header />
    <AboutShowcase />
    <ColorPaletteComponent />
    <Footer />  
    </>
  )
}

export default About