import type { ReservationFormData } from "@/components/reservation-form";

const seededRandom = function (seed: number) {
  const m = 2 ** 35 - 31;
  const a = 185852;
  let s = seed % m;
  return function () {
    return (s = (s * a) % m) / m;
  };
};

export const fetchAPI = function (date: Date): string[] {
  const result: string[] = [];
  const random = seededRandom(date.getDate());

  for (let i = 17; i <= 23; i++) {
    if (random() < 0.5) {
      result.push(i + ":00");
    }
    if (random() < 0.5) {
      result.push(i + ":30");
    }
  }
  return result;
};

export const submitAPI = function (formData: ReservationFormData) {
  console.log(formData);
  return true;
};
