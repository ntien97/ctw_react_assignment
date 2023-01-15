import React, { PropsWithChildren, ReactNode } from "react";

interface Step {
  readonly name: string;
  readonly description?: string;
}

export interface StepProps {
  readonly step: Step;
}

interface StepperProps {
  readonly steps: Step[];
  readonly activeIndex: number;
  readonly onNext: () => void;
  readonly onPrevious: () => void;

  readonly children: ReactNode[];
}

const stepColor = (isActive: boolean) => (isActive ? "blue" : "gray");
const Stepper: React.FunctionComponent<StepperProps> = ({
  steps,
  activeIndex,
  onNext,
  onPrevious,
  children,
}) => {
  if (activeIndex > children.length) {
    throw new Error("activeIndex cannot be larger than steps length");
  }

  const activeStep = steps[activeIndex];

  return (
    <div
      className="flex flex-col gap-8 h-full w-4/5 py-16"
      data-testid="Stepper"
    >
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

      <div className="h-1/2">{children[activeIndex]}</div>

      <div className="flex flex-row justify-between">
        <button
          onClick={onPrevious}
          type="submit"
          disabled={activeIndex === 0}
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous Step
        </button>

        <button
          onClick={onNext}
          type="submit"
          disabled={activeIndex === steps.length - 1}
          className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white disabled:cursor-not-allowed disabled:opacity-50"
        >
          Next Step
        </button>
      </div>
    </div>
  );
};

export default Stepper;
