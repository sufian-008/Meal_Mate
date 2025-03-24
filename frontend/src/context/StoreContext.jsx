import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/assets";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});

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
      
    useEffect(()=>{
        console.log(cartItems);
    }, [cartItems])
    
    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
