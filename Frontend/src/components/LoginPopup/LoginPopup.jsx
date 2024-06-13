import React, { useState } from 'react'
import { assets } from '../../assets/assets'

const LoginPopup = ({setShowLogin}) => {

    const [currentState, setCurrentState] = useState("Sign Up")

  return (
    <div className='absolute z-10 w-full h-full bg-[#00000090] grid'>
        <form className='place-self-center w-[60vw] md:w-[35vw] lg:w-[25vw] text-[#808080] bg-white flex flex-col gap-6 py-6 px-8 rounded-lg transition'>
            <div className='flex items-center justify-between'>
                <h2 className='text-xl font-bold tracking-wide text-orange-500'>{currentState}</h2>
                <i className="fa-solid fa-xmark cursor-pointer" onClick={()=>setShowLogin(false)}></i>
            </div>
            <div className='flex flex-col items-start gap-3'>
                {currentState === "Sign Up" ?
                    <input type="text" placeholder='Your Name' required className='border border-gray-100 rounded-lg px-3 py-2 w-full outline-none text-black'/>
                    :
                    <></>
                }
                <input type="email" placeholder='Your Email' required className='border border-gray-100 rounded-lg px-3 py-2 w-full outline-none text-black'/>
                <input type="password" placeholder='Your Password' required className='border border-gray-100 rounded-lg px-3 py-2 w-full outline-none text-black'/>
            </div>
            <button type='submit' className='bg-orange-500 text-white font-medium py-2 rounded-lg cursor-pointer'>{currentState==="Sign Up"?"Create Account":"Login"}</button>
            {
                currentState === "Login" ?
                <p className='text-sm tracking-wide'>Don't have an account? <span className='text-orange-500 font-medium cursor-pointer' onClick={()=>setCurrentState("Sign Up")}>Create</span></p>
                :
                <p className='text-sm tracking-wide'>Already have an account? <span className='text-orange-500 font-medium cursor-pointer' onClick={()=>setCurrentState("Login")}>Login here</span></p>
            }
        </form>
    </div>
  )
}

export default LoginPopup