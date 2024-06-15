import React from 'react'
import { assets } from '../../assets/assets'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center py-3 px-5 lg:px-10'>
      <img src={assets.logo} alt="logo" className='w-24 lg:w-28 cursor-pointer'/>
      <img src={assets.profile_image} alt="profile" className='w-9 lg:w-12 cursor-pointer'/>
    </div>
  )
}

export default Navbar