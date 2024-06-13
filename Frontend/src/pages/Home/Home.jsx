import React from 'react'
import Category from '../../components/Category/Category'
import Menu from '../../components/Menu/Menu'
import Footer from '../../components/Footer/Footer'

const Home = () => {

  return (
    <div className='w-full px-5'>
      <Category/>
      <Menu/>
      <Footer/>
    </div>
  )
}

export default Home