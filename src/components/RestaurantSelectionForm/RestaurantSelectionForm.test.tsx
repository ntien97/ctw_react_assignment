import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import RestaurantSelectionForm from "./RestaurantSelectionForm";

describe("<RestaurantSelectionForm />", () => {
  test("it should mount", () => {
    render(
      <RestaurantSelectionForm
        restaurants={[]}
        onSelected={() => {
          return;
        }}
      />
    );

    const restaurantSelectionForm = screen.getByTestId(
      "RestaurantSelectionForm"
    );

    expect(restaurantSelectionForm).toBeInTheDocument();
  });
});
