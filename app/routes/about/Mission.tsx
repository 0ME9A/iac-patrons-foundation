import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Mission() {
  return (
    <Container className="!py-10 grid md:grid-cols-2 lg:gap-10 items-center">
      <Header
        title="Our Environmental Mission"
        description="We aim to combat climate change, deforestation, and pollution by empowering communities to plant and nurture trees. Through awareness campaigns, educational programs, and citizen-led action, we’re turning everyday people into eco-guardians."
        align="c"
      />
      <div className="relative size-[60%] mx-auto md:size-full aspect-square md:scale-75 md:order-first">
        <img
          src="/images/about_03.jpg"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute right-0 bottom-0 scale-50 origin-bottom-right ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="/images/about_02.jpg"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute left-0 top-0 scale-50 origin-top-left ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="/images/about_01.jpg"
          alt="Tree planting activity"
          className="size-full rounded-full object-cover mx-auto ring-10 ring-offset-10 ring-green-900"
        />
      </div>
    </Container>
  );
}
