import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeShowcase from '../components/home-components/HomeShowcase'
import ColorPaletteComponent from '../components/ColorPaletteComponent'

const Home = () => {
  return (
    <>
    <Header />
    <HomeShowcase />
    <ColorPaletteComponent />
    <Footer />
    </>
  )
}

export default Home