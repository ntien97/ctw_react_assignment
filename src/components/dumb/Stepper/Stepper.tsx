import React, { ReactNode } from "react";
import classNames from "classnames";

export interface StepConfig {
  readonly name: string;
  readonly description: string;
  readonly hideNextBtn?: boolean;
  readonly disableNextBtnCondition?: () => boolean;
}

interface StepperProps {
  readonly stepConfigs: StepConfig[];
  readonly activeIndex: number;
  readonly onNext: () => void;
  readonly onPrevious: () => void;
  readonly onComplete: () => void;
  readonly children: ReactNode[];
}

const Stepper: React.FunctionComponent<StepperProps> = ({
  stepConfigs,
  activeIndex,
  onNext,
  onPrevious,
  onComplete,
  children,
}) => {
  if (activeIndex > children.length) {
    throw new Error("activeIndex cannot be larger than steps length");
  }

  const activeStepConfig = stepConfigs[activeIndex];

  return (
    <div className="flex flex-col gap-8 h-full w-full" data-testid="Stepper">
      <ol className="items-center w-full space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
        {stepConfigs.map((step, index) => (
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

      <div className="flex flex-row justify-between content-end w-full">
        {activeIndex > 0 && (
          <button
            onClick={onPrevious}
            type="submit"
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
              Back
            </span>
          </button>
        )}

        {!activeStepConfig.hideNextBtn &&
          activeIndex !== stepConfigs.length - 1 && (
            <button
              onClick={onNext}
              type="submit"
              disabled={
                activeStepConfig.disableNextBtnCondition &&
                activeStepConfig.disableNextBtnCondition()
              }
              className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white disabled:cursor-not-allowed disabled:opacity-50"
            >
              <span className="inline-flex items-center gap-2">
                Next
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

        {activeIndex === stepConfigs.length - 1 && (
          <button
            onClick={onComplete}
            type="submit"
            className="h-10 px-6 font-semibold rounded-md bg-blue-600 text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="inline-flex items-center gap-2">
              Complete
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
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
