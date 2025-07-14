import Container from "~/components/Container";
import LinkBtn from "~/components/LinkBtn";
import { FaBook, FaTools, FaImage, FaSchool } from "react-icons/fa";
import ResourceCard from "~/components/cards/ResourceCard";
import { RiFolderZipFill } from "react-icons/ri";
import Header from "~/components/Header";
import { GrResources } from "react-icons/gr";

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
  return (
    <div>
      <Container>
        <div className="rounded-3xl">
          <div className="space-y-6">
            <Header
              icon={<GrResources />}
              title={"Resources"}
              description={`Explore our growing library of tools and knowledge to support your green initiatives.`}
            />

            <div className="grid sm:grid-cols-2 gap-2 sm:gap-4 lg:gap-6">
              {resources.map((item, i) => (
                <ResourceCard key={item.id} data={item} index={i} />
              ))}
            </div>
            <hr className="opacity-10" />
            <div className="flex items-center justify-end gap-3 bg-fresh-leaf-20 rounded-3xl p-10 relative overflow-hidden">
              <LinkBtn to="/resources" title="Download Now" className="">
                Download now
              </LinkBtn>
              <span className="absolute text-[5rem] font-black text-fresh-leaf opacity-20 left-10 scale-200 rotate-12">
                <RiFolderZipFill />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
