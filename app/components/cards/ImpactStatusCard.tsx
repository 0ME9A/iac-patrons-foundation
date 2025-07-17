import type { ImpactStatusInt } from "~/interfaces/data";
import { motion, useMotionValue, animate } from "framer-motion";
import { useInView, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface PropsInt {
  data: ImpactStatusInt;
}

export default function ImpactStatusCard({ data }: PropsInt) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [value, setValue] = useState(0);
  const count = useMotionValue(0);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, data.value, {
        duration: 5,
        ease: "easeOut",
        onUpdate: (latest) => setValue(Math.floor(latest)),
      });

      return () => controls.stop();
    }
  }, [isInView, count, data.value]);

  return (
    <p ref={ref} className="p-2 text-green-900 text-center">
      <motion.span
        className="text-xl sm:text-3xl font-black"
        aria-label={String(data.value)}
      >
        {value}
        {value > 10 && "+"}
      </motion.span>
      <br />
      {data.label}
    </p>
  );
}
