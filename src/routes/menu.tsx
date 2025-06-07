import { FeaturedSection } from "@/components/featured";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/menu")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="-mt-20">
      <FeaturedSection />;
    </div>
  );
}
