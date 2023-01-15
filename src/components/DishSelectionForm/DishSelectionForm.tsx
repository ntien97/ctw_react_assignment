import React, { FC } from "react";
import { Dish } from "../../interfaces/dish.interface";
import Dishes from "../../data/dishes.json";
import { Meal } from "../../interfaces/meal.enum";
import DishBlock from "./DishBlock/DishBlock";
import { ReservationDishes } from "../../interfaces/reservation.interface";

const dishesDatasource: Dish[] = Dishes.dishes.map(
  ({ availableMeals, ...remain }) => ({
    ...remain,
    availableMeals: availableMeals as Meal[],
  })
);

interface DishSelectionFormProps {
  readonly selectedMealType: Meal;
  readonly selectedRestaurant: string;
  readonly selectedPartySize: number;
  readonly reservationDishes: ReservationDishes;
  readonly onDishChanges: (id: number, count: number) => void;
}

const DishSelectionForm: FC<DishSelectionFormProps> = ({
  selectedRestaurant,
  selectedMealType,
  selectedPartySize,
  reservationDishes,
  onDishChanges,
}) => (
  <>
    <div
      className="flex p-4 mb-4 text-sm text-blue-900 bg-blue-50 rounded-lg"
      role="alert"
    >
      <svg
        aria-hidden="true"
        className="flex-shrink-0 inline w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
          clipRule="evenodd"
        ></path>
      </svg>
      <span className="sr-only">Info</span>
      <div>
        <span className="font-medium">Order for {selectedPartySize}!</span> Let
        make sure you and all your friends have their food!
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2">
      {dishesDatasource
        .filter(
          (dish) =>
            dish.restaurant === selectedRestaurant &&
            dish.availableMeals.includes(selectedMealType)
        )
        .map((dish) => (
          <DishBlock
            key={dish.id}
            dish={dish}
            currentCount={reservationDishes[dish.id] || 0}
            updateCount={(count) => onDishChanges(dish.id, count)}
          ></DishBlock>
        ))}
    </div>
  </>
);

export default DishSelectionForm;
