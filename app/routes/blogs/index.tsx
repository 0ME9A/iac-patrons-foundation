import type { Route } from "./+types";
import { MainMotion } from "~/components/Main";
import { metadata } from "~/metadata";
import PageHeader from "~/components/PageHeader";

export function meta({}: Route.MetaArgs) {
  return metadata.blogs();
}

export default function index() {
  return (
    <MainMotion>
      <PageHeader
        title="Insights & Stories"
        subTitle="Explore our journey toward a greener planet."
        description="Read inspiring stories, environmental insights, and updates from our tree plantation drives, community programs, and sustainability efforts."
      />
      <hr className="opacity-10 mt-16 sm:mt-20 container mx-auto" />
      <p className="text-center p-4">Coming soon...</p>
    </MainMotion>
  );
}
