import React, { FC } from "react";
import CounterInput from "../../dumb/CounterInput/CounterInput";
import { Dish } from "../../../interfaces/dish.interface";

interface DishBlockProps {
  readonly dish: Dish;
  readonly currentCount: number;
  readonly updateCount: (count: number) => void;
}

const DishBlock: FC<DishBlockProps> = ({ dish, currentCount, updateCount }) => (
  <div className="flex flex-col gap-8 items-end justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg">
    <div className="flex items-center w-full text-lg font-semibold content-start gap-2">
      <img
        className="w-10 h-10 aspect-square border border-gray-200 rounded"
        src="/abc.jpg"
        alt="no-image-available"
      ></img>
      <span>{dish.name}</span>
    </div>
    <CounterInput
      max={1000}
      min={0}
      currentValue={currentCount}
      onIncrease={() => updateCount(currentCount + 1)}
      onDecrease={() => updateCount(currentCount - 1)}
    ></CounterInput>
  </div>
);

export default DishBlock;
