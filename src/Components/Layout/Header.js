import React, { Fragment } from "react";
import mealImage from "../../Assets/meal.jpg";
import { useContext } from "react";
import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";
import CartContext from "../../Store/Cart-Context";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Delicious Food Store</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
