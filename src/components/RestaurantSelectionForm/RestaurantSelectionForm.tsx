import React, { FC } from "react";
import styles from "./RestaurantSelectionForm.module.css";
import { Restaurant } from "../../interfaces/restaurant.interface";

interface RestaurantSelectionFormProps {
  readonly restaurants: Restaurant[];
}

const RestaurantSelectionForm: FC<RestaurantSelectionFormProps> = ({
  restaurants,
}) => (
  <div
    className={styles.RestaurantSelectionForm}
    data-testid="RestaurantSelectionForm"
  >
    <div className={styles.MealSelectionForm} data-testid="MealSelectionForm">
      <div className="grid grid-cols-6 gap-6">
        <div className="col-span-6 sm:col-span-3">
          <label
            htmlFor="restaurant"
            className="block text-sm font-medium text-gray-700"
          >
            Please Select a restaurant
          </label>
          <select
            id="restaurant"
            name="restaurant"
            autoComplete="restaurant-name"
            className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          >
            {/*todo: Upgrade the restaurant componet*/}
            {restaurants.map((restaurant) => (
              <option>{restaurant.name}</option>
            ))}
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantSelectionForm;
