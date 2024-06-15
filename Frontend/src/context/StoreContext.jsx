import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const url = 'http://localhost:3000';
    const [category, setCategory] = useState("all")
    const [cartItems, setCartItems] = useState({})
    const [token, setToken] = useState("");
    const [foodList, setFoodList] = useState([]);
   
    const addToCart = (itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((prev)=>({...prev, [itemId]:1}))
        }else{
            setCartItems((prev)=>({...prev, [itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId)=>{
        setCartItems((prev)=>({...prev, [itemId]:prev[itemId]-1}))
    }

    const cartTotal = ()=>{
        let total = 0
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo = foodList.find((product)=>product._id === item)
                total += itemInfo.price * cartItems[item]
            }
        }
        return total
    }

    const fetchFoodList = async ()=>{
        const response = await axios.get(`${url}/api/food/list`);
        if(response.data.success){
            setFoodList(response.data.data);
        }else{
            console.log(response.data.message);
        }
    }

    useEffect(()=>{
        async function loadData(){
            await fetchFoodList();
        }
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
        loadData()
    },[])

    const contextValue = {
        foodList,
        category,
        cartItems,
        url,
        token,
        setToken,
        setCartItems,
        addToCart,
        removeFromCart,
        setCategory,
        cartTotal,
    }

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider