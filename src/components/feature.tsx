import { CardMenu } from "./card";
import { Container } from "./container";
import { Button } from "./ui/button";
import Card1 from "@/assets/card-1.png";
import Card2 from "@/assets/card-2.png";
import Card3 from "@/assets/card-3.png";

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

export const FeatureSection = () => {
  return (
    <div className="bg-white py-10">
      <Container>
        <div className="flex flex-col space-y-10 justify-center">
          <div className="flex flex-col md:flex-row justify-between items-center ">
            <div>
              <h1 className="text-4xl font-bold">This week's specials!</h1>
            </div>
            <Button variant="lemon">Order Online</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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
