import React, { useContext, useState } from "react";
import './PlaceOrder.css';
import { StoreContext } from "../../context/StoreContext";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, food_list,cartItems, url } = useContext(StoreContext);
  const [data, setData]= useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:""
  })

  const onChangeHandler = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setData(data=>({
        ...data,[name]:value
    }))
  }
       
  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder="Email Address" />
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="States" />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone" />
      </div>

      <div className="place-order-right">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>$6</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount() + 6}</b>
            </div>
            <button type="submit">PROCEED TO PAYMENT</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
