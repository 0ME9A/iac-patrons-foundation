import type { ReactNode, ButtonHTMLAttributes } from "react";

interface BtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  baseStyle?: boolean;
  className?: string;
}

export default function Btn({
  children,
  baseStyle = true,
  className = "",
  ...rest
}: BtnProps) {
  const baseClass =
    "px-6 py-2 bg-green-900 border-2 border-fresh-leaf text-white rounded-full duration-300 transition-all shadow-lg shadow-fresh-leaf/40 hover:shadow-fresh-leaf-60 hover:bg-fresh-leaf";

  return (
    <button className={`${baseStyle ? baseClass : ""} ${className}`} {...rest}>
      {children}
    </button>
  );
}
