import { whyTreesMatter } from "~/data/whyTreesMatter";
import { GiFruitTree } from "react-icons/gi";
import CardWithImg from "~/components/cards/CardWithImg";
import Container from "~/components/Container";
import Header from "~/components/Header";

export default function WhyTreesMatter() {
  return (
    <Container>
      <div className="space-y-10">
        <Header
          icon={<GiFruitTree />}
          title={"Why Trees Matter"}
          description={`Trees are essential to life on Earth. They reduce air pollution,
            support biodiversity, prevent soil erosion, and help combat climate
            change. Planting trees is one of the simplest, most powerful ways to
            protect our planet for future generations.`}
        />
        <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {whyTreesMatter.map((item) => (
            <CardWithImg key={item.id} data={item} />
          ))}
        </ul>
      </div>
    </Container>
  );
}
