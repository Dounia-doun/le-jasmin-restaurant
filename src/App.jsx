import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Menu from './Menu'
import Gallery from './Gallery'
import Locations from './Locations'
import QRSection from './QRSection'
import Reservation from './Reservation'
import Footer from './Footer'
export default function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div>
      <Navbar scrolled={scrolled} />
      <Hero />
      <About />
      <Menu />
      <Gallery />
      <Locations />
      <QRSection />
      <Reservation />
      <Footer />
    </div>
  )
}
