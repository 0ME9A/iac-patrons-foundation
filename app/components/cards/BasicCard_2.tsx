import type { BasicCard_2, VolunteerInt } from "~/interfaces/data";

interface PropsInt {
  data: BasicCard_2;
  index: number;
}

export default function BasicCard_2({ data, index }: PropsInt) {
  return (
    <div className="h-full flex items-start gap-3 bg-fresh-leaf-20 rounded-3xl p-10 relative overflow-hidden">
      <span className="text-xl text-fresh-leaf">
        {index < 10 ? "0" : ""}
        {index + 1}
      </span>
      <p>{data.text}</p>
      <span className="absolute text-[5rem] font-black text-fresh-leaf opacity-20 right-10 scale-300 rotate-12">
        {index + 1}
        {/* <BiSolidFilePdf /> */}
      </span>
    </div>
  );
}
