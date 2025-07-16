import { campaignsData } from "./data";
import CampaignCard from "~/components/cards/CampaignCard";
import StatsStatus from "~/components/StatsStatus";
import PageHeader from "~/components/PageHeader";
import Container from "~/components/Container";
import type { Route } from "./+types";
import { metadata } from "~/metadata";

export const campaignsHeader = {
  title: "Our Campaigns",
  subTitle: "Lend a helping hand to grow a greener future.",
  description:
    "From tree plantations to school outreach, every campaign is a step toward ecological restoration. Join hands with us to drive real, measurable change — one tree, one child, one community at a time.",
};

export function meta({}: Route.MetaArgs) {
  return metadata.campaigns();
}

export default function index() {
  return (
    <main className="pt-16 sm:pt-24">
      <PageHeader {...campaignsHeader} />
      {/* <hr className="opacity-10 mt-16 sm:mt-20 container mx-auto" /> */}

      <Container>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {campaignsData.map((campaign) => (
            <CampaignCard key={campaign.id} data={campaign} />
          ))}
        </div>
      </Container>
      <StatsStatus />
    </main>
  );
}
