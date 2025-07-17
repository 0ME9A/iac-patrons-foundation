import type { Route } from "./+types";
import { MainMotion } from "~/components/Main";
import { teamMembers } from "~/data/team";
import { metadata } from "~/metadata";
import TeamMemberCard from "~/components/cards/TeamCard";
import PageHeader from "~/components/PageHeader";
import Container from "~/components/Container";

export function meta({}: Route.MetaArgs) {
  return metadata.team();
}

export default function Team() {
  return (
    <MainMotion>
      <PageHeader
        title={"Our Team"}
        subTitle={`Let's meat our team`}
        description={`At IAC Patrons Foundation, we are guided by a passionate and visionary
        team that believes in restoring the planet through action, awareness,
        and community. Each member brings unique strengths — from environmental
        knowledge to public service — working together toward one mission: a
        greener, healthier future for all.`}
      />
      <Container className="space-y-6 !py-10 sm:!py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {teamMembers.map((item) => (
            <TeamMemberCard key={item.id} data={item} />
          ))}
        </div>
      </Container>
    </MainMotion>
  );
}
