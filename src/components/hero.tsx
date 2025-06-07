import { Container } from "./container";
import { Button } from "./ui/button";
import heroImage from "../assets/hero-img.png";

export const HeroSection = () => {
  return (
    <section className="bg-[#495E57]">
      <Container>
        <div className="flex flex-col md:flex-row w-full items-center justify-center md:space-y-0 md:space-x-8">
          <div className="space-y-6 flex-col text-center md:text-left py-8 md:py-16">
            <div>
              <h1 className="text-4xl md:text-6xl text-[#F4CE14] font-medium">
                Little Lemon
              </h1>
              <h2 className="text-2xl md:text-4xl text-white">Jakarta</h2>
            </div>
            <div>
              <p className="text-white leading-relaxed max-w-md">
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
            </div>
            <Button className="shadow-2xl" variant="lemon">
              Reserve a Table
            </Button>
          </div>

          <div className="relative w-full md:w-1/2 h-80 my-5 hidden md:block">
            <img
              src={heroImage}
              alt="Little Lemon signature dishes"
              className="absolute w-[375px] h-[400px] object-cover rounded-2xl shadow-2xl top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 transform md:left-auto md:right-0 md:top-20 md:translate-x-0 md:translate-y-0"
            />
          </div>
        </div>
      </Container>
    </section>
  );
};
