import React, { useState } from 'react'
import Category from '../../components/Category/Category'
import Menu from '../../components/Menu/Menu'

const Home = () => {

  const [category, setCategory] = useState("all")

  return (
    <div className='w-full px-5'>
      <Category category={category} setCategory={setCategory}/>
      {/* <Menu category={category}/> */}
    </div>
  )
}

export default Home