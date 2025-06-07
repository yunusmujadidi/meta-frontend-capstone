import footerLogo from "../assets/footer-logo.png";
import { Container } from "./container";

export const Footer = () => {
  const navigationItems = [
    "Home",
    "About",
    "Menu",
    "Order Online",
    "Reservation",
    "Login",
  ];

  const contactItems = ["Address", "Phone Number", "Email"];

  const socialMediaItems = ["Facebook", "Instagram", "Twitter"];

  return (
    <footer className="py-16 bg-[#495E57] text-white">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="flex justify-center md:justify-start">
            <img
              className="object-cover"
              src={footerLogo}
              alt="Little Lemon Logo"
              width={180}
            />
          </div>
          <div>
            <h1 className="mb-6 text-lg font-bold text-[#F4CE14]">
              Doormat Navigation
            </h1>
            <ul className="space-y-3">
              {navigationItems.map((item, index) => (
                <li
                  key={index}
                  className="text-white font-medium cursor-pointer hover:text-[#F4CE14] transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="mb-6 text-lg font-bold text-[#F4CE14]">Contacts</h1>
            <ul className="space-y-3">
              {contactItems.map((item, index) => (
                <li
                  key={index}
                  className="text-white font-medium cursor-pointer hover:text-[#F4CE14] transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1 className="mb-6 text-lg font-bold text-[#F4CE14]">
              Social Media Links
            </h1>
            <ul className="space-y-3">
              {socialMediaItems.map((item, index) => (
                <li
                  key={index}
                  className="text-white font-medium cursor-pointer hover:text-[#F4CE14] transition-colors"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};
