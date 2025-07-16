import { impactStats } from "~/data/stats";
import ImpactStatusCard from "./cards/ImpactStatusCard";

export default function StatsStatus() {
  return (
    <section className="bg-forest-green-20 py-16 relative">
      <img
        src="https://images.unsplash.com/photo-1551970634-747846a548cb?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
        className="size-full object-cover absolute left-0 top-0 opacity-5"
      />
      <div className="container mx-auto p-2 sm:p-4 grid grid-cols-2 md:grid-cols-4 text-sm md:divide-x divide-green-900/20 relative z-[1]">
        {impactStats.map((item) => (
          <ImpactStatusCard key={item.id} data={item} />
        ))}
      </div>
    </section>
  );
}
