import Container from "~/components/Container";
import Header from "~/components/Header";
import LinkBtn from "~/components/LinkBtn";

export default function GetInvolved() {
  return (
    <div className="bg-green-900">
      <Container className="!max-w-screen-lg">
        <div className="bg-fresh-leaf rounded-3xl space-y-6 p-8 sm:p-10">
          <Header
            title="Get Involved"
            description={`You can volunteer, adopt a tree, or help organize a plantation
              drive in your area. Whether you're an individual, school, or
              business — every contribution counts.`}
            align={"l"}
          />

          <div className="flex flex-wrap gap-2 sm:gap-4">
            <LinkBtn
              to="/volunteer"
              className="bg-fresh-leaf hover:bg-fresh-leaf-80"
            >
              Become a volunteer
            </LinkBtn>
            <LinkBtn to="/adopt" className="bg-green-900 hover:bg-fresh-leaf">
              Adopt a tree
            </LinkBtn>
            <LinkBtn
              to="/partners"
              title="Partner With Us"
              className="bg-accent hover:bg-accent-80"
            >
              Partner with us
            </LinkBtn>
          </div>
        </div>
      </Container>
    </div>
  );
}
