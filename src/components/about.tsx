import { Container } from "./container";
import { Button } from "./ui/button";
import aboutImage1 from "../assets/about-1.png";
import aboutImage2 from "../assets/about-2.png";

export const AboutSection = () => {
  return (
    <section className="bg-white">
      <Container>
        <div className="flex flex-col md:flex-row w-full items-center justify-center gap-40 md:space-y-0 md:space-x-8">
          <div className="space-y-6 flex-col text-center md:text-left py-16">
            <div>
              <h1 className="text-[64px] text-[#495E57] font-medium">
                Little Lemon
              </h1>
              <h2 className="text-[40px]">Jakarta</h2>
            </div>
            <div>
              <p className="text-xl leading-relaxed max-w-lg">
                Little Lemon is a family-owned Mediterranean restaurant in South
                Jakarta, serving authentic traditional recipes with a modern
                twist since 2018. Our experienced chef uses only the finest
                ingredients to create unforgettable dining experiences. We blend
                Mediterranean authenticity with Indonesian hospitality, making
                Little Lemon a beloved gathering place for Jakarta families.
              </p>
            </div>
            <Button className="shadow-2xl" variant="lemon">
              Reserve a Table
            </Button>
          </div>

          <div className="relative">
            <div className="relative mx-auto h-[420px] w-[420px]">
              <img
                src={aboutImage2}
                alt="About 1"
                className="absolute right-0 top-0 h-[280px] w-[280px] rounded-lg object-cover"
              />
              <img
                src={aboutImage1}
                alt="About 2"
                className="absolute bottom-0 left-0 h-[280px] w-[280px] rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
