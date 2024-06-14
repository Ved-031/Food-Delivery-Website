import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {

  const navigate = useNavigate()
  const { cartItems, cartTotal, removeFromCart, food_list } = useContext(StoreContext)

  return (
    <div className='mt-5 px-5 md:px-10 lg:px-16'>
      <div className='my-10'>
        <div className='cart-items-title items-center text-gray-600 font-medium text-[12px] md:text-[15px] lg:text-[18px]'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='mt-0'/>
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return (
              <div>
                <div className='cart-items-title items-center hover:bg-gray-50 lg:p-2 py-2 lg:rounded-lg transition text-zinc-700 text-[10px] md:text-[12px] lg:text-[15px]'>
                  <img src={item.image} alt="" className='w-10 lg:w-16'/>
                  <p className=''>{item.name}</p>
                  <p className='text-zinc-700'>${item.price}</p>
                  <p className='text-zinc-700 lg:pl-5'>{cartItems[item._id]}</p>
                  <p className='text-zinc-700 lg:pl-2'>${item.price * cartItems[item._id]}</p>
                  <i className="fa-solid fa-xmark px-2 md:px-4 cursor-pointer" onClick={()=>removeFromCart(item._id)}></i>
                </div>
                <hr />
              </div>
            )
          }
        })}
      </div>
      <div className='md:flex md:px-10 items-center justify-between'>
        <div className='my-5 w-3/4 md:w-1/2 lg:w-1/2'>
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
          <button onClick={()=>navigate('/order')} className='bg-orange-500 text-white font-medium px-3 py-2 lg:py-3 rounded-lg cursor-pointer text-sm'>Proceed to Checkout</button>
        </div>
        <div className='my-10 md:my-0'>
          <div className='flex flex-col items-start gap-2 md:gap-4 lg:gap-6'>
            <p className='text-sm lg:text-[18px] font-medium'>If you have a promo code, Enter it here</p>
            <div className='flex items-center bg-gray-100 rounded-lg lg:w-full'>
              <input type="text" placeholder='Promo code' className='bg-transparent text-sm py-2 lg:py-3 px-3 lg:px-6 outline-none text-black'/>
              <button className='bg-orange-500 text-white text-sm font-medium px-3 py-2 lg:py-3 w-full h-full rounded-r-lg'>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart