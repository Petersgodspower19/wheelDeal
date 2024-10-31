import React from 'react'
import Hero from '../components/Hero'
import FeaturedCars from '../components/FeaturedCars'
import AboutComponents from '../components/AboutComponents'
import Mission from '../components/Mission'
import CarNews from '../components/CarNews'

function Home() {
  return (
    <div>
        <Hero />
        <FeaturedCars />
        <AboutComponents />
        <Mission />
        <CarNews />
    </div>
  )
}

export default Home
