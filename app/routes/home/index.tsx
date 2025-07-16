import type { Route } from "./+types";
import { metadata } from "~/metadata";
import { Hero } from "./Hero";
import StatsStatus from "~/components/StatsStatus";
import WhyTreesMatter from "./WhyTreesMatter";
import Resources from "./Resources";
import WhatWeDo from "./WhatWeDo";
import Mission from "./Mission";

export function meta({}: Route.MetaArgs) {
  return metadata.home();
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
