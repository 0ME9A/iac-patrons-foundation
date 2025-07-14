import type { Route } from "./+types";
import { Hero } from "./Hero";
import EnvironmentalMission from "./EnvironmentalMission";
import WhatWeDo from "./WhatWeDo";
import Mission from "./Mission";
import WhyTreesMatter from "./WhyTreesMatter";
import GetInvolved from "./GetInvolved";
import Resources from "./Resources";
import Contact from "./Contact";

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
      <Resources />
    </main>
  );
}
