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

  const placeOrder = async (event) =>{
  
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) =>{
      if(cartItems[item._id] > 0){
        let itemInfo = item;
        itemInfo["quantity"]= cartItems[items]
      }
    })
  }
 
       
  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input name='firstName' onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First Name" />
          <input name='lastName' onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last Name" />
        </div>
        <input name='email' onChange={onChangeHandler} value={data.email} type="text" placeholder="Email Address" />
        <input name='street' onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />

        <div className="multi-fields">
          <input type="text" placeholder="City" name="city" onChange={onChangeHandler} value={data.city} />
          <input type="text" placeholder="States" name="state" onChange={onChangeHandler} value={data.state} />
        </div>

        <div className="multi-fields">
          <input type="text" placeholder="Zip code" name="zipcode" onChange={onChangeHandler} value={data.zipcode} />
          <input type="text" placeholder="Country" name="country" onChange={onChangeHandler} value={data.country}/>
        </div>
        <input type="text" placeholder="Phone" name="phone" onChange={onChangeHandler} value={data.phone}/>
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
