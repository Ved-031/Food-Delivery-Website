import React, { useContext } from 'react'
import { menu_list } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'

const Category = () => {

  const { category,setCategory } = useContext(StoreContext)

  return (
    <div className='mt-5 lg:px-12 flex flex-col items-start gap-4 lg:gap-7'>
      <h1 className='text-xl lg:text-2xl font-medium'>Our Menu</h1>
      <div className='flex items-center gap-7 lg:gap-12 w-full overflow-x-scroll no-scrollbar'>
        {
          menu_list.map((item, index) => {
            return (
              <div key={index} className='flex flex-col items-center gap-1 cursor-pointer' onClick={()=>setCategory(prev=>prev===item.menu_name?"all":item.menu_name)}>


                <div className='w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-white'>
                  <img src={`${item.menu_image}`} alt={item.menu_name} className={`w-full hover:border-orange-500 border-white hover:scale-105 transition rounded-full border-2 ${category === item.menu_name ? "activeNavItems": ""}`}/>
                </div>
                <span className={`font-[500] text-sm lg:text-lg ${category === item.menu_name ? "text-orange-500" : ""}`}>{item.menu_name}</span>
              </div>
            )
          })
        }
        {console.log(category)}
      </div>
    </div>
  )
}

export default Category