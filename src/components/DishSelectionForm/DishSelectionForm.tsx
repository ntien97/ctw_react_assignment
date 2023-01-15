import React, { FC, useState } from "react";
import { Dish } from "../../interfaces/dish.interface";
import CounterInput from "../dumb/CounterInput/CounterInput";

interface DishSelectionFormProps {
  dishes: Dish[];
}

const DishBlock: FC<{
  dish: Dish;
}> = ({ dish }) => {
  const [currentDishCount, updateCurrentDishCount] = useState(0);

  return (
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
        currentValue={currentDishCount}
        onIncrease={() => currentDishCount + 1}
        onDecrease={() => currentDishCount - 1}
      ></CounterInput>
    </div>
  );
};
const DishSelectionForm: FC<DishSelectionFormProps> = ({ dishes }) => (
  <>
    <h3 className="mb-5 text-lg font-medium text-gray-900">
      Please Pre-order your food
    </h3>
    <div className="grid grid-cols-3 gap-3">
      {dishes.map((dish) => (
        <DishBlock dish={dish}></DishBlock>
      ))}
    </div>
  </>
);

export default DishSelectionForm;
