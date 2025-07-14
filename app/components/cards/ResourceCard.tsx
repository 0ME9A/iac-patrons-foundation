import { BiSolidFilePdf } from "react-icons/bi";
import type { ResourcesInt } from "~/interfaces/data";

interface PropsInt {
  data: ResourcesInt;
  index: number;
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
