import React, { useState } from "react";
import { Button } from "@mui/material";
import { useEffect } from "react";
const Cart = ({ add, setAdd, handleChange }) => {
  const [total, setTotal] = useState(0);

  const handleRemove = (id) => {
    const newAdd = add.filter((item) => item.id !== id);
    setAdd(newAdd);
    handlePrice();
  };

  const handlePrice = () => {
    let newTotal = 0;
    add.map((item) => (newTotal += item.amount * item.price));
    setTotal(newTotal);
  };

  useEffect(() => {
    handlePrice();
  });

  const notification = () => {
    alert("Thank you for your purchase! , your total is: $" + total, "success");
    setAdd([]);
  };
  return (
    <>
      <div className="cart-container">
        {add.map((item) => (
          <div className="cart-item" key={item.id}>
            <img className="item-img" src={item.img} alt="" width={150} />
            <div className="cart-name">{item.name}</div>
            <div className="plus-minus">
              <button onClick={() => handleChange(item, -1)}>-</button>
              <button>{item.amount}</button>
              <button onClick={() => handleChange(item, 1)}>+</button>
            </div>
            <div>{item.price}</div>
            <Button
              onClick={() => handleRemove(item.id)}
              disableRipple
              variant="outlined"
            >
              Remove
            </Button>
          </div>
        ))}
      </div>
      <div className="total">
        <div>Total : ${total}</div>
        <Button onClick={notification} variant="outlined">
          Purchase
        </Button>
      </div>
    </>
  );
};

export default Cart;
