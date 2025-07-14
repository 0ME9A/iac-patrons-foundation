import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <section className={`container mx-auto py-16 sm:py-24 px-2 sm:px-4 ${className}`}>
      {children}
    </section>
  );
}
