import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "./features/productsSlice";
import { addToCart, removeFromCart } from "./features/cartSlice";
import Product from "./Product";
import ShoppingCart from "./ShoppingCart";
import "./App.css";

function App() {
  const products = useSelector((state) => state.products);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        dispatch(setProducts(response.data));
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Product List</h1>
      <div className="product-container">
        <div className="product-grid">
          {products.map((product) => (
            <Product
              key={product.id}
              product={product}
              addToCart={(product) => dispatch(addToCart(product))}
            />
          ))}
        </div>
        <ShoppingCart
          cart={cart}
          removeFromCart={(index) => dispatch(removeFromCart(index))}
        />
      </div>
    </div>
  );
}

export default App;
