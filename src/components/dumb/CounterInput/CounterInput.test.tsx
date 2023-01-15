import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CounterInput from "./CounterInput";

describe("<CounterInput />", () => {
  test("it should mount", () => {
    render(<CounterInput />);

    const counterInput = screen.getByTestId("CounterInput");

    expect(counterInput).toBeInTheDocument();
  });
});
