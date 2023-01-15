import React, { FC, useState } from "react";
import CounterInput from "../dumb/CounterInput/CounterInput";
import { Meal } from "../../interfaces/meal.enum";

interface MealSelectionFormProps {}

const MealTypeSelection = () => {
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

  return (
    <div>
      <h3 className="mb-5 text-lg font-medium text-gray-900">
        Please select a meal
      </h3>
      <ul className="grid w-full gap-6 md:grid-cols-3">
        {selections.map(({ name, value }) => (
          <li>
            <input
              type="radio"
              id={value}
              name="hosting"
              value={value}
              className="hidden peer"
              required
            ></input>
            <label
              htmlFor={value}
              className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
            >
              <div className="block w-full text-lg font-semibold">{name}</div>
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
        ))}
      </ul>
    </div>
  );
};

const PartySize = () => {
  const [partySize, updatePartySize] = useState(1);

  return (
    <div>
      <h3 className="mb-5 text-lg font-medium text-gray-900">
        Please Enter number of people
      </h3>
      <div className="flex text-gray-600 items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z"
            clipRule="evenodd"
          />
          <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
        </svg>
        <CounterInput
          min={1}
          max={10}
          currentValue={partySize}
          onIncrease={() => updatePartySize(partySize + 1)}
          onDecrease={() => updatePartySize(partySize - 1)}
        ></CounterInput>
      </div>
    </div>
  );
};

const MealSelectionForm: FC<MealSelectionFormProps> = () => (
  <div className="flex flex-col gap-8" data-testid="MealSelectionForm">
    <MealTypeSelection></MealTypeSelection>
    <PartySize></PartySize>
  </div>
);

export default MealSelectionForm;
