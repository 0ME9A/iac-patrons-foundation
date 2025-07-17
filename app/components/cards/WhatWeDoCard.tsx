import type { BreakpointInfo, WhatWeDoInt } from "~/interfaces/data";
import { RiArrowRightLine } from "react-icons/ri";
import { motion } from "motion/react";
import { Link } from "react-router";
import useScrollReveal from "~/hooks/useScrollReveal";

interface PropsInt {
  data: WhatWeDoInt;
  index?: number;
}
interface PropsIntMotion extends PropsInt {
  breakpoint: BreakpointInfo;
}

export default function WhatWeDoCard({ data }: PropsInt) {
  return (
    <div
      className={`p-8 sm:p-10 bg-fresh-leaf flex flex-col justify-center rounded-3xl gap-4 ${data.color}`}
    >
      <div className="text-2xl rounded-full bg-misty-white w-fit p-2">
        {data.icon}
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
      <Link
        to={"/"}
        className="flex items-center gap-2 hover:gap-3 duration-300 font-semibold w-fit"
      >
        Read more <RiArrowRightLine />
      </Link>
    </div>
  );
}

export function WhatWeDoCardMotion({
  data,
  index = 1,
  breakpoint,
}: PropsIntMotion) {
  const { ref, y, opacity } = useScrollReveal(index, breakpoint, [
    { minWidth: 1024, columns: 4 },
    { minWidth: 640, columns: 2 },
  ]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className={`p-8 sm:p-10 bg-fresh-leaf flex flex-col justify-center rounded-3xl gap-4 ${data.color}`}
    >
      <div className="text-2xl rounded-full bg-misty-white w-fit p-2">
        {data.icon}
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
      <Link
        to={"/"}
        className="flex items-center gap-2 hover:gap-3 duration-300 font-semibold w-fit"
      >
        Read more <RiArrowRightLine />
      </Link>
    </motion.div>
  );
}
