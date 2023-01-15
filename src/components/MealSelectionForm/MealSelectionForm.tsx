import React, { FC } from "react";
import MealTypeSelection from "./MealTypeSelection/MealTypeSelection";
import { Meal } from "../../interfaces/meal.enum";
import PartySizeSelection from "./PartySizeSelection/PartySizeSelection";

export interface MealSelectionFormProps {
  selectedMeal: Meal;
  updateSelectedMeal: (meal: Meal) => void;
  partySize: number;
  updatePartySize: (size: number) => void;
}

const MealSelectionForm: FC<MealSelectionFormProps> = ({
  selectedMeal,
  updateSelectedMeal,
  partySize,
  updatePartySize,
}) => (
  <div className="flex flex-col gap-8" data-testid="MealSelectionForm">
    <MealTypeSelection
      selectedMeal={selectedMeal}
      updateSelectedMeal={updateSelectedMeal}
    ></MealTypeSelection>
    <PartySizeSelection
      partySize={partySize}
      updatePartySize={updatePartySize}
    ></PartySizeSelection>
  </div>
);

export default MealSelectionForm;
