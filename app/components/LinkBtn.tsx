import type { ReactNode } from "react";
import { Link, type LinkProps } from "react-router";

interface LinkBtnProps extends LinkProps {
  children: ReactNode;
  baseStyle?: boolean;
  className?: string;
}

export default function LinkBtn({
  to,
  children,
  baseStyle = true,
  className = "",
  ...rest // 👈 capture all other router Link props
}: LinkBtnProps) {
  const baseClass =
    "px-6 py-2 bg-green-900 border-2 border-fresh-leaf text-white rounded-full duration-300 transition-all shadow-lg shadow-fresh-leaf/40 hover:shadow-fresh-leaf-60 hover:bg-fresh-leaf";

  return (
    <Link
      to={to}
      className={`${baseStyle ? baseClass : ""} ${className}`}
      {...rest} // 👈 pass them down to <Link>
    >
      {children}
    </Link>
  );
}
