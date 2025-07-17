import type { BreakpointInfo, ResourcesInt } from "~/interfaces/data";
import { BiSolidFilePdf } from "react-icons/bi";
import { motion } from "motion/react";
import useScrollReveal from "~/hooks/useScrollReveal";

interface PropsInt {
  data: ResourcesInt;
  index: number;
}
interface PropsIntMotion extends PropsInt {
  breakpoint: BreakpointInfo;
}

export default function ResourceCard({ data, index }: PropsInt) {
  return (
    <div className="flex items-center gap-3 bg-fresh-leaf-20 rounded-3xl p-10 relative overflow-hidden">
      <span className="text-xl text-fresh-leaf">{data.icon}</span>
      <p>{data.title}</p>
      <span className="absolute text-[5rem] font-black text-fresh-leaf opacity-20 right-10 scale-300 rotate-12">
        <BiSolidFilePdf />
      </span>
    </div>
  );
}

export function ResourceCardMotion({
  data,
  index,
  breakpoint,
}: PropsIntMotion) {
  const { ref, y, opacity } = useScrollReveal(index, breakpoint, [
    { minWidth: 640, columns: 2 },
  ]);

  return (
    <motion.div
      ref={ref}
      style={{ y, opacity }}
      className="flex items-center gap-3 bg-fresh-leaf-20 rounded-3xl p-10 relative overflow-hidden"
    >
      <span className="text-xl text-fresh-leaf">{data.icon}</span>
      <p>{data.title}</p>
      <span className="absolute text-[5rem] font-black text-fresh-leaf opacity-20 right-10 scale-300 rotate-12">
        <BiSolidFilePdf />
      </span>
    </motion.div>
  );
}
