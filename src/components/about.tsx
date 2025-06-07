import { Container } from "./container";
import { Button } from "./ui/button";
import aboutImage1 from "../assets/about-1.png";
import aboutImage2 from "../assets/about-2.png";
import { Link } from "@tanstack/react-router";

export const AboutSection = () => {
  return (
    <section className="bg-white py-10 md:py-20">
      <Container>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-10 md:gap-20">
          <div className="space-y-6 flex-col text-center md:text-left">
            <div>
              <h1 className="text-4xl md:text-6xl text-[#495E57] font-medium">
                Little Lemon
              </h1>
              <h2 className="text-2xl md:text-4xl">Jakarta</h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed max-w-lg">
                Little Lemon is a family-owned Mediterranean restaurant in South
                Jakarta, serving authentic traditional recipes with a modern
                twist since 2018. Our experienced chef uses only the finest
                ingredients to create unforgettable dining experiences. We blend
                Mediterranean authenticity with Indonesian hospitality, making
                Little Lemon a beloved gathering place for Jakarta families.
              </p>
            </div>
            <Button className="shadow-2xl" variant="lemon">
              <Link to="/reservation">Reserve a Table</Link>
            </Button>
          </div>

          <div className="relative w-full md:w-1/2 h-96 hidden md:block">
            <img
              src={aboutImage2}
              alt="About 1"
              className="absolute right-0 top-0 h-48 w-48 md:h-64 md:w-64 rounded-lg object-cover"
            />
            <img
              src={aboutImage1}
              alt="About 2"
              className="absolute bottom-0 left-0 h-48 w-48 md:h-64 md:w-64 rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
