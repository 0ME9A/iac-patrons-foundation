import { motion } from "motion/react";
import { useEffect, useState, type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export default function Main({ children, className = "" }: ContainerProps) {
  return <main className={`pt-16 sm:pt-24 ${className}`}>{children}</main>;
}

export function MainMotion({ children, className = "" }: ContainerProps) {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setShouldAnimate(true), 50); // give layout time to settle
    return () => clearTimeout(timeout);
  }, []);

  return (
    <motion.main
      initial={{ y: -20, opacity: 0 }}
      animate={shouldAnimate ? { y: 0, opacity: 1 } : {}}
      className={`pt-16 sm:pt-24 ${className}`}
    >
      {children}
    </motion.main>
  );
}
