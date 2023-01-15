import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import MealSelectionForm from "./MealSelectionForm";

describe("<MealSelectionForm />", () => {
  test("it should mount", () => {
    render(<MealSelectionForm />);

    const mealSelectionForm = screen.getByTestId("MealSelectionForm");

    expect(mealSelectionForm).toBeInTheDocument();
  });
});
