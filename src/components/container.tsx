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
      className={cn(`container mx-auto px-16 md:px-20 lg:px-28 ${className}`)}
    >
      {children}
    </div>
  );
};
