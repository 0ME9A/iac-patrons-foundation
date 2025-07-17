import type { Route } from "./+types";
import { MainMotion } from "~/components/Main";
import { metadata } from "~/metadata";
import PageHeader from "~/components/PageHeader";
import Container from "~/components/Container";
import DonationMethod from "./DonationMethod";
import AfterDonation from "./AfterDonation";
import LinkBtn from "~/components/LinkBtn";
import FinalCall from "./FinalCall";
import Donation from "./Donation";

const donate_01 = [
  {
    id: "don_01",
    title: "Become a volunteer",
    description:
      "Every contribution helps us plant more trees, educate more children, and build greener, healthier communities.",
  },
  {
    id: "don_02",
    title: "Quick fund raise",
    description:
      "Every contribution helps us plant more trees, educate more children, and build greener, healthier communities.",
  },
  {
    id: "don_03",
    title: "Start donating",
    description:
      "By donating to IAC Patrons Foundation, you're not just giving money — you're investing in a cleaner environment, a cooler city, and a better future.",
  },
];

export function meta({}: Route.MetaArgs) {
  return metadata.donate();
}

export default function Donate() {
  return (
    <MainMotion>
      <PageHeader
        title={"Your Donation Plants Hope"}
        subTitle={"Lend a helping hand for our children's future."}
        description={
          "Every contribution helps us plant more trees, educate more children, and build greener, healthier communities."
        }
      />

      <LinkBtn to={"/donate/cart"} className="mx-auto block !w-fit">
        Donate now
      </LinkBtn>

      <div className="mt-16 sm:mt-20 container mx-auto" />
      <div className="bg-fresh-leaf-20">
        <Container className="!py-4">
          <ul className="grid md:grid-cols-3">
            {donate_01.map((item) => (
              <li key={item.id}>
                <div className="p-4 space-y-2 text-center">
                  <div className="space-y-2">
                    <h3 className="font-bold text-green-900">{item.title}</h3>
                    <p className="text-charcoal text-xs">{item.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </Container>
      </div>

      <Donation />
      <AfterDonation />
      <DonationMethod />
      <FinalCall />
    </MainMotion>
  );
}
