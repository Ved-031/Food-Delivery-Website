import React from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  return (
    <div className='min-h-screen border border-[#ebe6e6] border-t-0'>
      <div className='flex flex-col items-start gap-7 lg:gap-9 pt-7 lg:pt-10 pl-4 lg:pl-10'>
        <Link to="/add">
          <div className='flex items-center gap-3 lg:gap-5 cursor-pointer border border-[#a9a9a9] border-r-0 py-2 lg:py-3 lg:pl-5 px-[10px] rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-[4px] w-full hover:bg-gray-100 transition'>
            <img src={assets.add_icon} alt="" className='w-4 lg:w-5'/>
            <p className='hidden md:block text-sm lg:text-[17px] font-medium'>Add Items</p>
          </div>
        </Link>
        <Link to="/list">
          <div className='flex items-center gap-3 lg:gap-5 cursor-pointer border border-[#a9a9a9] border-r-0 py-2 lg:py-3 lg:pl-5 px-[10px] rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-[4px] w-full hover:bg-gray-100 transition'>
          <img src={assets.order_icon} alt="" className='w-4 lg:w-5'/>
          <p className='hidden md:block text-sm lg:text-[17px] font-medium'>List Items</p>
          </div>
        </Link>
        <Link to="/orders">
          <div className='flex items-center gap-3 lg:gap-5 cursor-pointer border border-[#a9a9a9] border-r-0 py-2 lg:py-3 lg:pl-5 px-[10px] rounded-tl-[4px] rounded-tr-none rounded-br-none rounded-bl-[4px] w-full hover:bg-gray-100 transition'>
          <img src={assets.order_icon} alt="" className='w-4 lg:w-5'/>
          <p className='hidden md:block text-sm lg:text-[17px] font-medium'>Orders</p>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Sidebar