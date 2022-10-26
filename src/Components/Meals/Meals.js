import React, { Fragment } from "react";
import MealsSummary from "./MealsSummary";
import DummyMeals from "./DummyMeals";
const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <DummyMeals />
    </Fragment>
  );
};
export default Meals;
