import React, { FC } from "react";
import CounterInput from "../dumb/CounterInput/CounterInput";
import { Meal } from "../../interfaces/meal.enum";

interface MealSelectionFormProps {}

const MEAL_SELECTIONS = Object.values(Meal);

const MealSelectionForm: FC<MealSelectionFormProps> = () => (
  <div className="flex flex-col gap-16" data-testid="MealSelectionForm">
    <div>
      <h3 className="mb-5 text-lg font-medium text-gray-900">
        Please select a meal
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-3">
        <li>
          <input
            type="radio"
            id="breakfast"
            name="hosting"
            value="breakfast"
            className="hidden peer"
            required
          ></input>
          <label
            htmlFor="breakfast"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block w-full text-lg font-semibold">Breakfast</div>
            <svg
              aria-hidden="true"
              className="w-6 h-6 ml-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="lunch"
            name="hosting"
            value="lunch"
            className="hidden peer"
            required
          ></input>
          <label
            htmlFor="lunch"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block w-full text-lg font-semibold">Lunch</div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              fill="none"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
              />
            </svg>
          </label>
        </li>
        <li>
          <input
            type="radio"
            id="dinner"
            name="hosting"
            value="dinner"
            className="hidden peer"
            required
          ></input>
          <label
            htmlFor="dinner"
            className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
          >
            <div className="block w-full text-lg font-semibold">Dinner</div>
            <svg
              aria-hidden="true"
              className="w-6 h-6 ml-3"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </label>
        </li>
      </ul>
    </div>
    <div>
      <h3 className="mb-5 text-lg font-medium text-gray-900">
        Please Enter number of people
      </h3>
      <CounterInput></CounterInput>
    </div>
  </div>
);

export default MealSelectionForm;
