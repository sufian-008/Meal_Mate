import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setFoodList] = useState([]);
  const [user, setUser] = useState(null);

  const url = "https://meal-mate-lmh3.onrender.com";

  // Add item to cart
  const addToCart = async (itemId) => {
    if (!token) {
      alert("Please login to add items to your cart");
      return;
    }

    setCartItems((prev) => ({
      ...prev,
      [itemId]: (prev[itemId] || 0) + 1,
    }));

    await axios.post(url + "/api/cart/add", { itemId }, { headers: { token } });
  };

  // Remove item from cart
  const removeFromCart = async (itemId) => {
    if (!token) {
      alert("Please login to remove items from your cart");
      return;
    }

    setCartItems((prev) => {
      if (!prev[itemId]) return prev;
      const updatedCart = { ...prev };
      updatedCart[itemId] -= 1;
      if (updatedCart[itemId] <= 0) delete updatedCart[itemId];
      return updatedCart;
    });

    await axios.post(url + "/api/cart/remove", { itemId }, { headers: { token } });
  };

  // Total cart value
  const getTotalCartAmount = () => {
    let total = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const item = food_list.find((product) => product._id === itemId);
        if (item) {
          total += item.price * cartItems[itemId];
        }
      }
    }
    return total;
  };

  const fetchFoodList = async () => {
    const response = await axios.get(url + "/api/food/list");
    setFoodList(response.data.data);
  };

  const loadCartData = async (token) => {
    const response = await axios.post(url + "/api/cart/get", {}, { headers: { token } });
    setCartItems(response.data.cartData);
  };

  const fetchUserInfo = async (token) => {
    const response = await axios.get(url + "/api/user/userinfo", { headers: { token } });
    setUser(response.data.user);
  };

  useEffect(() => {
    async function loadData() {
      await fetchFoodList();
      const storedToken = localStorage.getItem("token");
      if (storedToken) {
        setToken(storedToken);
        await loadCartData(storedToken);
        await fetchUserInfo(storedToken);
      }
    }
    loadData();
  }, []);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    user,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
