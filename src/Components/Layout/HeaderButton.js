import React from "react";
import { useContext, useState } from "react";

import CartIcon from "../Cart/CartIcon";
import CartContext from "../../Store/Cart-Context";
import classes from "./HeaderButton.module.css";
import { useEffect } from "react";
const HeaderButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const cartctx = useContext(CartContext);
  const { items } = cartctx;
  const numberOfCartItem = cartctx.items.reduce((currNumber, item) => {
    return currNumber + item.amount;
  }, 0);
  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);
    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);
    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span> your Cart</span>
      <span className={classes.badge}>{numberOfCartItem}</span>
    </button>
  );
};
export default HeaderButton;
