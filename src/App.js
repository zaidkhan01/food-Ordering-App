import React, { Fragment, useState } from "react";

import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import Card from "./Components/Cart/Card";
import CartProvider from "../src/Store/CartProvider";
const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <CartProvider>
      {cartIsShown && <Card onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
};

export default App;
