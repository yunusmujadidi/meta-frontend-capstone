import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export const Container = ({
  className = "",
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={cn(`container mx-auto px-12 md:px-16 lg:px-20 ${className}`)}
    >
      {children}
    </div>
  );
};
