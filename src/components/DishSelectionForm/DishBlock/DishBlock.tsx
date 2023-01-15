import React, { FC } from "react";
import CounterInput from "../../dumb/CounterInput/CounterInput";
import { Dish } from "../../../interfaces/dish.interface";

interface DishBlockProps {
  readonly dish: Dish;
  readonly currentCount: number;
  readonly updateCount: (count: number) => void;
}

const DishBlock: FC<DishBlockProps> = ({ dish, currentCount, updateCount }) => (
  <div className="flex flex-row gap-4 items-start justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg">
    <img
      className="flex flex-grow w-20 h-20 aspect-square border border-gray-200 rounded"
      src={`./assets/dish/${dish.name}.png`}
      alt="no-image-available"
    ></img>
    <div className="flex flex-col items-end w-full text-lg font-semibold content-start gap-2">
      <div className="w-full flex flex-row justify-start"><span className="font-bold">{dish.name}</span></div>
      <CounterInput
        max={1000}
        min={0}
        currentValue={currentCount}
        onIncrease={() => updateCount(currentCount + 1)}
        onDecrease={() => updateCount(currentCount - 1)}
      ></CounterInput>
    </div>

  </div>
);

export default DishBlock;
