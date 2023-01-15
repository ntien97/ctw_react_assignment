import React, { FC } from "react";
import styles from "./CounterInput.module.css";

interface CounterInputProps {}

const CounterInput: FC<CounterInputProps> = () => (
  <div className={styles.CounterInput} data-testid="CounterInput">
    <label
      htmlFor="custom-input-number"
      className="block text-sm font-medium text-gray-700"
    >
      Please Enter number of people
    </label>
    <div className="flex flex-row h-10 w-full rounded-lg relative bg-transparent mt-1">
      <button
        data-action="decrement"
        className=" border border-gray bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-l cursor-pointer outline-none"
      >
        <span className="m-auto text-2xl font-thin">−</span>
      </button>
      <input
        type="number"
        className="outline-none focus:outline-none text-center w-full border border-gray bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
        name="custom-input-number"
        value="0"
      ></input>
      <button
        data-action="increment"
        className="border border-gray bg-white text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-20 rounded-r cursor-pointer"
      >
        <span className="m-auto text-2xl font-thin">+</span>
      </button>
    </div>
  </div>
);

export default CounterInput;
