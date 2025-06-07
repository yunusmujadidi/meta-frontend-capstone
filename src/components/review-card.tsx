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
    <Card className="space-y-3">
      <CardHeader className="flex gap-4">
        {Array(star)
          .fill(0)
          .map((_, index) => (
            <Star key={index} className="size-4" />
          ))}
      </CardHeader>
      <CardContent>
        <CardTitle className="text-2xl">{title}</CardTitle>
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
