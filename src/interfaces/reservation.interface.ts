import { Meal } from "./meal.enum";

export type ReservationDishes = {
  [key in number]: number;
};

export interface Reservation {
  readonly meal: Meal;
  readonly partySize: number;
  readonly restaurant: string;
  readonly dishes: ReservationDishes;
}
