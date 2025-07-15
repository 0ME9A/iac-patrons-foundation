import type { CampaignInt } from "~/interfaces/data";
import LinkBtn from "../LinkBtn";

export default function CampaignCard({ data }: { data: CampaignInt }) {
  return (
    <div className="bg-fresh-green rounded-3xl overflow-hidden shadow-lg transition-all duration-300">
      <div className="w-full aspect-square overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="size-full object-cover hover:scale-110 duration-300 transition-all"
        />
      </div>
      <div className="p-5 space-y-2 pb-10">
        <h3 className="text-xl font-semibold text-green-900 dark:text-white">
          {data.title}
        </h3>
        <p className="text-sm text-charcoal dark:text-misty-white-80">
          {data.description}
        </p>
        <p className="text-xs text-misty-white-60 italic">
          {data.location} — {data.date}
        </p>
        <LinkBtn to={data.link}>Learn More</LinkBtn>
      </div>
    </div>
  );
}
