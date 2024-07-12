import React from "react";

function Product({ product, addToCart }) {
  return (
    <div className="product-grid-item">
      <div className="product-image">
        <img src={product.image} alt={product.title} />
      </div>
      <h3>{product.title}</h3>
      <p>{product.description.slice(0, 20)}...</p>
      <p>Category: {product.category}</p>
      <p>Price: {product.price} USD</p>
      <button onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default Product;
