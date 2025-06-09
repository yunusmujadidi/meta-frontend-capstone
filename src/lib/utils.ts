import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { fetchAPI } from "./api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toPath = (item: string) => {
  if (item === "Home") return "/";
  if (item === "Order Online") return "/order";
  return `/${item.toLowerCase().replace(" ", "-")}`;
};

export const updateTimes = (
  state: string[],
  action: { type: string; payload: string }
) => {
  if (action.type === "UPDATE_TIMES") {
    const selectedDate = new Date(action.payload);
    return fetchAPI(selectedDate);
  }
  return state;
};

export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};
