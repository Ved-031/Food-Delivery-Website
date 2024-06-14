import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {

  const { cartTotal } = useContext(StoreContext)

  return (
    <div className='px-5 lg:px-16 mt-6 lg:mt-10 w-full'>
      <form className='md:flex md:items-start md:gap-20 mx-auto'>
        <div className='left w-full'>
          <p className='text-[17px] font-bold tracking-wide mb-3'>Delivery Information</p>
          <div className='flex items-center gap-3'>
            <input type="text" placeholder='First Name' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2'/>
            <input type="text" placeholder='Last Name' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2'/>
          </div>
          <input type="email" placeholder='Email' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2 mr-3'/>
          <input type="text" placeholder='Street' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2'/>
          <div className='flex items-center gap-3'>
            <input type="text" placeholder='City' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2'/>
            <input type="text" placeholder='State' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2'/>
          </div>
          <div className='flex items-center gap-3'>
            <input type="text" placeholder='Pin code' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2'/>
            <input type="text" placeholder='Country' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2'/>
          </div>
          <input type="text" placeholder='Phone' className='border border-gray-400 text-black px-3 py-2 rounded-lg text-sm mb-2'/>
        </div>
        <div className='right w-full'>
          <div className='my-5 w-[90%]'>
            <h2 className='text-[17px] font-bold tracking-wide'>Cart Total</h2>
            <div className='my-3'>
              <div className='flex items-center justify-between py-2 px-3 text-sm text-gray-500'>
                <p>Subtotal</p>
                <p>${cartTotal()}</p>
              </div>
              <hr />
              <div className='flex items-center justify-between py-2 px-3 text-sm text-gray-500'>
                <p>Delivery Fees</p>
                <p>${2}</p>
              </div>
              <hr />
              <div className='flex items-center justify-between py-2 px-3 text-sm text-black font-medium'>
                <p>Total</p>
                <p>${cartTotal()+2}</p>

              </div>
            </div>
            <button className='bg-orange-500 text-white font-medium px-3 py-2 lg:py-3 rounded-lg cursor-pointer text-sm'>Proceed to Payment</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PlaceOrder