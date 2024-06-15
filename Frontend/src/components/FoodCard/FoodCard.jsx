import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const FoodCard = ({item}) => {

  const { cartItems,addToCart,removeFromCart,url } = useContext(StoreContext)

  return (
    <div className='max-w-48 rounded-xl pb-3 bg-gray-50 transition hover:-translate-y-1 hover:shadow-md relative'>
        <img src={`${url}/images/${item.image}`} alt="" className='w-full rounded-t-lg mb-2'/>
        {!cartItems[item._id] ? 
                    <img src={assets.add_icon_white} alt="add" className='w-7 cursor-pointer absolute right-2 top-28' onClick={()=>addToCart(item._id)}/>
                    :
                    <div className='flex items-center gap-2 bg-white rounded-2xl px-2 py-1 absolute right-2 top-28'>
                        <img src={assets.remove_icon_red} alt="remove" className='w-6 cursor-pointer' onClick={()=>removeFromCart(item._id)}/>
                        <span className='font-medium'>{cartItems[item._id]}</span>
                        <img src={assets.add_icon_green} alt="add" className='w-6 cursor-pointer' onClick={()=>addToCart(item._id)}/>
                    </div>
                }
        <div className='px-2 flex flex-col items-start gap-2'>
            <h3 className='text-[16px] font-medium'>{item.name}</h3>
            <p className='text-sm text-zinc-500'>{item.description}</p>
            <p className='font-medium text-xl text-orange-500 mt-1'>${item.price}</p>
        </div>
    </div>
  )
}

export default FoodCard