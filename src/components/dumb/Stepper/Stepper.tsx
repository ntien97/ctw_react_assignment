import React, { ReactNode } from "react";
import classNames from "classnames";

interface Step {
  readonly name: string;
  readonly description?: string;
  readonly hideNextBtn?: boolean;
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
    <div className="flex flex-col gap-8 h-full w-full" data-testid="Stepper">
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        {steps.map((step, index) => (
          <li
            key={index}
            className={classNames("flex items-center space-x-2.5", {
              "text-blue-600": index === activeIndex,
              "text-gray-600": index !== activeIndex,
            })}
          >
            <span
              className={classNames(
                "flex items-center justify-center w-8 h-8 border rounded-full shrink-0",
                {
                  "border-blue-600": index === activeIndex,
                  "border-gray-600": index !== activeIndex,
                }
              )}
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

      <div className="min-h-1/5">{children[activeIndex]}</div>

      <div className="flex flex-row justify-between">
        <button
          onClick={onPrevious}
          type="submit"
          disabled={activeIndex === 0}
          className="h-10 px-6 font-semibold rounded-md border border-slate-200 text-slate-900 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <span className="inline-flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M11.03 3.97a.75.75 0 010 1.06l-6.22 6.22H21a.75.75 0 010 1.5H4.81l6.22 6.22a.75.75 0 11-1.06 1.06l-7.5-7.5a.75.75 0 010-1.06l7.5-7.5a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
            Previous Step
          </span>
        </button>

        {!activeStep.hideNextBtn && (
          <button
            onClick={onNext}
            type="submit"
            disabled={activeIndex === steps.length - 1}
            className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="inline-flex items-center gap-2">
              Next Step
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M12.97 3.97a.75.75 0 011.06 0l7.5 7.5a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 11-1.06-1.06l6.22-6.22H3a.75.75 0 010-1.5h16.19l-6.22-6.22a.75.75 0 010-1.06z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Stepper;
