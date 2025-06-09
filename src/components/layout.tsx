import type { ReactNode } from "react";
import { Header } from "./navbar";
import { Footer } from "./footer";
import { Toaster } from "./ui/sonner";

export const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="min-h-screen antialiased bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Toaster position="top-center" />
      <Footer />
    </div>
  );
};
