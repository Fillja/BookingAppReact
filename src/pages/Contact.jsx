import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ContactShowcase from '../components/contact-components/ContactShowcase'
import ColorPaletteComponent from '../components/ColorPaletteComponent'

const Contact = () => {
  return (
    <>
    <Header />
    <ContactShowcase />
    <ColorPaletteComponent />
    <Footer />
    </>
  )
}

export default Contact