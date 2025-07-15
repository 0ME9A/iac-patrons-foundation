import { ecoForGrowthData } from "./data";
import CardWithImg from "~/components/cards/CardWithImg";
import Container from "~/components/Container";
import Header from "~/components/Header";

export default function EGF() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"Educating for a Greener Future"}
        description={"Education is the seed of long-term impact."}
        align="l"
      />
      <p>
        We integrate eco-education into schools, colleges, and youth clubs
        through:
      </p>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {ecoForGrowthData.map((item, i) => (
          <li key={item.id}>
            <CardWithImg data={item} />
          </li>
        ))}
      </ul>
      <p className="p-2 sm:p-4 !py-6">
        <strong>The goal:</strong>
        <em> Make tree care a shared community value. </em>
      </p>
    </Container>
  );
}
