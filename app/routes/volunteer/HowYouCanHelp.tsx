import VolunteerCard from "~/components/cards/BasicCard_2";
import Container from "~/components/Container";
import Header from "~/components/Header";

const volunteers = [
  {
    id: "vol-01",
    title: "Assisting in tree plantation drives",
  },
  {
    id: "vol-02",
    title: "Documenting events (photography, video, social media)",
  },
  {
    id: "vol-03",
    title: "Conducting eco-awareness sessions in schools",
  },
  {
    id: "vol-04",
    title: "Coordinating local community outreach",
  },
  {
    id: "vol-05",
    title: "Supporting logistics, kits, and resource distribution",
  },
  {
    id: "vol-06",
    title: "Helping with content, design, or online campaigns",
  },
];

export default function HowYouCanHelp() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"How You Can Help"}
        description={
          "We welcome volunteers from all backgrounds to contribute in ways that match their interests and strengths."
        }
        align="l"
      />
      <ul className="grid sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
        {volunteers.map((item, i) => (
          <li key={item.id}>
            <VolunteerCard data={item} index={i} />
          </li>
        ))}
      </ul>
      <p className="p-2 sm:p-4 !py-6">
        <strong>Note -</strong>
        No experience is required — just commitment and compassion.
      </p>
    </Container>
  );
}
