import { render, screen } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import { ReservationForm } from "../components/reservation-form";
import { fetchAPI } from "../lib/api";
import { initializeTimes, updateTimes } from "@/lib/utils";

vi.mock("../lib/api", () => ({
  fetchAPI: vi.fn(),
}));

const mockedFetchAPI = vi.mocked(fetchAPI);

describe("ReservationForm", () => {
  it("renders the BookingForm heading", () => {
    const mockDispatch = vi.fn();
    const mockSubmitForm = vi.fn();

    render(
      <ReservationForm
        availableTimes={[]}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const headingElement = screen.getByText("Make a Reservation");
    expect(headingElement).toBeInTheDocument();
  });
});

describe("Time Functions", () => {
  it("initializeTimes returns the value from fetchAPI", async () => {
    const expectedTimes = ["17:00", "18:00", "19:00"];
    mockedFetchAPI.mockReturnValue(expectedTimes);
    const times = await initializeTimes();
    expect(times).toEqual(expectedTimes);
  });

  it("updateTimes returns the value from fetchAPI", () => {
    const state: string[] = [];
    const action = { type: "UPDATE_TIMES", payload: "2025-06-09" };
    const expectedTimes = ["20:00", "21:00"];
    mockedFetchAPI.mockReturnValue(expectedTimes);
    const result = updateTimes(state, action);
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-06-09"));
    expect(result).toEqual(expectedTimes);
  });
});
