import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Donation() {
  return (
    <div className="bg-fresh-leaf-40 border-y-4 border-dashed border-fresh-leaf">
      <Container className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div>
          <img
            src="/images/donate_01.png"
            alt="donation picture"
            className="size-full md:size-[80%] aspect-video md:aspect-square rounded-3xl md:rounded-full object-cover mx-auto"
          />
        </div>
        <div>
          <Header
            title={"Your Donation Plants Hope"}
            description={
              "Every contribution helps us plant more trees, educate more children, and build greener, healthier communities."
            }
            align="l"
          />

          <p>
            By donating to <strong>IAC Patrons Foundation</strong>, you're not
            just giving money — you're investing in a cleaner environment, a
            cooler city, and a better future.
          </p>
          <ul className="space-y-2 list-disc p-4">
            <li>₹100 = 1 Tree Planted & Cared For</li>
            <li>₹1,000 = 10 Trees + School Eco-Kit</li>
            <li>₹5,000 = 50 Trees + Community Workshop</li>
          </ul>
          <p className="italic font-semibold mt-2 text-green-800 dark:text-green-300">
            “One tree can change a landscape. Your donation can change lives.”
          </p>
        </div>
      </Container>
    </div>
  );
}
