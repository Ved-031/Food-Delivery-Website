import React, { useContext, useState } from 'react'
import { assets } from '../../assets/assets'
import { NavLink } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

  const { cartTotal } = useContext(StoreContext)
  const [isMenu, setIsMenu] = useState(false);
  const close = ()=>{
    setShowLogin(true)
    setIsMenu(prev=>!prev)
  }

  return (
    <div className='relative'>
      <div className='py-4 px-5 lg:py-5 lg:px-16 flex items-center justify-between'>

        <NavLink to={'/'}>
          <img src={assets.logo} alt="logo" className='w-24 lg:w-32'/>
        </NavLink>
        
        <div>
          <ul className='hidden md:flex items-center gap-10 lg:gap-16 tracking-wide'>
            <NavLink to={'/'}>
              <li className='text-[18px] font-medium hover:text-orange-500 hover:font-bold'>Home</li>
            </NavLink>  
            <NavLink to={'/'}>
              <li className='text-[18px] font-medium hover:text-orange-500 hover:font-bold'>Menu</li>
            </NavLink>  
            <NavLink to={'/'}>
              <li className='text-[18px] font-medium hover:text-orange-500 hover:font-bold'>Conatct</li>
            </NavLink>  
          </ul>
        </div>

        <div className='hidden md:flex items-center gap-8 lg:gap-12'>
          <NavLink to={"/cart"} className="relative">
            <img src={assets.basket_icon} alt="" className='w-5 cursor-pointer lg:w-6'/>
            {cartTotal() > 0 ? 
              <div className='h-2 w-2 bg-orange-500 rounded-full absolute top-[-3px] right-[-6px]'></div>
              :
              <></>
            }
          </NavLink>
          <button className='bg-orange-500 hover:bg-orange-600 hover:shadow-md text-white px-3 py-2 rounded-lg font-medium cursor-pointer' onClick={()=>setShowLogin(true)}>SignIn</button>
        </div>

        <i className="fa-solid fa-bars md:hidden text-[18px] cursor-pointer" onClick={()=>setIsMenu(prev=>!prev)}></i>

        <div className={`${isMenu ? "fixed md:hidden" : "hidden"} inset-0 z-50 w-full min-h-screen bg-white md:hidden`}>
          <div className='flex items-center justify-between py-4 px-5'>
            <img src={assets.logo} alt="logo" className='w-24'/>
            <i className="fa-solid fa-xmark text-[18px] cursor-pointer" onClick={()=>setIsMenu(prev=>!prev)}></i>
          </div>
          <div className='px-4 w-full'>
            <ul className='flex flex-col gap-3 tracking-wide py-4 w-full'>
              <div className='p-3 hover:bg-gray-50  rounded-lg hover:text-orange-500' onClick={()=>setIsMenu(prev=>!prev)}>
                <NavLink to="/" className='flex items-center gap-3'>
                  <i className="fa-solid fa-house"></i>
                  <li className='w-full text-[18px] font-medium cursor-pointer transition'>Home</li>
                </NavLink>
              </div>
              <div className='flex items-center gap-3 p-3 hover:bg-gray-50  rounded-lg hover:text-orange-500' onClick={()=>setIsMenu(prev=>!prev)}>
                <NavLink to="/" className='flex items-center gap-3'>
                  <i className="fa-solid fa-bowl-food"></i>
                  <li className='w-full text-[18px] font-medium cursor-pointer transition'>Menu</li>
                </NavLink>
              </div>
              <div className='flex items-center gap-3 p-3 hover:bg-gray-50  rounded-lg hover:text-orange-500' onClick={()=>setIsMenu(prev=>!prev)}>
                <NavLink to="/" className='flex items-center gap-3'>
                  <i className="fa-solid fa-phone"></i>
                  <li className='w-full text-[18px] font-medium cursor-pointer transition'>Contact</li>
                </NavLink>
              </div>
              <div className='flex items-center gap-3 p-3 hover:bg-gray-50  rounded-lg hover:text-orange-500' onClick={()=>setIsMenu(prev=>!prev)}>
                <NavLink to="/cart" className='flex items-center gap-3'>
                  <i className="fa-solid fa-cart-shopping"></i>
                  <li className='w-full text-[18px] font-medium cursor-pointer transition'>Cart</li>
                </NavLink>
              </div>
            </ul>
            <button className='bg-orange-500 hover:bg-orange-600 hover:shadow-md text-white px-4 py-2 mt-5 rounded-lg font-medium cursor-pointer ml-3' onClick={()=>close()}>SignIn</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar