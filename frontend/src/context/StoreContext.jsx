import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState({});
    
     const url ="http://localhost:4000"
     const [token, setToken] = useState("");
     const [food_list, setFoodList] = useState([]);
    

    // Add to cart 
    const addToCart = async (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1, // If not in cart, set to 1

        }));

        if(token){
            await axios.post(url+"/api/cart/add",{itemId},{headers:{token}})
        }
    };

    const removeFromCart = async (itemId) => {
        setCartItems((prev) => {
            if (!prev[itemId]) return prev; // If item is not in cart, do nothing
            const updatedCart = { ...prev };
            updatedCart[itemId] -= 1;
            if (updatedCart[itemId] <= 0) delete updatedCart[itemId]; // Remove item if count is 0
            return updatedCart;
        });

        if (token){
             await axios.post(url+"/api/cart/remove",{itemId},{header:{token}})
        }
    };

    const getTotalCartAmount = () => {
        let total = 0;
        for (const itemId in cartItems) {
          if (cartItems[itemId] > 0) {
            const item = food_list.find(product => product._id === itemId);
            if (item) {
              total += item.price * cartItems[itemId];
            }
          }
        }
        return total;
      };
    const fetchFoodList = async ()=>{
        const response =await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }

    const loadCartData = async (token) =>{
        const response = await axios.post(url+"/api/cart/get",{},{headers:{token}});
        setCartItems(response.data.cartData);
    }
      
    useEffect(()=>{
         
         async function loadData( ) {
            await fetchFoodList();
            if(localStorage.getItem("token")){
                setToken(localStorage.getItem("token"));
                await loadCartData(localStorage.getItem("token"));
             }
         }
         loadData();
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
