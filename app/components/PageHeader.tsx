import type { JSX } from "react";

interface PropsInt {
  title: JSX.Element;
  subTitle: JSX.Element;
}

export default function PageHeader({ title, subTitle }: PropsInt) {
  return (
    <header className="flex flex-col gap-4 items-center">
      <h1 className="lg:text-[5rem] lg:leading-[5rem] font-playfair font-bold">
        {title}
      </h1>
      <p className="text-lg max-w-screen-sm text-center text-misty-white">
        {subTitle}
      </p>
    </header>
  );
}
