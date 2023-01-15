import React, { FC } from "react";

interface Step {
  readonly name: string;
  readonly description?: string;
  readonly component: React.ReactElement;
}

interface StepperProps {
  readonly steps: Step[];
  readonly activeIndex: number;
}

const stepColor = (isActive: boolean) => (isActive ? "blue" : "gray");

const Stepper: FC<StepperProps> = ({ steps, activeIndex }) => {
  if (activeIndex > steps.length) {
    throw new Error("activeIndex cannot be larger than steps length");
  }

  return (
    <div className="flex flex-col gap-8" data-testid="Stepper">
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        {steps.map((step, index) => (
          <li
            className={`flex items-center text-${stepColor(
              index === activeIndex
            )}-600 space-x-2.5`}
          >
            <span
              className={`flex items-center justify-center w-8 h-8 border border-${stepColor(
                index === activeIndex
              )}-600 rounded-full shrink-0`}
            >
              {index + 1}
            </span>
            <span>
              <h3 className="font-medium leading-tight">{step.name}</h3>
              <p className="text-sm">{step.description}</p>
            </span>
          </li>
        ))}
      </ol>

      {steps[activeIndex].component}

      <div className="flex flex-row justify-between">
        <button
          type="submit"
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900"
        >
          Previous Step
        </button>

        <button
          type="submit"
          className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Stepper;
