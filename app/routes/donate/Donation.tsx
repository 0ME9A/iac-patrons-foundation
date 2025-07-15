import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Donation() {
  return (
    <div className="bg-fresh-leaf-40 border-y-4 border-dashed border-fresh-leaf">
      <Container className="grid md:grid-cols-2 gap-8 lg:gap-10 items-center">
        <div>
          <img
            src="https://plus.unsplash.com/premium_photo-1683121341746-defea7bfc148?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
