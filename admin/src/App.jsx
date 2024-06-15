import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add/Add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'

const App = () => {
  return (
    <div>
      <Navbar/>
      <hr />
      <div className='flex'>
        <Sidebar/>
      </div>
      <Routes>
        <Route path='/add' element={<Add/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/list' element={<List/>}/>
      </Routes>
    </div>
  )
}

export default App