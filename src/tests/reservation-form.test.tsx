import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { ReservationForm } from "../components/reservation-form";
import { fetchAPI } from "../lib/api";
import { initializeTimes, updateTimes } from "@/lib/utils";

jest.mock("../lib/api", () => ({
  fetchAPI: jest.fn(),
}));

const mockedFetchAPI = fetchAPI as jest.Mock;

describe("ReservationForm", () => {
  const mockDispatch = jest.fn();
  const mockSubmitForm = jest.fn();
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00"];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders the reservation form with all required fields", () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    expect(screen.getByText("Make a Reservation")).toBeInTheDocument();
    expect(screen.getByText("Date")).toBeInTheDocument();
    expect(screen.getByText("Time")).toBeInTheDocument();
    expect(screen.getByText("Number of Guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
    expect(screen.getByText("Additional Notes")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /make your reservation/i })
    ).toBeInTheDocument();
  });

  it("displays validation errors when submitting empty form", async () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const submitButton = screen.getByRole("button", {
      name: /make your reservation/i,
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("Date is required")).toBeInTheDocument();
      expect(
        screen.getByText("Please select a valid time.")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Must book for at least 1 guest")
      ).toBeInTheDocument();
      expect(
        screen.getByText("Please select a valid occasion.")
      ).toBeInTheDocument();
    });

    expect(mockSubmitForm).not.toHaveBeenCalled();
  });

  it("renders available times in the time dropdown", () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    // Check that the time combobox is rendered
    expect(screen.getByRole("combobox", { name: /time/i })).toBeInTheDocument();
  });

  it("renders notes textarea", () => {
    render(
      <ReservationForm
        availableTimes={availableTimes}
        dispatch={mockDispatch}
        submitForm={mockSubmitForm}
      />
    );

    const notesInput = screen.getByPlaceholderText(
      "Let us know if you have any special requests"
    );
    expect(notesInput).toBeInTheDocument();
  });
});

describe("Time Functions", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("initializeTimes returns the value from fetchAPI", async () => {
    const expectedTimes = ["17:00", "18:00", "19:00"];
    mockedFetchAPI.mockReturnValue(expectedTimes);

    const times = await initializeTimes();

    expect(times).toEqual(expectedTimes);
    expect(fetchAPI).toHaveBeenCalled();
  });

  it("updateTimes returns the value from fetchAPI with the correct date", () => {
    const state: string[] = [];
    const action = { type: "UPDATE_TIMES", payload: "2025-06-09" };
    const expectedTimes = ["20:00", "21:00"];
    mockedFetchAPI.mockReturnValue(expectedTimes);

    const result = updateTimes(state, action);

    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-06-09"));
    expect(result).toEqual(expectedTimes);
  });

  it("updateTimes returns state unchanged for unknown action types", () => {
    const state = ["17:00", "18:00"];
    const action = { type: "UNKNOWN_ACTION", payload: "some-payload" };

    const result = updateTimes(state, action);

    expect(result).toEqual(state);
    expect(fetchAPI).not.toHaveBeenCalled();
  });
});
