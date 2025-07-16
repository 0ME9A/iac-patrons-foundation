import PageHeader from "./PageHeader";
import Container from "./Container";

export default function GenericError({
  message = "Something went wrong.",
  stack,
}: {
  message?: string;
  stack?: string;
}) {
  return (
    <Container className="text-center py-16">
      <PageHeader title={"Error"} description={message} subTitle={""} />

      {/* {stack && (
        <pre className="mt-6 text-left text-sm bg-gray-100 p-4 rounded overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )} */}
    </Container>
  );
}
