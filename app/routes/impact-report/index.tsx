import StatsStatus from "~/components/StatsStatus";
import PageHeader from "~/components/PageHeader";
import GetInvolved from "./GetInvolved";
import Highlights from "./Highlights";
import FullReport from "./FullReport";

export default function ImpactReport() {
  return (
    <main className="pt-16 sm:pt-24">
      <PageHeader
        title="Impact Report"
        subTitle="Transparency, Community, and Green Change"
        description="Our work is rooted in measurable action. Here's how your support has helped create a greener, healthier world."
      />
      <div className="mt-32" />
      <StatsStatus />
      <Highlights />
      <FullReport />
      <GetInvolved />
    </main>
  );
}
