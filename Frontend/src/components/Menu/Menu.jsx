import React from 'react'
import { assets } from '../../assets/assets'
import food from '../../assets/food_1.png'

const Menu = ({category}) => {
  return (
    <div className='mt-5'>
        <div>
            <div className='max-w-52 rounded-lg px-2 py-3 bg-gray-50 flex flex-col items-start gap-2'>
                <img src={food} alt="" className='w-full rounded-lg'/>
                <h3 className='text-xl font-medium'>Food</h3>
                <p className='text-sm text-zinc-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor molestiae maxime cupiditate, esse voluptatibus sit?</p>
                <div className='flex w-full items-center justify-between'>
                    <p className='font-medium text-xl text-orange-500'>$12</p>
                    <div className='flex items-center gap-2'>
                        <button>
                            <img src={assets.remove_icon_red} alt="" className='w-7'/>
                        </button>
                        <span className='font-bold'>1</span>
                        <button>
                            <img src={assets.add_icon_green} alt="" className='w-7'/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Menu