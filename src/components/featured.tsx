import { CardMenu } from "./menu-card";
import { Container } from "./container";
import { Button } from "./ui/button";
import Card1 from "@/assets/card-1.png";
import Card2 from "@/assets/card-2.png";
import Card3 from "@/assets/card-3.png";
import { Link } from "@tanstack/react-router";

const weeklySpecials = [
  {
    imgSrc: Card1,
    title: "Greek Salad",
    price: "12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    imgSrc: Card2,
    title: "Bruschetta",
    price: "5.99",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    imgSrc: Card3,
    title: "Lemon Dessert",
    price: "5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export const FeaturedSection = () => {
  return (
    <div className="bg-white py-10 md:py-20 mt-30">
      <Container>
        <div className="flex flex-col space-y-10 justify-center">
          <div className="flex w-full flex-col space-y-4 md:space-y-0 md:flex-row justify-between items-center ">
            <div className="flex items-center justify-center">
              <h1 className="text-4xl md:text-6xl tracking-tighter">
                This week's specials!
              </h1>
            </div>
            <Button
              className="shadow-2xl"
              variant="lemon"
              aria-label="On Click"
            >
              <Link to="/reservation">Order Online</Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-center">
            {weeklySpecials.map((special) => (
              <CardMenu
                key={special.title}
                imgSrc={special.imgSrc}
                title={special.title}
                price={special.price}
                description={special.description}
              />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
