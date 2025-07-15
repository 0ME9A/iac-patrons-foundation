import type { SMINames, TeamMembersInt } from "~/interfaces/data";
import { Link } from "react-router";
import { SMI } from "~/data/icons";

interface PropsInt {
  data: TeamMembersInt;
}

export default function TeamMemberCard({ data }: PropsInt) {
  return (
    <div
      className={`p-4 bg-fresh-leaf-20 flex flex-col justify-center rounded-3xl gap-4`}
    >
      <div className="w-full ">
        <img
          src={data.img.src}
          alt={data.img.alt}
          className="size-full object-cover aspect-square rounded-2xl bg-green-900"
        />
      </div>
      <div className="space-y-1">
        <h3 className="text-xl leading-tight font-semibold text-green-900 dark:text-white">
          {data.name}
        </h3>
        <h4 className="text-sm leading-tight font-semibold text-charcoal">
          {data.title}
        </h4>
        <p className="text-charcoal dark:text-misty-white-60 text-sm mt-4">
          {data.description}
        </p>
      </div>
      <span className="h-full" />
      <ul className="flex">
        {data.social.map((item) => (
          <li key={item.id}>
            <Link
              to={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 inline-block rounded-full hover:bg-fresh-leaf-40 duration-300 transition-all"
            >
              {SMI[item.title.toLowerCase() as SMINames]}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
