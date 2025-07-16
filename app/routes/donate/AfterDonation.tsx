import BasicCard_2 from "~/components/cards/BasicCard_2";
import Container from "~/components/Container";
import Header from "~/components/Header";

const donate_01 = [
  {
    id: "don_01",
    text: "Tree saplings (native, climate-resilient species)",
  },
  {
    id: "don_02",
    text: "Tools, soil, and maintenance for 2+ years",
  },
  {
    id: "don_03",
    text: "Eco-education materials for students",
  },
  {
    id: "don_04",
    text: "Training for local volunteers",
  },
  {
    id: "don_05",
    text: "Monitoring & impact reporting",
  },
];

const donationInfo = [
  {
    id: "don_01",
    text: "Every rupee is accounted for, and every tree is geo-tagged and nurtured.",
  },
  {
    id: "don_02",
    text: "Tax benefits available under 80G (if applicable)",
  },
  {
    id: "don_03",
    text: "FCRA Number: 147121144",
  },
];

export default function AfterDonation() {
  return (
    <Container>
      <Header title={"Where Your Money Goes"} description={""} align="l" />
      <ul className="list-disc p-4 space-y-1">
        {donate_01.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <hr className="opacity-10 container mx-auto" />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6 mt-6">
        {donationInfo.map((item, i) => (
          <BasicCard_2 key={item.id} data={item} index={i} />
        ))}
      </div>
    </Container>
  );
}
