import type { Route } from "./+types";
import { Hero } from "./Hero";
import StatsStatus from "~/components/StatsStatus";
import WhyTreesMatter from "./WhyTreesMatter";
import Resources from "./Resources";
import WhatWeDo from "./WhatWeDo";
import Mission from "./Mission";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <main>
      <Hero />
      {/* <EnvironmentalMission /> */}
      <Mission />
      <WhatWeDo />
      <WhyTreesMatter />
      <StatsStatus />
      <Resources />
    </main>
  );
}
