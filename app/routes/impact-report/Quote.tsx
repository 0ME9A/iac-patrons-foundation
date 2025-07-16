import Container from "~/components/Container";

export default function Quote() {
  return (
    <Container className="!max-w-screen-md text-center">
      <blockquote className="italic text-lg">
        “Transparency is not just a principle, it's our practice. Every tree
        planted is geo-tagged, every rupee accounted for, and every life
        uplifted is a shared victory.”
      </blockquote>
      <cite className="block mt-4 text-misty-black dark:text-misty-white-60">
        — Vikash Somani, Founder
      </cite>
    </Container>
  );
}
