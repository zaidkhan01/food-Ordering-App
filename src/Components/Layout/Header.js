import React, { Fragment } from "react";
import mealsImage from "../../Assets/meals.jpg";
import { useContext } from "react";
import HeaderButton from "./HeaderButton";
import classes from "./Header.module.css";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="A table full of delicious food" />
      </div>
    </Fragment>
  );
};
export default Header;
