import React, { FC } from "react";
import { Reservation } from "../../interfaces/reservation.interface";
import ReservationDishTable from "./ReservationDishTable/ReservationDishTable";
import ReservationInfo from "./ReservationInfo/ReservationInfo";

interface ReservationConfirmationProps {
  readonly reservation: Reservation;
}

const ReservationConfirmation: FC<ReservationConfirmationProps> = ({
  reservation,
}) => (
  <div className="flex flex-col gap-4">
    <h3 className="mb-5 text-lg font-medium text-gray-900">
      Please confirm your reservation
    </h3>
    <ReservationInfo
      restaurant={reservation.restaurant}
      partySize={reservation.partySize}
      meal={reservation.meal}
    ></ReservationInfo>
    <ReservationDishTable dishes={reservation.dishes}></ReservationDishTable>
  </div>
);

export default ReservationConfirmation;
