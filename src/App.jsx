import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import AppLayout from './AppLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Cars from './pages/Cars';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AppLayout />}>
      <Route index element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/service' element={<Services />} />
      <Route path='/cars' element={<Cars />} />
      </Route>
    </Routes>
      
    </BrowserRouter>
  )
}

export default App
