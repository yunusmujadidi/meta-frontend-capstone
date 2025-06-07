import { AboutSection } from "@/components/about";
import { FeaturedSection } from "@/components/featured";
import { HeroSection } from "@/components/hero";
import { TestimonialSection } from "@/components/testimonial";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />
      <TestimonialSection />
      <AboutSection />
    </>
  );
}
