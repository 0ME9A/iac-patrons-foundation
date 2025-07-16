import Container from "~/components/Container";
import LinkBtn from "~/components/LinkBtn";
import Header from "~/components/Header";

export default function GetInvolved() {
  return (
    <Container className="!pb-0">
      <div className="bg-fresh-leaf rounded-3xl space-y-6 p-8 sm:p-10">
        <Header
          title="Get Involved"
          description={`You can volunteer, adopt a tree, or help organize a plantation
                  drive in your area. Whether you're an individual, school, or
                  business — every contribution counts.`}
          align={"l"}
        />

        <div className="flex flex-wrap gap-2 sm:gap-4">
          <LinkBtn title="Get involved" to="/volunteer">
            Get involved
          </LinkBtn>
        </div>
      </div>
    </Container>
  );
}
