import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import ContactP from './Pages/ContactP'
import AboutUs from './Pages/AboutUs'
import TrainersP from './Pages/TrainersP'
import GalleryP from './Pages/GalleryP'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} exact />
        <Route path='/contact' element={<ContactP/>}></Route>
        <Route path='/about' element={<AboutUs/>}></Route>
        <Route path='/trainers' element={<TrainersP/>}></Route>
        <Route path='/gallery' element={<GalleryP/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

