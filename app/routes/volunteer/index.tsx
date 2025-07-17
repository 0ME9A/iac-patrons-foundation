import type { Route } from "./+types";
import { MainMotion } from "~/components/Main";
import { metadata } from "~/metadata";
import PageHeader from "~/components/PageHeader";
import Help from "./Help";
import Join from "./Join";
import Gain from "./Gain";

export function meta({}: Route.MetaArgs) {
  return metadata.volunteer();
}

export default function Volunteer() {
  return (
    <MainMotion>
      <PageHeader
        title={"Volunteer With Us"}
        subTitle={`Join us in making India greener, cleaner, and more sustainable — one tree at a time.`}
        description={`Volunteering with IAC Patrons Foundation means more than just planting saplings. It's about becoming part of a growing movement that restores biodiversity, educates communities, and inspires long-term change.`}
      />
      <p className="mx-auto max-w-screen-md text-center">
        Whether you're a student, professional, homemaker, or retiree — if you
        care about the planet, there’s a role for you.
      </p>
      <hr className="opacity-10 mt-16 sm:mt-20 container mx-auto" />
      <Help />
      <Gain />
      <Join />
    </MainMotion>
  );
}
