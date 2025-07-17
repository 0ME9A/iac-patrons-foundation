import { FaBook, FaTools, FaImage, FaSchool } from "react-icons/fa";
import { ResourceCardMotion } from "~/components/cards/ResourceCard";
import { motion, useScroll, useTransform } from "motion/react";
import { HeaderMotion } from "~/components/Header";
import { RiFolderZipFill } from "react-icons/ri";
import { GrResources } from "react-icons/gr";
import { useRef } from "react";
import useBreakpoint from "~/hooks/useBreakpoint";
import Container from "~/components/Container";
import LinkBtn from "~/components/LinkBtn";

const resources = [
  {
    id: "res-01",
    title: "Tree planting guides",
    icon: <FaBook />,
  },
  {
    id: "res-02",
    title: "Event toolkit",
    icon: <FaTools />,
  },
  {
    id: "res-03",
    title: "Environmental awareness posters",
    icon: <FaImage />,
  },
  {
    id: "res-04",
    title: "School activity kits",
    icon: <FaSchool />,
  },
];

export default function ResourcesSection() {
  const breakpoint = useBreakpoint();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.7 1"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="overflow-y-hidden">
      <Container>
        <div className="rounded-3xl">
          <div className="space-y-6">
            <HeaderMotion
              icon={<GrResources />}
              title={"Resources"}
              description={`Explore our growing library of tools and knowledge to support your green initiatives.`}
            />

            <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
              {resources.map((item, i) => (
                <ResourceCardMotion
                  key={item.id}
                  data={item}
                  index={i}
                  breakpoint={breakpoint}
                />
              ))}
            </div>
            <hr className="opacity-10" />
            <motion.div
              ref={ref}
              style={{ y, opacity }}
              className="flex items-center justify-end gap-3 bg-fresh-leaf-20 rounded-3xl p-10 relative overflow-hidden"
            >
              <LinkBtn to="/resources" title="Download Now" className="">
                Download now
              </LinkBtn>
              <span className="absolute text-[5rem] font-black text-fresh-leaf opacity-20 left-10 scale-200 rotate-12">
                <RiFolderZipFill />
              </span>
            </motion.div>
          </div>
        </div>
      </Container>
    </div>
  );
}
