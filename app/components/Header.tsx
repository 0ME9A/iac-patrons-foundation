import { type JSX } from "react";

interface PropsInt {
  id?: string;
  title: string;
  subTitle?: string;
  description: string;
  icon?: JSX.Element;
  className?: string;
  align?: "l" | "c" | "r";
}

const alignment = {
  l: "text-left items-start",
  c: "text-center items-center",
  r: "text-right items-end",
};

export default function Header({
  id,
  title,
  subTitle,
  description,
  icon,
  className = "",
  align = "c",
}: PropsInt) {
  return (
    <header
      id={id || ""}
      className={`flex flex-col gap-4 md:gap-6 ${alignment[align]} ${className}`}
    >
      {icon && (
        <span className="rounded-full w-fit bg-fresh-leaf shadow-md shadow-fresh-leaf/30 p-3 text-3xl sm:text-4xl text-white inline-block">
          {icon}
        </span>
      )}

      <div className="space-y-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-green-900 dark:text-white">
          {title}
        </h2>

        {subTitle && (
          <h3 className="text-accent dark:text-accent-80 italic text-lg">
            {subTitle}
          </h3>
        )}
      </div>

      <p className="text-base sm:text-lg text-charcoal dark:text-misty-white-80 leading-relaxed max-w-prose">
        {description}
      </p>
    </header>
  );
}
