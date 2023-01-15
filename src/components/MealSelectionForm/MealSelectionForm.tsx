import React, { FC, useState } from "react";
import CounterInput from "../dumb/CounterInput/CounterInput";
import { Meal } from "../../interfaces/meal.enum";
import classNames from "classnames";

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

  const [selected, updateSelected] = useState(Meal.Breakfast);

  return (
    <div>
      <h3 className="mb-5 text-lg font-medium text-gray-900">
        Please select a meal
      </h3>
      <form defaultValue={selected}>
        <ul className="grid w-full gap-6 md:grid-cols-3">
          {selections.map(({ name, value }) => (
            <li>
              <input
                type="radio"
                id={value}
                name="hosting"
                value={value}
                className="hidden"
                required
                onChange={() => updateSelected(value)}
              ></input>
              <label
                htmlFor={value}
                className={classNames(
                  "inline-flex items-center justify-between w-full p-5 bg-white border rounded-lg cursor-pointer hover:bg-gray-100",
                  {
                    "border-blue-600 text-blue-600": selected === value,
                    "border-gray-200 text-gray-600": selected !== value,
                  }
                )}
              >
                <div className="block w-full text-lg font-semibold">{name}</div>
                {selected === value ? (
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
      </form>
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
