import { Container } from "./container";
import { Logo } from "./logo";

export const Header = () => {
  return (
    <nav className="z-50 border-b">
      <Container>
        <div className="flex items-center justify-between h-20">
          <div className="flex">
            <Logo />
          </div>
          <ul className="flex space-x-8">
            <li className="hover:text-primary/70 cursor-pointer transition-all duration-300">
              Home
            </li>
            <li className="hover:text-primary/70 cursor-pointer transition-all duration-300">
              About
            </li>
            <li className="hover:text-primary/70 cursor-pointer transition-all duration-300">
              Menu
            </li>
            <li className="hover:text-primary/70 cursor-pointer transition-all duration-300">
              Reservations
            </li>
            <li className="hover:text-primary/70 cursor-pointer transition-all duration-300">
              Order Online
            </li>
            <li className="hover:text-primary/70 cursor-pointer transition-all duration-300">
              Login
            </li>
          </ul>
        </div>
      </Container>
    </nav>
  );
};
