/// <reference types="vite/client" />

interface ReservationFormData {
  date: string;
  time: string;
  guests: number;
  occasion: string;
  notes?: string;
}

declare global {
  interface Window {
    fetchAPI: (date: Date) => string[];
    submitAPI: (formData: ReservationFormData) => boolean;
  }
}

export {};
