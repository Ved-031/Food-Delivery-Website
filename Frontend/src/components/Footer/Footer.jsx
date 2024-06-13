import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='w-full mt-5 p-4 lg:p-6 bg-gray-50 rounded-lg md:flex flex-col items-center justify-center'>
        <div>
            <img src={assets.logo} alt="logo" className='w-20 lg:w-28'/>
        </div>
        <div className='flex items-center justify-between md:gap-16 mt-5 lg:mt-8'>
            <div className=''>
                <h4 className='text-sm text-zinc-500 font-medium'>Contact</h4>
                <ul className='mt-1 lg:mt-3 flex flex-col items-start gap-1 lg:gap-3'>
                    <li className='text-sm text-zinc-500'>Phone: +91 7058940073</li>
                    <li className='text-sm text-zinc-500'>Email: tellawarved@gmail.com</li>
                    <li className='text-sm text-zinc-500'>Address: Pawdewadi Naka, Nanded</li>
                </ul>
            </div>
            <div>
                <h4 className='text-sm text-zinc-500 font-medium'>Social Media</h4>
                <ul className='mt-1 lg:mt-3 flex flex-col items-start gap-1 lg:gap-3'>
                    <li className='text-sm text-zinc-500'>Insta: ved_031</li>
                    <li className='text-sm text-zinc-500'>Twitter: null</li>
                    <li className='text-sm text-zinc-500'>Facebook: null</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer