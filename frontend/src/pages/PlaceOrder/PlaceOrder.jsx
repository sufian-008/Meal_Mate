import React, { useContext, useState } from "react";
import './PlaceOrder.css';
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";

const PlaceOrder = () => {
  const {
    getTotalCartAmount,
    token,
    food_list,
    cartItems,
    url,
    user, 
  } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setData(prev => ({ ...prev, [name]: value }));
  };
  
  const placeOrder = async (event) => {
    event.preventDefault();

    // Construct ordered items from cart
    let orderItems = [];
    food_list.forEach(item => {
      if (cartItems[item._id] > 0) {
        orderItems.push({
          ...item,
          quantity: cartItems[item._id]
        });
      }
    });

    // Validate
    if (!user || !user._id) {
      alert("User not logged in");
      return;
    }

    const orderData = {
      userId: user._id,
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + 6,
    };

    try {
      const response = await axios.post(
        `$http://localhost:4000/api/order/place`,
        orderData,
        { headers: { token } }
      );

      if (response.data.success && response.data.session_url) {
        window.location.replace(response.data.session_url);
      } else {
        alert("Could not start payment. Please try again.");
      }
    } catch (err) {
      console.error("Order error:", err);
      alert("Something went wrong while placing the order.");
    }
  };

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input required name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
        <input required name='email' onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address" />
        <input required name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required type="text" placeholder="City" name="city" onChange={onChangeHandler} value={data.city} />
          <input required type="text" placeholder="State" name="state" onChange={onChangeHandler} value={data.state} />
        </div>
        <div className="multi-fields">
          <input required type="text" placeholder="Zip Code" name="zipcode" onChange={onChangeHandler} value={data.zipcode} />
          <input required type="text" placeholder="Country" name="country" onChange={onChangeHandler} value={data.country} />
        </div>
        <input required type="text" placeholder="Phone" name="phone" onChange={onChangeHandler} value={data.phone} />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>৳{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>৳6</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>৳{getTotalCartAmount() + 6}</b>
            </div>
            <button  ><a href="https://buy.stripe.com/test_6oU9ANbJq3GP3N74ZEeAg00" class="proceed-btn">PROCEED TO PAYMENT</a></button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
