import React, { FC } from "react";
import styles from "./MealSelectionForm.module.css";
import CounterInput from "../dumb/CounterInput/CounterInput";
import { Meal } from "../../interfaces/meal.enum";

interface MealSelectionFormProps {}

const MEAL_SELECTIONS = Object.values(Meal);

const MealSelectionForm: FC<MealSelectionFormProps> = () => (
  <div className={styles.MealSelectionForm} data-testid="MealSelectionForm">
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <label
          htmlFor="meal"
          className="block text-sm font-medium text-gray-700"
        >
          Please Select a meal
        </label>
        <select
          id="meal"
          name="meal"
          autoComplete="meal-name"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          {MEAL_SELECTIONS.map((meal) => (
            <option>{meal}</option>
          ))}
        </select>
      </div>
    </div>
    <div className="grid grid-cols-6 gap-6">
      <div className="col-span-6 sm:col-span-3">
        <CounterInput></CounterInput>
      </div>
    </div>
  </div>
);

export default MealSelectionForm;
