import { Dish } from "./dish.interface";
import { Meal } from "./meal.enum";

export interface Restaurant {
  readonly name: string;
  readonly availableMeals: Meal[];
  readonly availableDish: Required<Omit<Dish, "restaurant">>[];
}
