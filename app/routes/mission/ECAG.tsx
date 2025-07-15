import { ecag_data } from "./data";
import CardWithImg from "~/components/cards/CardWithImg";
import Container from "~/components/Container";
import Header from "~/components/Header";

export default function ECAG() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"Empowering Communities at the Grassroots"}
        subTitle="We believe real change happens when people lead it themselves."
        description={
          " Our mission includes empowering citizens, students, farmers, and local institutions to participate actively in restoring their surroundings."
        }
        align="l"
      />
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {ecag_data.map((item, i) => (
          <li key={item.id}>
            <CardWithImg data={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
