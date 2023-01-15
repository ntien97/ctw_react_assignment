import React, { FC } from "react";
import { Meal } from "../../../interfaces/meal.enum";
import classNames from "classnames";
import { MealSelectionFormProps } from "../MealSelectionForm";

type MealTypeSelectionProps = Pick<
  MealSelectionFormProps,
  "selectedMeal" | "updateSelectedMeal"
>;

const selections = [
  {
    name: "Breakfast",
    value: Meal.Breakfast,
  },
  {
    name: "Lunch",
    value: Meal.Lunch,
  },
  {
    name: "Dinner",
    value: Meal.Dinner,
  },
];
const MealTypeSelection: FC<MealTypeSelectionProps> = ({
  selectedMeal,
  updateSelectedMeal,
}) => (
  <div>
    <h3 className="mb-5 text-lg font-medium text-gray-900">
      Please select a meal
    </h3>

    <ul className="grid w-full gap-6 md:grid-cols-3">
      {selections.map(({ name, value }) => (
        <li key={value}>
          <input
            type="radio"
            id={value}
            name="hosting"
            value={value}
            className="hidden"
            required
            onChange={() => updateSelectedMeal(value)}
          ></input>
          <label
            htmlFor={value}
            className={classNames(
              "inline-flex items-center justify-between w-full p-5 bg-white border rounded-lg cursor-pointer hover:bg-gray-100",
              {
                "border-blue-600 text-blue-600": selectedMeal === value,
                "border-gray-200 text-gray-600": selectedMeal !== value,
              }
            )}
          >
            <div className="block w-full text-lg font-semibold">{name}</div>
            {selectedMeal === value ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6 ml-3"
              >
                <path
                  fillRule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-3"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            )}
          </label>
        </li>
      ))}
    </ul>
  </div>
);

export default MealTypeSelection;
