import PageHeader from "~/components/PageHeader";
import OurTeamAndValue from "./OurTeamAndValue";
import WhatWeDo from "./WhatWedo";
import Mission from "./Mission";
import Journey from "./Journey";
import Vision from "./Vision";

export default function About() {
  return (
    <main className="pt-16 sm:pt-24">
      <PageHeader
        title={"About us"}
        subTitle={"Who we are"}
        description={
          "IAC Patrons Foundation is a non-profit environmental organization dedicated to restoring ecological balance through large-scale tree plantation, green education, and grassroots participation. We unite individuals, schools, businesses, and civic bodies in a shared vision for a cleaner, greener planet."
        }
      />

      <hr className="opacity-10 mt-16 sm:mt-20 container mx-auto" />
      <Mission />
      <Vision />
      <Journey />
      <WhatWeDo />
      <OurTeamAndValue />
    </main>
  );
}
