import React, { useEffect, useState } from 'react'
import { assets } from '../../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Add = () => {

  const url = 'http://localhost:3000';
  const [image, setImage] = useState(false);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });
  
  const onChangeHandler = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData(data=>({...data, [key]: value}))
  }

  const submitHandler = async (e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", Number(data.price));
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
        setData({
            name: "",
            description: "",
            category: "Salad",
            price: "",
          })
        setImage(false)
        toast.success(response.data.message);
    }else{
        console.log(response.data.message);
    }
  }

  return (
    <div className='w-[70%] md:w-[60%] ml-10 md:ml-12 mt-5 text-[#6d6d6d] text-[15px]'>
        <form className='flex flex-col gap-5' onSubmit={submitHandler}>
            <div className='flex flex-col gap-2'>
                <p>Upload Image</p>
                <label htmlFor="image">
                    <img src={image?URL.createObjectURL(image):assets.upload_area} alt="upload here" className='w-[120px] cursor-pointer'/>
                </label>
                <input type="file" id='image' hidden required onChange={(e)=>setImage(e.target.files[0])}/>
            </div>
            <div className='flex flex-col gap-1'>
                <p>Product Name</p>
                <input onChange={onChangeHandler} value={data.name} type="text" name='name' placeholder='Type here' className='px-3 py-2 rounded-lg border border-gray-100'/>
            </div>
            <div className='flex flex-col gap-1'>
                <p>Product description</p>
                <textarea onChange={onChangeHandler} value={data.description} name="description" rows="6" placeholder='Write content here' required className='px-3 py-2 rounded-lg border border-gray-100'></textarea>
            </div>
            <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                <div className='flex flex-col gap-1'>
                    <p>Product Category</p>
                    <select onChange={onChangeHandler} value={data.category} name="category" className='px-3 py-2 rounded-lg border border-gray-100 lg:w-full'>
                        <option value="Salad">Salad</option>
                        <option value="Rolls">Rolls</option>
                        <option value="Deserts">Deserts</option>
                        <option value="Sandwich">Sandwich</option>
                        <option value="Cake">Cake</option>
                        <option value="Pure Veg">Pure Veg</option>
                        <option value="Pasta">Pasta</option>
                        <option value="Noodels">Noodles</option>
                    </select>
                </div>
                <div className='flex flex-col gap-1'>
                    <p>Product Price</p>
                    <input onChange={onChangeHandler} value={data.price} type="number" name='price' placeholder='$20' required className='px-3 py-2 rounded-lg border border-gray-100 lg:w-1/2'/>
                </div>
            </div>
            <button type='submit' className='px-3 py-2 bg-orange-500 hover:bg-orange-400 transition text-white font-medium rounded-lg w-[40%] lg:w-[30%] cursor-pointer'>Add</button>
        </form>
    </div>
  )
}

export default Add