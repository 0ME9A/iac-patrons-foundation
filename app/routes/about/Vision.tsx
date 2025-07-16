import Container from "~/components/Container";
import Header from "~/components/Header";

export default function Vision() {
  return (
    <Container className="!py-10 grid md:grid-cols-2 lg:gap-10 items-center">
      <Header
        title="Our Vision"
        description="We imagine a future where every neighborhood thrives with green cover, biodiversity flourishes, and communities take pride in protecting their environment. True change starts at the grassroots — one tree, one family, one village at a time."
        align="c"
      />
      <div className="relative size-[60%] mx-auto md:size-full aspect-square md:scale-75">
        <img
          src="/images/about_04.jpg"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute right-0 bottom-0 scale-50 origin-bottom-right ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="/images/about_06.jpg"
          alt="Tree planting activity"
          className="size-[60%] rounded-full object-cover absolute left-0 top-0 scale-50 origin-top-left ring-4 ring-offset-8 ring-fresh-leaf"
        />
        <img
          src="/images/about_05.jpg"
          alt="Tree planting activity"
          className="size-full rounded-full object-cover mx-auto ring-10 ring-offset-10 ring-green-900"
        />
      </div>
    </Container>
  );
}
