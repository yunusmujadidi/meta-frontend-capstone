import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { ReservationForm } from "../components/reservation-form";
import { reservationTime } from "../lib/const";

const initializeTimes = () => {
  return reservationTime;
};

const updateTimes = (state: string[]) => {
  return state;
};

describe("ReservationForm", () => {
  it("renders the BookingForm heading", () => {
    const mockDispatch = () => {};

    render(<ReservationForm availableTimes={[]} dispatch={mockDispatch} />);

    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
  });
});

describe("Time Functions", () => {
  it("initializeTimes returns the correct expected value", () => {
    const times = initializeTimes();

    expect(times).toEqual([
      "17:00",
      "18:00",
      "19:00",
      "20:00",
      "21:00",
      "22:00",
    ]);
  });

  it("updateTimes returns the same value provided in state", () => {
    const state = ["17:00", "18:00", "19:00"];

    const result = updateTimes(state);

    expect(result).toEqual(state);
  });
});
