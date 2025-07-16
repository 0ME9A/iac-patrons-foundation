import { BiSolidFilePdf } from "react-icons/bi";
import LinkBtn from "~/components/LinkBtn";

interface PropsInt {
  data: {
    title: string;
    desc: string;
    fileUrl: string;
  };
}
export default function DownloadCard({ data }: PropsInt) {
  return (
    <div className="bg-fresh-leaf-20 rounded-3xl p-8 sm:p-10 space-y-2 h-full relative overflow-hidden">
      <h3 className="font-semibold text-lg text-green-900 dark:text-white">
        {data.title}
      </h3>
      <p className="text-charcoal dark:text-misty-white-80 text-sm leading-relaxed">
        {data.desc}
      </p>
      <div className="h-2" />
      <LinkBtn to={data.fileUrl} download className="relative z-[2]">
        Download PDF
      </LinkBtn>
      <span className="absolute text-[5rem] font-black text-fresh-leaf opacity-20 top-1/2 right-10 scale-300 rotate-12">
        <BiSolidFilePdf />
      </span>
    </div>
  );
}
