// hooks/useBreakpoint.ts
import { useEffect, useState } from "react";
import type { BreakpointInfo, BreakpointName } from "~/interfaces/data";

const breakpoints: Record<Exclude<BreakpointName, "base">, number> = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

export default function useBreakpoint(): BreakpointInfo {
  const getBreakpoint = (width: number): BreakpointInfo => {
    if (width < breakpoints.sm) return { name: "base", width };
    if (width < breakpoints.md) return { name: "sm", width };
    if (width < breakpoints.lg) return { name: "md", width };
    if (width < breakpoints.xl) return { name: "lg", width };
    if (width < breakpoints["2xl"]) return { name: "xl", width };
    return { name: "2xl", width };
  };

  const [breakpoint, setBreakpoint] = useState<BreakpointInfo>(
    getBreakpoint(typeof window !== "undefined" ? window.innerWidth : 0)
  );

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setBreakpoint(getBreakpoint(width));
    };

    handleResize(); // initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return breakpoint;
}
