import type { SMINames } from "~/interfaces/data";
import type { JSX } from "react";
import { SMI } from "~/data/icons";

export function getSMI(name: string): JSX.Element {
  return SMI[name.toLowerCase() as SMINames];
}
