import { getPrimaryContactInfo } from "~/utils/getContactInfo";
import Container from "~/components/Container";
import LinkBtn from "~/components/LinkBtn";
import Header from "~/components/Header";

export default function FinalCall() {
  const contact = getPrimaryContactInfo();

  return (
    <Container className="space-y-4 text-center">
      <Header
        title={"A Greener Future Starts With You"}
        description={
          "Your donation, no matter how big or small, brings us closer to our dream: An India where every citizen helps plant, protect, and preserve life."
        }
      />

      <div className="space-y-2 text-sm">
        <a href={`mailto:${contact.email}`} className="hover:underline block">
          {contact.email}
        </a>
        <a
          href={`tel:${
            ((contact.phone.code as string) + contact.phone.number) as string
          }`}
          className="hover:underline block"
        >
          {contact.phone.code} {contact.phone.number}
        </a>
      </div>
      <LinkBtn
        to="/donate/cart"
        className="mt-4 bg-fresh-leaf hover:bg-green-700 transition-all"
      >
        Donate Now
      </LinkBtn>
    </Container>
  );
}
