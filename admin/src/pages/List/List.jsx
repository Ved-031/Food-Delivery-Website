import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list, setlist] = useState([]);

  const fetchList = async ()=>{
    const response = await axios.get(`${url}/api/food/list`);
    if (response.data.success) {
        setlist(response.data.data);
    }else{
        toast.error('Something went wrong!');
    }
  }

  const removeFood = async (foodId)=>{
    const response = await axios.post(`${url}/api/food/remove`, {id:foodId});
    await fetchList();
    if(response.data.success){
        toast.success(response.data.message);
    }else{
        toast.error("Something went wrong!");
    }
  }

  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='flex flex-col items-start mt-5 ml-5'>
        <p className='text-[16px] font-medium mb-5'>All Food Items</p>
        <div>
            <table class="table-auto w-full border-spacing-2 border-separate rounded">
                <thead className="text-left text-gray-700 text-sm lg:text-[16px]">
                    <tr>
                        <th className="py-4 pl-1">Image</th>
                        <th className="py-4 pl-4">Name</th>
                        <th className="py-4 pl-4">Category</th>
                        <th className="py-4 pl-4">Price</th>
                        <th className="py-4 pl-4">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map((item, index)=>{
                        return (
                            <tr key={index} className="mt-5 rounded-lg">
                                <td>
                                    <img src={`${url}/images/` + item.image} alt="" className='w-12'/>
                                </td>
                                <td className="py-4 text-sm text-gray-500 px-4">{item.name}</td>
                                <td className="py-4 text-sm text-gray-500 px-4">{item.category}</td>
                                <td className="py-4 text-sm text-gray-500 px-4">${item.price}</td>
                                <td><i className="fa-solid fa-xmark pl-7 cursor-pointer" onClick={()=>removeFood(item._id)}></i></td>
                            </tr>     
                        )
                    })}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default List