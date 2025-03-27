import React, { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
    const { cartItems, food_list, removeFromCart } = useContext(StoreContext);

    return (
        <div className='cart'>
            <div className="cart-items">
                <div className="cart-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
            </div>
            <br />
            <hr />
            {food_list && food_list.map((item, index) => {
                if (cartItems[item._id] > 0) {
                    return (
                        <div key={index} className="cart-items-title cart-items-item">
                            <img src={item.image} alt={item.name} />
                            <p>{item.name}</p>
                            <p>${item.price}</p>
                            <p>{cartItems[item._id]}</p>
                            <p>${item.price * cartItems[item._id]}</p>
                            <p onClick={() => removeFromCart(item._id)} style={{ cursor: 'pointer', color: 'red' }}>X</p>
                        </div>
                    );
                }
               
            })}
        </div>
    );
};

export default Cart;
