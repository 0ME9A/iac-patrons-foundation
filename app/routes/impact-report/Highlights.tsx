import { highlights_data } from "./data";
import CardWithImg from "~/components/cards/CardWithImg";
import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Highlights() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header title={"Impact Highlights"} description={""} />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {highlights_data.map((item) => (
          <CardWithImg data={item} />
        ))}
      </div>
    </Container>
  );
}
