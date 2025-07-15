import type { VolunteerInt } from "~/interfaces/data";

interface PropsInt {
  data: VolunteerInt;
  index: number;
}

export default function VolunteerCard({ data, index }: PropsInt) {
  return (
    <div className="flex items-start gap-3 bg-fresh-leaf-20 rounded-3xl p-10 relative overflow-hidden">
      <span className="text-xl text-fresh-leaf">
        {index < 10 ? "0" : ""}
        {index + 1}
      </span>
      <p>{data.title}</p>
      <span className="absolute text-[5rem] font-black text-fresh-leaf opacity-20 right-10 scale-300 rotate-12">
        {index + 1}
        {/* <BiSolidFilePdf /> */}
      </span>
    </div>
  );
}
