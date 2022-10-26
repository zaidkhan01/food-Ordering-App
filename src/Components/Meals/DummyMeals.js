import classes from "./DummyMeals.module.css";
import CardIcon from "../UI/CardIcon";
import MealItem from "./MealItem/MealItem";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Paneer",
    description: "with Salad and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Biryani",
    description: "A Indian specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Chiken Burger",
    description: "Indian, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Salad Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const DummyMeals = () => {
  const MealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <CardIcon>
        <ul>{MealsList}</ul>
      </CardIcon>
    </section>
  );
};
export default DummyMeals;
