import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App