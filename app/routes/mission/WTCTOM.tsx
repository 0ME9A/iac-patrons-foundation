import { whyTreesMatter } from "~/data/whyTreesMatter";
import CardWithImg from "~/components/cards/CardWithImg";
import Container from "~/components/Container";
import Header from "~/components/Header";

export default function WTCTOM() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"Why Trees Are Central to Our Mission"}
        description={
          "Trees are nature’s greatest solution to many of humanity’s biggest problems — air pollution, climate change, biodiversity loss, and urban heat. By focusing on tree plantation, we address:"
        }
        align="l"
      />
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {whyTreesMatter.map((item) => (
          <CardWithImg key={item.id} data={item} />
        ))}
        <li className="bg-fresh-leaf-20 rounded-3xl border-4 border-dashed border-fresh-leaf-40 flex justify-center items-center">
          <p className="p-10">
            <em>
              Every tree planted is a long-term investment in life — and in
              hope.
            </em>
          </p>
        </li>
      </ul>
    </Container>
  );
}
