import PageHeader from "~/components/PageHeader";

export default function Contact() {
  return (
    <main className="pt-16 sm:pt-24 px-2 sm:px-4 space-y-6">
      <PageHeader
        title={"Get in Touch"}
        subTitle={`We’d Love to Hear From You`}
      />
      <p className="mx-auto max-w-screen-md text-center">
        Whether you’re interested in planting trees, partnering with us, making
        a donation, or just learning more — we’re here to help. Our team is
        happy to assist you with any questions, feedback, or collaboration
        ideas.
      </p>
    </main>
  );
}
