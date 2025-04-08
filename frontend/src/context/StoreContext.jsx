import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    
     const url ="http://localhost:4000"
     const [token, setToken] = useState("");
    

    // Add to cart 
    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // If not in cart, set to 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // If item is not in cart, do nothing
            const updatedCart = { ...prev };
            updatedCart[itemId] -= 1;
            if (updatedCart[itemId] <= 0) delete updatedCart[itemId]; // Remove item if count is 0
            return updatedCart;
        });
    };

    const getTotalCartAmount = () =>{
        let totalAmount = 0;
        for(const item in cartItems){
          if(cartItems[item]>0){
            let itemInfo = food_list.find((product)=>product._id === item);
            totalAmount += itemInfo.price*cartItems[item];
          }

            
        }
        return totalAmount;
    }
      
    useEffect(()=>{
         if(localStorage.getItem("token")){
           setToken(localStorage.getItem("token"));
         }


    }, [])
    
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
