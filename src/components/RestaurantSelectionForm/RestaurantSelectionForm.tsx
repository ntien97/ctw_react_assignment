import React, { FC } from "react";
import styles from "./RestaurantSelectionForm.module.css";

interface RestaurantSelectionFormProps {
}

const RestaurantSelectionForm: FC<RestaurantSelectionFormProps> = () => (
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
            {/*todo: retrieve the list from the api*/}
            <option>M Coffee</option>
            <option>B Coffee</option>
            <option>A Coffee</option>
          </select>
        </div>
      </div>
    </div>
  </div>
);

export default RestaurantSelectionForm;
