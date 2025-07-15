import { FaMapMarkerAlt, FaCamera, FaCertificate } from "react-icons/fa";
import BasicCard from "~/components/cards/BasicCard";
import Container from "~/components/Container";
import Header from "~/components/Header";

const features = [
  {
    id: "fea_01",
    icon: <FaMapMarkerAlt />,
    title: "Growth Updates & Geo-Coordinates",
    desc: "Get regular updates on the health and GPS location of your adopted trees.",
  },
  {
    id: "fea_02",
    icon: <FaCamera />,
    title: "Real Photos & Impact Reports",
    desc: "Receive field photos and documented progress in detailed reports.",
  },
  {
    id: "fea_03",
    icon: <FaCertificate />,
    title: "Digital Certificates",
    desc: "Every donor receives a digital certificate honoring their participation.",
  },
];

export default function Transparency() {
  return (
    <div className="bg-gradient-to-b from-fresh-leaf to-misty-white border-t-4 border-dashed border-fresh-leaf">
      <Container className="space-y-6 !py-10 sm:!py-16">
        <Header
          title="Monitoring, Transparency & Impact"
          description="We’re committed to transparency and accountability in every project. Our plantation sites are mapped, monitored, and reported with precision to ensure every contribution creates measurable impact."
          align="c"
        />

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
          {features.map((item) => (
            <li key={item.id}>
              <BasicCard data={item} />
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
