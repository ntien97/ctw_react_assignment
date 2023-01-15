import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Stepper from "./Stepper";

describe("<Stepper />", () => {
  test("it should mount", () => {
    render(<Stepper steps={[]} activeIndex={0} />);

    const stepper = screen.getByTestId("Stepper");

    expect(stepper).toBeInTheDocument();
  });
});
