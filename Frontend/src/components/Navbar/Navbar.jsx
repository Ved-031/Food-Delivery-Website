import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import cart from '../../assets/basket_icon.png'

const Navbar = () => {

  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className='relative'>
      <div className='py-4 px-5 lg:py-5 lg:px-10 flex items-center justify-between'>

        <img src={logo} alt="logo" className='w-24 lg:w-32'/>

        <div>
          <ul className='hidden md:flex items-center gap-10 lg:gap-16 tracking-wide'>
            <li><a href="#" className='text-[18px] font-medium hover:text-orange-500 hover:font-bold'>Home</a></li>
            <li><a href="#" className='text-[18px] font-medium hover:text-orange-500 hover:font-bold'>Menu</a></li>
            <li><a href="#" className='text-[18px] font-medium hover:text-orange-500 hover:font-bold'>Contact</a></li>
          </ul>
        </div>

        <div className='hidden md:flex items-center gap-8 lg:gap-12'>
          <img src={cart} alt="" className='w-5 cursor-pointer lg:w-6'/>
          <button className='bg-orange-500 hover:bg-orange-600 hover:shadow-md text-white px-3 py-2 rounded-lg font-medium cursor-pointer'>SignIn</button>
        </div>

        <i className="fa-solid fa-bars md:hidden text-[18px] cursor-pointer" onClick={()=>setIsMenu(prev=>!prev)}></i>

        <div className={`${isMenu ? "fixed" : "hidden"} inset-0 z-50 w-full min-h-screen bg-white`}>
          <div className='flex items-center justify-between py-4 px-5'>
            <img src={logo} alt="logo" className='w-24'/>
            <i class="fa-solid fa-xmark text-[18px] cursor-pointer" onClick={()=>setIsMenu(prev=>!prev)}></i>
          </div>
          <div className='px-4 w-full'>
            <ul className='flex flex-col gap-3 tracking-wide py-4 w-full'>
              <div className='flex items-center gap-3 p-3 hover:bg-gray-50  rounded-lg hover:text-orange-500'>
                <i class="fa-solid fa-house"></i>
                <li className='w-full'><a href="#" className='text-[18px] font-medium w-full cursor-pointer transition block'>Home</a></li>
              </div>
              <div className='flex items-center gap-3 p-3 hover:bg-gray-50  rounded-lg hover:text-orange-500'>
                <i class="fa-solid fa-bowl-food"></i>
                <li className='w-full'><a href="#" className='text-[18px] font-medium w-full cursor-pointer transition block'>Menu</a></li>
              </div>
              <div className='flex items-center gap-3 p-3 hover:bg-gray-50  rounded-lg hover:text-orange-500'>
                <i class="fa-solid fa-phone"></i>
                <li className='w-full'><a href="#" className='text-[18px] font-medium w-full cursor-pointer transition block'>Contact</a></li>
              </div>
              <div className='flex items-center gap-3 p-3 hover:bg-gray-50  rounded-lg hover:text-orange-500'>
                <i class="fa-solid fa-cart-shopping"></i>
                <li className='w-full'><a href="#" className='text-[18px] font-medium w-full cursor-pointer transition block'>Cart</a></li>
              </div>
            </ul>
            <button className='bg-orange-500 hover:bg-orange-600 hover:shadow-md text-white px-4 py-2 mt-5 rounded-lg font-medium cursor-pointer ml-3'>SignIn</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar