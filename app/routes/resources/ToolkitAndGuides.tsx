import React from "react";
import Container from "~/components/Container";
import Header from "~/components/Header";
import DownloadCard from "./DownloadCard";

export const resourceToolkits = [
  {
    id: "res-kit-01",
    title: "School Eco-Kit",
    desc: "An engaging toolkit for schools to launch green projects, tree drives, and classroom sustainability activities.",
    fileUrl: "/resources/school-eco-kit.pdf",
  },
  {
    id: "res-kit-02",
    title: "Community Plantation Guide",
    desc: "Step-by-step guide for organizing tree plantation drives in your neighborhood or locality.",
    fileUrl: "/resources/community-plantation-guide.pdf",
  },
  {
    id: "res-kit-03",
    title: "Volunteer Action Handbook",
    desc: "Instructions and tips for volunteers on ground-level plantation, tree care, and awareness campaigns.",
    fileUrl: "/resources/volunteer-handbook.pdf",
  },
];

export default function ToolkitAndGuides() {
  return (
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"Toolkit & Guides"}
        description={
          "Explore our growing library of tools and knowledge to support your green initiatives."
        }
        align="l"
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 lg:gap-6">
        {resourceToolkits.map((item) => (
          <DownloadCard key={item.id} data={item} />
        ))}
      </div>
    </Container>
  );
}
