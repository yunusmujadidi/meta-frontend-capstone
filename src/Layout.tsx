import type { ReactNode } from "react";
import { Header } from "./components/navbar";
import { Footer } from "./components/footer";
import { Toaster } from "./components/ui/sonner";

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
