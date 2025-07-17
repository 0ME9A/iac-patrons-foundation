import type { Route } from "./+types";
import { MainMotion } from "~/components/Main";
import { metadata } from "~/metadata";
import GrowingBeyondTrees from "./GrowingBeyondTrees";
import PageHeader from "~/components/PageHeader";
import Transparency from "./Transparency";
import WTCTOM from "./WTCTOM";
import ECAG from "./ECAG";
import EGF from "./EGF";

export function meta({}: Route.MetaArgs) {
  return metadata.mission();
}

export default function Mission() {
  return (
    <MainMotion>
      <PageHeader
        title={"Our Core Mission"}
        subTitle={`Our mission is simple, urgent, and rooted in action.`}
        description={
          <>
            To restore ecological balance by planting trees, educating
            communities, and building a culture of environmental responsibility.
            <br />
            At IAC Patrons Foundation, we believe that reforestation isn’t just
            about planting saplings — it’s about growing living, breathing
            ecosystems that protect life for generations to come.
          </>
        }
      />
      <hr className="opacity-10 mt-16 sm:mt-20 container mx-auto" />
      <WTCTOM />
      <ECAG />
      <EGF />
      <Transparency />
      <GrowingBeyondTrees />
    </MainMotion>
  );
}
