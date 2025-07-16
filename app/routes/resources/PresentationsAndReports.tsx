import React from "react";
import Container from "~/components/Container";
import Header from "~/components/Header";
import DownloadCard from "./DownloadCard";

export const resourceReports = [
  {
    id: "res-report-01",
    title: "Annual Environmental Impact Report (2024)",
    desc: "A summary of trees planted, regions covered, and beneficiaries impacted in the past year.",
    fileUrl: "/resources/impact-report-2024.pdf",
  },
  {
    id: "res-ppt-01",
    title: "Green Awareness Campaign – School Edition",
    desc: "Slides to help teachers and volunteers run sessions on environmental stewardship.",
    fileUrl: "/resources/school-campaign-ppt.pptx",
  },
];

export default function PresentationsAndReports() {
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
        {resourceReports.map((item) => (
          <DownloadCard key={item.id} data={item} />
        ))}
      </div>
    </Container>
  );
}
