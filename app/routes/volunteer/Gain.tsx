import VolunteerCard from "~/components/cards/BasicCard_2";
import Container from "~/components/Container";
import Header from "~/components/Header";

const volunteers_gain = [
  {
    id: "vol-01",
    title: "Be part of real environmental action",
  },
  {
    id: "vol-02",
    title: "Learn practical sustainability skills",
  },
  {
    id: "vol-03",
    title: "Earn a certificate of participation",
  },
  {
    id: "vol-04",
    title: "Connect with like-minded green citizens",
  },
  {
    id: "vol-05",
    title: "Make measurable impact in your own locality",
  },
];

export default function Gain() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"What You’ll Gain"}
        description={
          "Volunteering with us is a meaningful, hands-on learning experience. You'll:"
        }
        align="l"
      />
      <ul className="grid sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
        {volunteers_gain.map((item, i) => (
          <li key={item.id}>
            <VolunteerCard data={item} index={i} />
          </li>
        ))}
      </ul>
      <p className="p-2 sm:p-4 !py-6">
        <em>
          Your time and energy are powerful tools — use them to leave a lasting
          legacy.
        </em>
      </p>
    </Container>
  );
}
