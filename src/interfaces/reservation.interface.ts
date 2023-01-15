import { Meal } from "./meal.enum";
import { Dish } from "./dish.interface";

export interface Reservation {
  readonly meal: Meal;
  readonly partySize: number;
  readonly restaurant: string;
  readonly dishes: (Pick<Dish, "id"> & { count: number })[];
}
