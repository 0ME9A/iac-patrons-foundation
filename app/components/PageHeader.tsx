import type { JSX } from "react";

interface PropsInt {
  title: JSX.Element | string;
  subTitle: JSX.Element | string;
  className?: string;
}

export default function PageHeader({ title, subTitle, className }: PropsInt) {
  return (
    <header className={`flex flex-col gap-4 items-center ${className || ""}`}>
      <h1 className="text-[7vw] lg:text-[5rem] leading-[7vw] lg:leading-[5rem] font-playfair font-bold text-green-900">
        {title}
      </h1>
      <h2 className="text-xl max-w-screen-sm text-center text-charcoal dark:text-misty-white">
        {subTitle}
      </h2>
    </header>
  );
}
