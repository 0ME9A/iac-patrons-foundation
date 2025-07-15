import { teamMembers } from "~/data/team";
import TeamMemberCard from "~/components/cards/TeamCard";
import Container from "~/components/Container";
import PageHeader from "~/components/PageHeader";

export default function Team() {
  return (
    <main className="pt-16 sm:pt-24 space-y-6">
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
    </main>
  );
}
