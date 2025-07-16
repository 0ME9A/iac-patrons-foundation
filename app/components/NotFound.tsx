import Container from "./Container";
import LinkBtn from "./LinkBtn";
import PageHeader from "./PageHeader";

export default function NotFound() {
  return (
    <Container>
      <PageHeader
        title={"Opps!"}
        subTitle={"404 — Page Not Found"}
        description={
          "The page you're looking for doesn't exist or may have been moved."
        }
      />
      <div className="w-fit mx-auto mt-4">
        <LinkBtn to="/">Go Back Home</LinkBtn>
      </div>
    </Container>
  );
}
