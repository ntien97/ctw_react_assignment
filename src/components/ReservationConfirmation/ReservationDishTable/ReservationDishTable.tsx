import React, { FC } from "react";
import { Reservation } from "../../../interfaces/reservation.interface";
import { Dish } from "../../../interfaces/dish.interface";
import Dishes from "../../../data/dishes.json";
import { Meal } from "../../../interfaces/meal.enum";

const dishesDatasource: Dish[] = Dishes.dishes.map(
  ({ availableMeals, ...remain }) => ({
    ...remain,
    availableMeals: availableMeals as Meal[],
  })
);

type ReservationDishTableProps = Pick<Reservation, "dishes">;

const ReservationDishTable: FC<ReservationDishTableProps> = ({ dishes }) => {
  const tableData = Object.keys(dishes)
    .map((id) => id as unknown as number)
    .map((id) => ({
      ...dishesDatasource.find((dish) => dish.id == id),
      count: dishes[id as unknown as number],
    }));
  const total = tableData.reduce((total, { count }) => total + count, 0);

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 rounded-l-lg">
              Dish name
            </th>
            <th scope="col" className="px-6 py-3">
              Qty
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map(({ id, name, count }) => (
            <tr key={id} className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {name}
              </th>
              <td className="px-6 py-4">{count}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr className="font-semibold text-gray-900 dark:text-white">
            <th scope="row" className="px-6 py-3 text-base">
              Total
            </th>
            <td className="px-6 py-3">{total}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ReservationDishTable;
