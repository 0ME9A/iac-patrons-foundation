import { WhatWeDoCardMotion } from "~/components/cards/WhatWeDoCard";
import { HeaderMotion } from "~/components/Header";
import { whatWeDo } from "~/data/whatWeDo";
import { MdWork } from "react-icons/md";
import { motion } from "motion/react";
import useBreakpoint from "~/hooks/useBreakpoint";
import Container from "~/components/Container";

export default function WhatWeDo() {
  const breakpoint = useBreakpoint();

  return (
    <Container>
      <motion.div className="space-y-10">
        <HeaderMotion
          id="#what-we-do"
          icon={<MdWork />}
          title={"What We Do"}
          description={`Empowering communities and restoring ecosystems through focused green initiatives.`}
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6">
          {whatWeDo.map((item, i) => (
            <WhatWeDoCardMotion
              key={item.id}
              data={item}
              index={i}
              breakpoint={breakpoint}
            />
          ))}
        </div>
      </motion.div>
    </Container>
  );
}
