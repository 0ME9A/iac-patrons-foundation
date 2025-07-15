import type { JSX } from "react";

interface PropsInt {
  data: {
    icon: JSX.Element;
    title: string;
    desc: string;
  };
  className?: string;
}

export default function BasicCard({ data }: PropsInt) {
  return (
    <div className="bg-white/40 rounded-3xl p-8 sm:p-10 text-center space-y-4 h-full">
      <span className="inline-block text-3xl text-fresh-leaf">{data.icon}</span>
      <h3 className="font-semibold text-lg text-green-900 dark:text-white">
        {data.title}
      </h3>
      <p className="text-charcoal dark:text-misty-white-80 text-sm leading-relaxed">
        {data.desc}
      </p>
    </div>
  );
}
