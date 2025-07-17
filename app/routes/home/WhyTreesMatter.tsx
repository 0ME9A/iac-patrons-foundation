import { whyTreesMatter } from "~/data/whyTreesMatter";
import { HeaderMotion } from "~/components/Header";
import { GiFruitTree } from "react-icons/gi";
import { CardWithImgMotion } from "~/components/cards/CardWithImg";
import useBreakpoint from "~/hooks/useBreakpoint";
import Container from "~/components/Container";

export default function WhyTreesMatter() {
  const breakpoint = useBreakpoint();

  return (
    <Container>
      <div className="space-y-10">
        <HeaderMotion
          icon={<GiFruitTree />}
          title={"Why Trees Matter"}
          description={`Trees are essential to life on Earth. They reduce air pollution,
            support biodiversity, prevent soil erosion, and help combat climate
            change. Planting trees is one of the simplest, most powerful ways to
            protect our planet for future generations.`}
        />
        <ul className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {whyTreesMatter.map((item, i) => (
            <CardWithImgMotion
              key={item.id}
              data={item}
              index={i}
              breakpoint={breakpoint}
            />
          ))}
        </ul>
      </div>
    </Container>
  );
}
