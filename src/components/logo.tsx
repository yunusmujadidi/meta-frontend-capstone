import LogoImage from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";

export const Logo = () => {
  return (
    <Link to="/">
      <img
        src={LogoImage}
        alt="Little Lemon Restaurant"
        className="h-14 w-auto"
      />
    </Link>
  );
};
