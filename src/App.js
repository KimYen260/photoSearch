import React from 'react'
import Nav from './components/Nav.jsx'
import About from './pages/About.jsx'
import Home from './pages/Home.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className='App'>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </div>
  )
}

export default App
