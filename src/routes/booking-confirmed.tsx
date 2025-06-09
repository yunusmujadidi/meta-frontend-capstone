import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/booking-confirmed")({
  component: BookingConfirmedComponent,
});

function BookingConfirmedComponent() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <Container>
        <Card className="max-w-lg mx-auto text-center">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-[#495E57]">
              Booking Confirmed!
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-lg text-gray-700">
              Thank you for your reservation at Little Lemon.
            </p>
            <p className="text-gray-600">We look forward to welcoming you!</p>
            <Button variant="lemon" asChild className="mt-4">
              <Link to="/">Back to Home</Link>
            </Button>
          </CardContent>
        </Card>
      </Container>
    </div>
  );
}
