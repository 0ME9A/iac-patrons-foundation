import BasicCard_2 from "~/components/cards/BasicCard_2";
import Container from "~/components/Container";
import Header from "~/components/Header";

const OTAV = [
  {
    id: "bey_01",
    text: "Transparency in our work and impact",
  },
  {
    id: "bey_02",
    text: "Empathy for people and planet",
  },
  {
    id: "bey_03",
    text: "Action over intention",
  },
  {
    id: "bey_04",
    text: "Sustainability through science and culture",
  },
];

export default function OurTeamAndValue() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title="Our Team & Values"
        description="Led by a passionate team of environmentalists, educators, and community advocates, we believe real impact grows when people and nature work hand-in-hand."
        align="c"
      />
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {OTAV.map((item, i) => (
          <li key={item.id}>
            <BasicCard_2 data={item} index={i} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
