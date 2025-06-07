import { Star } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

interface ReviewCardProps {
  star: 1 | 2 | 3 | 4 | 5;
  title: string;
  review: string;
  avatarSrc: string;
  name: string;
  date: Date;
}

export const ReviewCard = ({
  star,
  title,
  review,
  avatarSrc,
  name,
  date,
}: ReviewCardProps) => {
  return (
    <Card className="flex h-full flex-col">
      <CardHeader className="flex gap-4">
        {Array.from({ length: star }, () => (
          <Star fill="#111" strokeWidth={0} />
        ))}
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">
          {review}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <div className="flex flex-row items-center justify-center gap-4">
          <Avatar>
            <AvatarImage src={avatarSrc} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p>{name}</p>
            <p className="text-muted-foreground">{date.toLocaleDateString()}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};
