import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import useScrollReveal from "~/hooks/useScrollReveal";
import type { BreakpointInfo, CardWithImgInt } from "~/interfaces/data";

interface PropsInt {
  data: CardWithImgInt;
  index?: number;
}
interface PropsIntMotion extends PropsInt {
  breakpoint: BreakpointInfo;
}

export default function CardWithImg({ data }: PropsInt) {
  return (
    <div
      className={`p-4 pb-8 bg-fresh-leaf-20 flex flex-col justify-center rounded-3xl gap-4 h-full`}
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

export function CardWithImgMotion({
  data,
  index = 1,
  breakpoint,
}: PropsIntMotion) {
  const { ref, y, opacity } = useScrollReveal(index, breakpoint, [
    { minWidth: 1024, columns: 4 },
    { minWidth: 768, columns: 3 },
    { minWidth: 640, columns: 2 },
  ]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`p-4 pb-8 bg-fresh-leaf-20 flex flex-col justify-center rounded-3xl gap-4 h-full`}
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
    </motion.div>
  );
}
