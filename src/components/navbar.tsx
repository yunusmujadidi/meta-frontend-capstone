import { Container } from "./container";
import { Logo } from "./logo";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { navigationItems } from "@/lib/const";
import { Link } from "@tanstack/react-router";

const toPath = (item: string) => {
  if (item === "Home") return "/";
  if (item === "Order Online") return "/order";
  return `/${item.toLowerCase().replace(" ", "-")}`;
};

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="z-50 border-b sticky top-0 bg-white shadow-md">
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <Logo />
          </div>
          <ul className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <li key={item}>
                <Link
                  className="hover:text-primary/70 cursor-pointer transition-all duration-300"
                  to={toPath(item)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
          <div className="md:hidden">
            <Button onClick={toggleMenu} variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden">
            <ul className="flex flex-col space-y-4 py-4">
              {navigationItems.map((item) => (
                <li key={item}>
                  <Link
                    className="hover:text-primary/70 cursor-pointer transition-all duration-300"
                    to={toPath(item)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </Container>
    </nav>
  );
};
