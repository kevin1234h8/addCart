import React from "react";
import { Button } from "@mui/material";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
const product = ({ item, handleClick }) => {
  return (
    <div className="item-container">
      <img className="item-img" src={item.img} alt="" width={200} />
      <div className="item-name">{item.name}</div>
      <div className="item-price">{item.price}</div>
      <div className="item-description">{item.description}</div>
      <Button
        onClick={() => handleClick(item)}
        disableRipple
        variant="outlined"
        startIcon={<ShoppingBagIcon />}
      >
        Buy
      </Button>
    </div>
  );
};

export default product;
