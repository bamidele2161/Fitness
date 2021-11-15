import { BrowserRouter as Router, Routes, Route,  } from 'react-router-dom'
import React from 'react'
import Home from './Pages/Home'
import ContactP from './Pages/ContactP'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/home' element={<Home />} exact />
        <Route path='/contact' element={<ContactP/>}></Route>
      </Routes>
    </Router>
  )
}

export default App

