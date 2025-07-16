import Container from "~/components/Container";
import LinkBtn from "~/components/LinkBtn";
import Header from "~/components/Header";

export default function FullReport() {
  return (
    // <div className="bg-gradient-to-b from-green-900/40 border-t-4 border-green-900 border-dashed">
    <Container className="space-y-6 !py-10 sm:!py-16">
      <Header
        title={"Download Full Impact Report (PDF)"}
        description={
          "Get detailed stats, stories, and verified updates about each campaign from the past year."
        }
      />
      <div className="mx-auto w-fit">
        <LinkBtn
          title="Download PDF"
          to="/downloads/impact-report-2024.pdf"
          download={true}
        >
          Download PDF
        </LinkBtn>
      </div>
    </Container>
    // </div>
  );
}
