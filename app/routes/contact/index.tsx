import type { Route } from "./+types";
import { MainMotion } from "~/components/Main";
import { metadata } from "~/metadata";
import PageHeader from "~/components/PageHeader";

export function meta({}: Route.MetaArgs) {
  return metadata.contact();
}

export default function Contact() {
  return (
    <MainMotion>
      <PageHeader
        title={"Get in Touch"}
        subTitle={`We’d love to hear from you`}
        description={`Whether you’re interested in planting trees, partnering with us, making
        a donation, or just learning more — we’re here to help. Our team is
        happy to assist you with any questions, feedback, or collaboration
        ideas.`}
      />
    </MainMotion>
  );
}
