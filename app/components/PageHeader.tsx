import type { JSX } from "react";

interface PropsInt {
  title: JSX.Element | string;
  subTitle: JSX.Element | string;
  description?: string;
  className?: string;
}

export default function PageHeader({
  title,
  subTitle,
  description,
  className,
}: PropsInt) {
  return (
    <header className={`flex flex-col gap-4 items-center p-2 sm:p-4 ${className || ""}`}>
      <h1 className="text-[7vw] lg:text-[5rem] leading-[7vw] lg:leading-[5rem] font-playfair font-bold text-green-900">
        {title}
      </h1>
      <h2 className="text-xl max-w-screen-sm text-center text-accent dark:text-misty-white">
        <em>{subTitle}</em>
      </h2>
      {description && (
        <p className="mx-auto max-w-screen-md text-center">{description}</p>
      )}
    </header>
  );
}
