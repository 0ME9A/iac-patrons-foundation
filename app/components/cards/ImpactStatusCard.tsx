import type { ImpactStatusInt } from "~/interfaces/data";

interface PropsInt {
  data: ImpactStatusInt;
}

export default function ImpactStatusCard({ data }: PropsInt) {
  return (
    <p className="p-2 text-green-900 text-center">
      <span className="text-xl sm:text-3xl font-black ">{data.value}</span>{" "}
      <br />
      {data.label}
    </p>
  );
}
