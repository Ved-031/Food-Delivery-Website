import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodCard from '../FoodCard/FoodCard'

const Menu = () => {

    const { foodList,category } = useContext(StoreContext)

   return (
    <div className='mt-5 lg:mt-8 md:px-5 flex items-center justify-center lg:px-10 w-full'>
        <div className='flex flex-wrap gap-y-5 gap-x-8 sm:gap-x-10 md:gap-x-12 items-center w-full mx-auto'>
            {foodList.map((item,index)=>{
                if(category === "all" || category === item.category){
                    return (
                        <FoodCard key={index} item={item}/>
                    )
                } 
            })}
        </div>
    </div>
  )
}

export default Menu