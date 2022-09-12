import React from "react";
import Badge from "@mui/material/Badge";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = ({ setOpenCart, add }) => {
  return (
    <div className="navbar-container">
      <div className="title" onClick={() => setOpenCart(true)}>
        CAMERA
      </div>
      <Badge badgeContent={add.length} color="primary">
        <ShoppingCartIcon
          className="ShoppingCartIcon"
          onClick={() => setOpenCart(false)}
        />
      </Badge>
    </div>
  );
};

export default Navbar;
