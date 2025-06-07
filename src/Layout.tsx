import type { ReactNode } from "react";
import { Header } from "./components/header";
import { Footer } from "./components/footer";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen antialiased bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
};
