import { useRef } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";
import type { BreakpointInfo } from "~/interfaces/data";

type ResponsiveColumnSetting = {
  minWidth: number;
  columns: number;
};

export default function useScrollReveal(
  index: number,
  breakpoint: BreakpointInfo,
  responsiveCols: ResponsiveColumnSetting[] = [
    { minWidth: 1024, columns: 4 },
    { minWidth: 640, columns: 2 },
  ]
): {
  ref: React.RefObject<null>;
  y: MotionValue<number>;
  opacity: MotionValue<number>;
} {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "0.8 1"],
  });

  const columnCount =
    responsiveCols.find((bp) => breakpoint.width >= bp.minWidth)?.columns ?? 1;

  const normalizedIndex = index % columnCount;
  const baseOffset = columnCount === 1 ? 30 : 50 * normalizedIndex;

  const y = useTransform(scrollYProgress, [0, 0.8], [baseOffset, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);

  return { ref, y, opacity };
}
