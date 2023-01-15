import React, { useState } from "react";
import "./App.css";
import MealSelectionForm from "./components/MealSelectionForm/MealSelectionForm";
import RestaurantSelectionForm from "./components/RestaurantSelectionForm/RestaurantSelectionForm";
import { Meal } from "./interfaces/meal.enum";
import Stepper, { StepConfig } from "./components/dumb/Stepper/Stepper";
import DishSelectionForm from "./components/DishSelectionForm/DishSelectionForm";
import { Reservation } from "./interfaces/reservation.interface";
import ReservationConfirmation from "./components/ReservationConfirmation/ReservationConfirmation";

function App() {
  const [activeStepIdx, updateActiveStepIdx] = useState(0);
  const stepConfigs: StepConfig[] = [
    {
      name: "Meal",
      description: "Select meal & party size",
    },
    {
      name: "Restaurant",
      description: "Select restaurant",
      hideNextBtn: true,
    },
    {
      name: "Dish",
      description: "Pre-order your food",
      customerBackBtnActions: () =>
        updateReservation({
          ...reservation,
          dishes: initialReservationState.dishes,
        }),
      disableNextBtnCondition: () =>
        Object.values(reservation.dishes).reduce(
          (total, count) => total + count,
          0
        ) < reservation.partySize,
    },
    {
      name: "Confirm",
      description: "Confirm your reservation",
    },
  ];

  const initialReservationState = {
    meal: Meal.Breakfast,
    partySize: 1,
    restaurant: "",
    dishes: {},
  } as const;
  const [reservation, updateReservation] = useState<Reservation>(
    initialReservationState
  );

  const resetReservation = () => {
    updateActiveStepIdx(0);
    updateReservation(initialReservationState);
  };

  return (
    <div className="flex flex-col h-screen place-items-center">
      <h1 className="mt-16 mb-8 text-3xl font-extrabold text-gray-900 md:text-5xl lg:text-6xl">
        <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
          Grab
        </span>{" "}
        A Bite!
      </h1>
      <div className="max-w-screen-xl p-8 border border-gray-200 rounded-lg shadow-md">
        <Stepper
          stepConfigs={stepConfigs}
          activeIndex={activeStepIdx}
          updateActiveIndex={updateActiveStepIdx}
          onComplete={() => {
            // TODO: Connect the backend here!
            console.log(reservation);
            resetReservation();
          }}
        >
          <MealSelectionForm
            selectedMeal={reservation.meal}
            updateSelectedMeal={(meal) =>
              updateReservation({ ...reservation, meal })
            }
            partySize={reservation.partySize}
            updatePartySize={(partySize) =>
              updateReservation({
                ...reservation,
                partySize,
              })
            }
          ></MealSelectionForm>
          <RestaurantSelectionForm
            selectedMealType={reservation.meal}
            onSelected={(restaurant) => {
              updateActiveStepIdx(activeStepIdx + 1);
              updateReservation({
                ...reservation,
                restaurant,
              });
            }}
          ></RestaurantSelectionForm>
          <DishSelectionForm
            selectedMealType={reservation.meal}
            selectedRestaurant={reservation.restaurant}
            selectedPartySize={reservation.partySize}
            reservationDishes={reservation.dishes}
            onDishChanges={(id, count) =>
              updateReservation({
                ...reservation,
                dishes: { ...reservation.dishes, [id]: count },
              })
            }
          ></DishSelectionForm>
          <ReservationConfirmation
            reservation={reservation}
          ></ReservationConfirmation>
        </Stepper>
      </div>
    </div>
  );
}

export default App;
