import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const toPath = (item: string) => {
  if (item === "Home") return "/";
  if (item === "Order Online") return "/order";
  return `/${item.toLowerCase().replace(" ", "-")}`;
};
