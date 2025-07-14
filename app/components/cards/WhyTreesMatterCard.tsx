import type { WhyTreesMatterInt } from "~/interfaces/data";

interface PropsInt {
  data: WhyTreesMatterInt;
}

export default function WhyTreesMatterCard({ data }: PropsInt) {
  return (
    <div
      className={`p-4 pb-8 bg-fresh-leaf-20 flex flex-col justify-center rounded-3xl gap-4`}
    >
      <div className="w-full ">
        <img
          src={data.img.src}
          alt={data.img.alt}
          className="size-full object-cover aspect-video rounded-2xl bg-green-900"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl leading-tight font-semibold text-green-900 dark:text-white">
          {data.title}
        </h3>
        <p className="text-charcoal dark:text-misty-white-60 text-sm">
          {data.desc}
        </p>
      </div>
      <span className="h-full" />
    </div>
  );
}
