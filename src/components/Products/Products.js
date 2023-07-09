import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Products.css";

const Products = props => {
  const { name, img, seller, price, ratings } = props.productProps;
  const { handleAddToCart } = props;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: $ {price}</p>
        <p>Seller: {seller}</p>
        <p>Rating: {ratings} stars</p>
      </div>
      <button
        className="btn-cart"
        onClick={() => handleAddToCart(props.productProps)}
      >
        <p className="btn-text">Add to Cart</p>
        <FontAwesomeIcon icon={faShoppingCart} />
      </button>
    </div>
  );
};

export default Products;
