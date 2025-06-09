import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ReservationForm } from "../components/reservation-form";
import { initializeTimes, updateTimes } from "../routes/reservation";
import { fetchAPI } from "../lib/api";

vi.mock("../lib/api", () => ({
  fetchAPI: vi.fn(),
}));

describe("ReservationForm", () => {
  it("renders the BookingForm heading", () => {
    const mockDispatch = () => {};

    render(<ReservationForm availableTimes={[]} dispatch={mockDispatch} />);

    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
  });
});

describe("Time Functions", () => {
  it("initializeTimes returns a non-empty array", () => {
    const expectedTimes = ["17:00", "18:00", "19:00"];
    (fetchAPI as any).mockReturnValue(expectedTimes);
    const times = initializeTimes();
    expect(times).toEqual(expectedTimes);
  });

  it("updateTimes returns the value from fetchAPI", () => {
    const state = ["17:00", "18:00", "19:00"];
    const action = { type: "UPDATE_TIMES", payload: "2024-01-01" };
    const expectedTimes = ["20:00", "21:00"];
    (fetchAPI as any).mockReturnValue(expectedTimes);
    const result = updateTimes(state, action);
    expect(result).toEqual(expectedTimes);
  });
});
