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
  const initialReservationState = {
    meal: Meal.Breakfast,
    partySize: 1,
    restaurant: "",
    dishes: [],
  } as const;
  const [reservation, updateReservation] = useState<Reservation>(
    initialReservationState
  );
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

  const resetReservation = () => {
    updateActiveStepIdx(0);
    updateReservation(initialReservationState);
  };

  return (
    <div className="grid h-screen place-items-center">
      <div className="max-w-screen-xl p-8 border border-gray-200 rounded-lg shadow-md">
        <Stepper
          stepConfigs={stepConfigs}
          activeIndex={activeStepIdx}
          onPrevious={() => updateActiveStepIdx(activeStepIdx - 1)}
          onNext={() => updateActiveStepIdx(activeStepIdx + 1)}
          onComplete={() => {
            // TODO: Connect the backend here!
            console.log(reservation);
            resetReservation();
          }}
        >
          <MealSelectionForm
            selectedMeal={reservation.meal}
            // todo: check if this is a good way to update state
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
