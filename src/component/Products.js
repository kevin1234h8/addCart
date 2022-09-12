import React from "react";
import items from "./items";
import Product from "./Product";
const Products = ({ handleClick }) => {
  return (
    <div className="product-container">
      {items.map((item) => (
        <div key={item.name}>
          <Product item={item} handleClick={handleClick} />
        </div>
      ))}
    </div>
  );
};

export default Products;
