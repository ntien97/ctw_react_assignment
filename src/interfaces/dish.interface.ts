import { Meal } from "./meal.enum";

export interface Dish {
  readonly id: number;
  readonly name: string;

  readonly restaurant: string;
  readonly availableMeals: Meal[];
}
