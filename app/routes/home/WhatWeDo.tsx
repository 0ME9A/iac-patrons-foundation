import type { WhatWeDoInt } from "~/interfaces/data";
import { MdFaceRetouchingNatural, MdWork } from "react-icons/md";
import { RiCommunityFill } from "react-icons/ri";
import { FaSeedling } from "react-icons/fa6";
import { GiFruitTree } from "react-icons/gi";
import WhatWeDoCard from "~/components/cards/WhatWeDoCard";
import Container from "~/components/Container";
import Header from "~/components/Header";

const activities: WhatWeDoInt[] = [
  {
    id: "act-01",
    icon: <GiFruitTree className="text-3xl text-green-900" />,
    title: "Tree Plantation Drives",
    desc: "Organizing large-scale tree plantation drives in both urban and rural landscapes to fight deforestation and climate change.",
    color: "!bg-fresh-leaf-40",
  },
  {
    id: "act-02",
    icon: <FaSeedling className="text-3xl text-green-900" />,
    title: "Tree Adoption Program",
    desc: "Empowering individuals and corporates to sponsor and track the growth of planted trees through transparent monitoring.",
    color: "!bg-sunshine-yellow-40",
  },
  {
    id: "act-03",
    icon: <MdFaceRetouchingNatural className="text-3xl text-green-900" />,
    title: "Eco-Education",
    desc: "Conducting workshops, seminars, and school campaigns to instill ecological awareness and responsibility in the younger generation.",
    color: "!bg-accent-40",
  },
  {
    id: "act-04",
    icon: <RiCommunityFill className="text-3xl text-green-900" />,
    title: "Community Engagement",
    desc: "Collaborating with schools, colleges, and corporates to create impactful green movements driven by local communities.",
    color: "!bg-forest-green-40",
  },
];

export default function WhatWeDo() {
  return (
    <Container>
      <div className="space-y-10">
        <Header
          id="#what-we-do"
          icon={<MdWork />}
          title={"What We Do"}
          description={`Empowering communities and restoring ecosystems through focused green initiatives.`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {activities.map((item) => (
            <WhatWeDoCard key={item.id} data={item} />
          ))}
        </div>
      </div>
    </Container>
  );
}
