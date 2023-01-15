import React, { FC } from "react";
import { RestaurantSelectionFormProps } from "../RestaurantSelectionForm";
import { Restaurant } from "../../../interfaces/restaurant.interface";

type RestaurantBlockProps = Pick<RestaurantSelectionFormProps, "onSelected"> & {
  readonly restaurant: Restaurant;
};

const RestaurantBlock: FC<RestaurantBlockProps> = ({
  onSelected,
  restaurant,
}) => (
  <div
    onClick={() => onSelected(restaurant.name)}
    className="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100"
  >
    <div className="flex items-center w-full text-lg font-semibold content-start gap-2">
      <img
        className="w-10 h-10 aspect-square border border-gray-200 rounded"
        src="/abc.jpg"
        alt="no-image-available"
      ></img>
      <span>{restaurant.name}</span>
    </div>
    <svg
      aria-hidden="true"
      className="w-6 h-6 ml-3"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
        clipRule="evenodd"
      ></path>
    </svg>
  </div>
);

export default RestaurantBlock;
