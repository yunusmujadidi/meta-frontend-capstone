import { Container } from "./container";
import { ReviewCard } from "./review-card";

const reviews = [
  {
    star: 5 as const,
    title: "Excellent Service!",
    review: "The service was amazing. I am very satisfied with the results.",
    avatarSrc: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Budi Santoso",
    date: new Date("2025-01-15T10:00:00.000Z"),
  },
  {
    star: 4 as const,
    title: "Great Experience",
    review: "Had a great experience. The staff was very friendly and helpful.",
    avatarSrc: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Siti Rahayu",
    date: new Date("2025-02-20T11:30:00.000Z"),
  },
  {
    star: 5 as const,
    title: "Highly Recommended",
    review: "I would highly recommend this to anyone. Top-notch quality.",
    avatarSrc: "https://randomuser.me/api/portraits/men/62.jpg",
    name: "Agus Wijaya",
    date: new Date("2025-03-10T14:00:00.000Z"),
  },
  {
    star: 5 as const,
    title: "Fantastic!",
    review: "Absolutely fantastic. I will definitely be coming back again.",
    avatarSrc: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Dewi Lestari",
    date: new Date("2025-04-05T16:45:00.000Z"),
  },
];

export const TestimonialSection = () => {
  return (
    <div className="bg-[#495E57] py-20">
      <Container>
        <div className="flex flex-col items-center space-y-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-white">
              Our customers love us!
            </h1>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {reviews.map((review) => (
              <ReviewCard key={review.name} {...review} />
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
};
