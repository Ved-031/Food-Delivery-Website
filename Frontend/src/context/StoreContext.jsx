import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props)=>{

    const url = 'http://localhost:3000';
    const [category, setCategory] = useState("all")
    const [cartItems, setCartItems] = useState({})
    const [token, setToken] = useState("");
   
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
                let itemInfo = food_list.find((product)=>product._id === item)
                total += itemInfo.price * cartItems[item]
            }
        }
        return total
    }

    useEffect(()=>{
        if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
        }
    },[])

    const contextValue = {
        food_list,
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