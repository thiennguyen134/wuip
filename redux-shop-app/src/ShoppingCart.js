import React from "react";

function ShoppingCart({ cart, removeFromCart }) {
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <ul className="cart-list">
        {cart.map((item, index) => (
          <li key={index}>
            <div className="cart-item-image">
              <img src={item.image} alt={item.title} />
            </div>
            {item.title} - {item.price} USD
            <button onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotal()} USD</p>
    </div>
  );
}

export default ShoppingCart;
