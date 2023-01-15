import React, { useState } from "react";
import "./App.css";
import MealSelectionForm from "./components/MealSelectionForm/MealSelectionForm";
import RestaurantSelectionForm from "./components/RestaurantSelectionForm/RestaurantSelectionForm";
import Dishes from "./data/dishes.json";
import { Dish } from "./interfaces/dish.interface";
import { Restaurant } from "./interfaces/restaurant.interface";
import { Meal } from "./interfaces/meal.enum";
import Stepper from "./components/dumb/Stepper/Stepper";
import DishSelectionForm from "./components/DishSelectionForm/DishSelectionForm";
import { Reservation } from "./interfaces/reservation.interface";

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

  const [activeIndex, updateActiveIndex] = useState(0);
  const [selectedRestaurant, updateSelectedRestaurant] = useState<string>();

  const [reservation, updateReservation] = useState<Reservation>({
    meal: Meal.Breakfast,
    partySize: 1,
    restaurant: "",
    dishes: [],
  });

  return (
    <div className="grid h-screen place-items-center">
      <div className="max-w-screen-xl p-8 border border-gray-200 rounded-lg shadow-md">
        <Stepper
          // todo: move this step header props inside
          steps={[
            {
              name: "Meal",
              description: "Select meal & party size",
            },
            {
              name: "Restaurant",
              description: "Select restaurant",
              hideNextBtn: true,
            },
            {
              name: "Dish",
              description: "Select dish",
            },
            {
              name: "Confirm",
              description: "Confirm your order",
            },
          ]}
          activeIndex={activeIndex}
          onPrevious={() => updateActiveIndex(activeIndex - 1)}
          onNext={() => updateActiveIndex(activeIndex + 1)}
        >
          <MealSelectionForm
            selectedMeal={reservation.meal}
            // todo: check if this is a good way to update state
            updateSelectedMeal={(meal) =>
              updateReservation({ ...reservation, meal })
            }
            partySize={reservation.partySize}
            updatePartySize={(partySize) =>
              updateReservation({
                ...reservation,
                partySize,
              })
            }
          ></MealSelectionForm>
          <RestaurantSelectionForm
            selectedMealType={reservation.meal}
            onSelected={(restaurant) => {
              updateActiveIndex(activeIndex + 1);
              updateReservation({
                ...reservation,
                restaurant,
              });
            }}
          ></RestaurantSelectionForm>
          <DishSelectionForm
            dishes={dishes.filter(
              (dish) => dish.restaurant === selectedRestaurant
            )}
          ></DishSelectionForm>
          <></>
        </Stepper>
      </div>
    </div>
  );
}

export default App;
