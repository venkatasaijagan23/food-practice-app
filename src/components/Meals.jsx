import { useEffect, useState } from "react";
import MealItem from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch("http://localhost:3000/meals");
        const meals = await response.json();
        setMeals(meals);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMeals();
  }, []);
  return (
    <ul id="meals">
      {meals.map((meal) => (
        <MealItem key={meal.id} {...meal} />
      ))}
    </ul>
  );
};

export default Meals;
