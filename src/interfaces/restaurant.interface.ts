import { Dish } from "./dish.interface";
import { Meal } from "./meal.enum";

export interface Restaurant {
  name: string;
  availableMeals: Meal[];
  availableDish: Required<Omit<Dish, "restaurant">>[];
}
