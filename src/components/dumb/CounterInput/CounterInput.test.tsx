import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import CounterInput from "./CounterInput";

describe("<CounterInput />", () => {
  test("it should mount", () => {
    const voidFn = () => {
      return;
    };
    render(
      <CounterInput
        min={0}
        max={10}
        currentValue={0}
        onDecrease={voidFn}
        onIncrease={voidFn}
      />
    );

    const counterInput = screen.getByTestId("CounterInput");

    expect(counterInput).toBeInTheDocument();
  });
});
