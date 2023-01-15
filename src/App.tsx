import React from "react";
import "./App.css";
import MealSelectionForm from "./components/MealSelectionForm/MealSelectionForm";
import RestaurantSelectionForm from "./components/RestaurantSelectionForm/RestaurantSelectionForm";
import Dishes from "./data/dishes.json";
import { Dish } from "./interfaces/dish.interface";
import { Restaurant } from "./interfaces/restaurant.interface";
import { Meal } from "./interfaces/meal.enum";
import Stepper from "./components/dumb/Stepper/Stepper";

function App() {
  const dishes: Dish[] = Dishes.dishes.map(({ availableMeals, ...remain }) => ({
    ...remain,
    availableMeals: availableMeals as Meal[],
  }));

  const restaurants: Restaurant[] = Object.values(
    dishes.reduce<{ [key: string]: Restaurant }>(
      (restaurantMap, currentDish) => {
        const { restaurant, ...dish } = currentDish;

        return {
          ...restaurantMap,
          [restaurant]: restaurantMap[restaurant]
            ? {
                ...restaurantMap[restaurant],
                availableDish: [
                  ...restaurantMap[restaurant].availableDish,
                  dish,
                ],
                availableMeals: [
                  ...new Set([
                    ...restaurantMap[restaurant].availableMeals,
                    ...dish.availableMeals,
                  ]),
                ],
              }
            : {
                name: restaurant,
                availableDish: [dish],
                availableMeals: dish.availableMeals,
              },
        };
      },
      {}
    )
  );

  return (
    <div className="grid h-screen place-items-center">
      <Stepper
        steps={[
          {
            name: "Meal",
            description: "Something",
            component: <MealSelectionForm></MealSelectionForm>,
          },
          {
            name: "Restaurant",
            description: "Select restaurant",
            component: (
              <RestaurantSelectionForm
                restaurants={restaurants}
              ></RestaurantSelectionForm>
            ),
          },
          {
            name: "Dish",
            description: "Select dish",
            component: <></>,
          },
          {
            name: "Confirm",
            description: "Confirm your order",
            component: <></>,
          },
        ]}
        activeIndex={0}
      ></Stepper>
    </div>
  );
}

export default App;
