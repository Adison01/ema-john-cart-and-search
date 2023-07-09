import React, { useEffect, useState } from "react";
import "./Shop.css";
import Products from "../Products/Products";
import Cart from "../Cart/Cart";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);
  const handleAddToCart = sendProduct => {
    console.log(sendProduct);
    const newCart = [...cart, sendProduct];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map(product => (
          <Products
            key={product.id}
            productProps={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
