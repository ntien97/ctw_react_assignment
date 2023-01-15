import React, { FC } from "react";
import { Restaurant } from "../../interfaces/restaurant.interface";
import { Meal } from "../../interfaces/meal.enum";
import Dishes from "../../data/dishes.json";
import RestaurantBlock from "./RestaurantBlock/RestaurantBlock";

// todo: move to use some kind of caching
const restaurants: Restaurant[] = Object.values(
  Dishes.dishes
    .map(({ availableMeals, ...remain }) => ({
      ...remain,
      availableMeals: availableMeals as Meal[],
    }))
    .reduce<{ [key: string]: Restaurant }>((restaurantMap, currentDish) => {
      const { restaurant, ...dish } = currentDish;

      return {
        ...restaurantMap,
        [restaurant]: restaurantMap[restaurant]
          ? {
              ...restaurantMap[restaurant],
              availableDish: [...restaurantMap[restaurant].availableDish, dish],
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
    }, {})
);

export interface RestaurantSelectionFormProps {
  readonly selectedMealType: Meal;
  readonly onSelected: (selectedRestaurant: string) => void;
}

const RestaurantSelectionForm: FC<RestaurantSelectionFormProps> = ({
  selectedMealType,
  onSelected,
}) => (
  <>
    <h3 className="mb-5 text-lg font-medium text-gray-900">
      Please Select a restaurant
    </h3>
    <div className="grid grid-cols-3 gap-3">
      {restaurants
        .filter((restaurant) =>
          restaurant.availableMeals.includes(selectedMealType)
        )
        .map((restaurant) => (
          <RestaurantBlock
            key={restaurant.name}
            restaurant={restaurant}
            onSelected={onSelected}
          ></RestaurantBlock>
        ))}
    </div>
  </>
);

export default RestaurantSelectionForm;
