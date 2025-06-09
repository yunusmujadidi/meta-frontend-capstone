import { Container } from "@/components/container";
import { ReservationForm } from "@/components/reservation-form";
import { createFileRoute } from "@tanstack/react-router";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { reservationTime } from "@/lib/const";
import { useReducer } from "react";

export const Route = createFileRoute("/reservation")({
  component: RouteComponent,
});

const updateTimes = (state: string[]) => {
  return state;
};

const initializeTimes = () => {
  return reservationTime;
};

function RouteComponent() {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes
  );
  return (
    <div className="min-h-screen bg-gray-50">
      <Container>
        <div className="py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-[#495E57] mb-4">
              Reserve a Table
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Book your table at Little Lemon for an authentic Mediterranean
              dining experience
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto h-full">
            <ReservationForm
              availableTimes={availableTimes}
              dispatch={dispatch}
            />

            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Restaurant Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2">Location</h4>
                    <p className="text-gray-600">
                      Jl. Thamrin No. 123
                      <br />
                      Menteng, Jakarta Pusat 10310
                      <br />
                      Indonesia
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Thursday: 17:00 - 22:00</p>
                      <p>Friday - Saturday: 17:00 - 23:00</p>
                      <p>Sunday: 16:00 - 21:00</p>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2">Contact</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Phone: +62 21 555-0123</p>
                      <p>WhatsApp: +62 812-3456-7890</p>
                      <p>Email: reservations@littlelemon.co.id</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Reservation Policy</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Reservations can be made up to 30 days in advance</li>
                    <li>• Maximum party size is 10 guests</li>
                    <li>
                      • Please arrive within 15 minutes of your reservation time
                    </li>
                    <li>
                      • Cancellations must be made at least 2 hours in advance
                    </li>
                    <li>
                      • Special dietary requirements can be accommodated with
                      advance notice
                    </li>
                    <li>
                      • A deposit may be required for parties of 8 or more
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
