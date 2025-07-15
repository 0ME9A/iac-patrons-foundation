import Header from "~/components/Header";
import { GiRecycle, GiWaterDrop, GiPartyPopper } from "react-icons/gi";
import { RiGovernmentFill } from "react-icons/ri";
import Container from "~/components/Container";
import BasicCard from "~/components/cards/BasicCard";

const beyondItems = [
  {
    id: "bey_01",
    icon: <GiRecycle />,
    title: "Sustainable Living",
    desc: "Encouraging eco-conscious choices like reusables, minimalism, and green energy habits.",
  },
  {
    id: "bey_02",
    icon: <GiWaterDrop />,
    title: "Waste & Water Conservation",
    desc: "Promoting waste reduction, recycling, and responsible water usage in communities.",
  },
  {
    id: "bey_03",
    icon: <RiGovernmentFill />,
    title: "Policy & Local Action",
    desc: "Engaging with local governments to support environmental legislation and civic programs.",
  },
  {
    id: "bey_04",
    icon: <GiPartyPopper />,
    title: "Celebrating Eco-Champions",
    desc: "Recognizing festivals, awareness days, and grassroots heroes taking action for the planet.",
  },
];

export default function GrowingBeyondTrees() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title="Growing Beyond Trees"
        description="Our broader vision goes beyond afforestation — we aim to ignite a sustainable movement that helps people live in deeper harmony with nature."
        align="c"
      />

      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {beyondItems.map((item) => (
          <li key={item.id}>
            <BasicCard data={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
