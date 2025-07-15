import { whatWeDo } from "~/data/whatWeDo";
import WhatWeDoCard from "~/components/cards/WhatWeDoCard";
import Container from "~/components/Container";
import Header from "~/components/Header";

export default function WhatWeDo() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        id="#what-we-do"
        // icon={<MdWork />}
        title={"What We Do"}
        description={`Empowering communities and restoring ecosystems through focused green initiatives.`}
      />

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
        {whatWeDo.map((item) => (
          <WhatWeDoCard key={item.id} data={item} />
        ))}
      </div>
    </Container>
  );
}
