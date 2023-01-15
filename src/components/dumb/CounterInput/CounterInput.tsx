import React, { FC } from "react";

interface CounterInputProps {
  readonly max: number;
  readonly min: number;
  readonly currentValue: number;
  readonly onIncrease: () => void;
  readonly onDecrease: () => void;
}

const CounterInput: FC<CounterInputProps> = ({
  onIncrease,
  onDecrease,
  currentValue,
  min,
  max,
}) => (
  <div
    className="flex flex-row h-10 rounded-lg bg-transparent "
    data-testid="CounterInput"
  >
    <button
      disabled={currentValue === min}
      onClick={onDecrease}
      data-action="decrement"
      className="p-2 disabled:cursor-not-allowed disabled:opacity-50 border border-gray bg-white text-gray-600 hover:text-gray-600 hover:bg-gray-100 h-full w-8 rounded-l cursor-pointer outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full"
      >
        <path
          fillRule="evenodd"
          d="M3.75 12a.75.75 0 01.75-.75h15a.75.75 0 010 1.5h-15a.75.75 0 01-.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </button>
    <input
      min={min}
      max={max}
      type="number"
      className="w-16 outline-none focus:outline-none text-center border border-gray bg-white font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
      value={currentValue}
      disabled
    ></input>
    <button
      disabled={currentValue === max}
      onClick={onIncrease}
      data-action="increment"
      className="p-2 disabled:cursor-not-allowed disabled:opacity-50 border border-gray bg-white text-gray-600 hover:text-gray-600 hover:bg-gray-100 h-full w-8 rounded-r cursor-pointer outline-none"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="w-full"
      >
        <path
          fillRule="evenodd"
          d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  </div>
);

export default CounterInput;
