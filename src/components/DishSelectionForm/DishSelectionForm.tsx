import React, { FC } from "react";
import { Dish } from "../../interfaces/dish.interface";
import Dishes from "../../data/dishes.json";
import { Meal } from "../../interfaces/meal.enum";
import DishBlock from "./DishBlock/DishBlock";
import { ReservationDishes } from "../../interfaces/reservation.interface";

const dishes: Dish[] = Dishes.dishes.map(({ availableMeals, ...remain }) => ({
  ...remain,
  availableMeals: availableMeals as Meal[],
}));

interface DishSelectionFormProps {
  readonly selectedMealType: Meal;
  readonly selectedRestaurant: string;
  readonly reservationDishes: ReservationDishes;
  readonly onDishChanges: (id: number, count: number) => void;
}

const DishSelectionForm: FC<DishSelectionFormProps> = ({
  selectedRestaurant,
  selectedMealType,
  reservationDishes,
  onDishChanges,
}) => (
  <>
    <h3 className="mb-5 text-lg font-medium text-gray-900">
      Please Pre-order your food
    </h3>
    <div className="grid grid-cols-3 gap-3">
      {dishes
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
