import { Logo } from "./logo";

export const Header = () => {
  return (
    <nav className="z-50 border-b ">
      <div className="container m-auto px-12 md:px-16 lg:px-20">
        <div className="flex items-center justify-between h-20">
          <Logo />
          <ul className="flex space-x-8">
            <li className="hover:text-primary/80 cursor-pointer transition-all duration-300">
              About
            </li>
            <li className="hover:text-primary/80 cursor-pointer transition-all duration-300">
              Home
            </li>
            <li className="hover:text-primary/80 cursor-pointer transition-all duration-300">
              Menu
            </li>
            <li className="hover:text-primary/80 cursor-pointer transition-all duration-300">
              Reservation
            </li>
            <li className="hover:text-primary/80 cursor-pointer transition-all duration-300">
              Order Online
            </li>
            <li className="hover:text-primary/80 cursor-pointer transition-all duration-300">
              Login
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
