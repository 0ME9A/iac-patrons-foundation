import type { Route } from "./+types";
import { metadata } from "~/metadata";
import PresentationsAndReports from "./PresentationsAndReports";
import PostersWorksheets from "./PostersWorksheets";
import ToolkitAndGuides from "./ToolkitAndGuides";
import PageHeader from "~/components/PageHeader";
import Videos from "./Videos";

export function meta({}: Route.MetaArgs) {
  return metadata.resources();
}

export default function Resources() {
  return (
    <main className="pt-16 sm:pt-24">
      <PageHeader
        title={"Resources & Toolkits"}
        subTitle={`Empowering individuals and communities through knowledge and action.`}
        description={`Explore a curated collection of educational materials, printable eco-kits, guides for tree plantation, and sustainability tools. Whether you're a student, teacher, volunteer, or green enthusiast — these resources are designed to help you take meaningful environmental action.`}
      />
      <ToolkitAndGuides />
      <PostersWorksheets />
      <Videos />
      {/* <section className="container mx-auto px-4 mt-16">
        <h2 className="text-2xl font-semibold mb-6">External Resources</h2>
        <ul className="list-disc list-inside space-y-3">
          <li>
            <a
              href="https://www.un.org/sustainabledevelopment/climate-change/"
              target="_blank"
              className="hover:underline"
            >
              UN SDGs on Climate Action
            </a>
          </li>
          <li>
            <a
              href="https://moef.gov.in/en/green-india-mission/"
              target="_blank"
              className="hover:underline"
            >
              India's National Mission for a Green India
            </a>
          </li>
        </ul>
      </section> */}
      <PresentationsAndReports />
    </main>
  );
}
