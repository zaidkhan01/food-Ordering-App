import React from "react";
import { useContext } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";
import classes from "./HeaderButton.module.css";
const HeaderButton = (props) => {
  const cartctx = useContext(CartContext);

  const numberOfCartItem = cartctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);

  return (
    <button className={classes.button} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderButton;
