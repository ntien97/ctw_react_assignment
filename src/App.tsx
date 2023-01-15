import React from "react";
import "./App.css";
import MealSelectionForm from "./components/MealSelectionForm/MealSelectionForm";
import RestaurantSelectionForm from "./components/RestaurantSelectionForm/RestaurantSelectionForm";

function App() {
  return (
    <>
      {/*todo: add a stepper to go between form*/}
      <h1> step 1</h1>
      <MealSelectionForm></MealSelectionForm>
      <h1> step 2</h1>
      <RestaurantSelectionForm></RestaurantSelectionForm>
    </>
  );
}

export default App;
