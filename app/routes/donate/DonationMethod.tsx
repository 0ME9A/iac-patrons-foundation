import Container from "~/components/Container";
import LinkBtn from "~/components/LinkBtn";
import Header from "~/components/Header";

export default function DonationMethod() {
  return (
    <Container className="!max-w-screen-lg !py-0">
      <div className="bg-fresh-leaf rounded-3xl space-y-6 p-8 sm:p-10 shadow-2xl shadow-fresh-leaf">
        <Header title="Ways to Donate" description={``} align={"l"} />

        <ul className="space-y-2">
          <li>
            💳 <strong>Online Payment</strong> (Credit/Debit/UPI/Net Banking)
          </li>
          <li>
            📦 <strong>Sponsor a Tree/Grove</strong> — Choose number of trees
            you want to support, and receive a digital certificate.
          </li>
          <li>
            💼 <strong>Corporate/CSR Donations</strong> — We partner with
            companies to offer transparent, branded plantation programs.
          </li>
        </ul>

        <div className="flex flex-wrap gap-2 sm:gap-4">
          <LinkBtn to="/donate/cart">Donate now</LinkBtn>
        </div>
      </div>
    </Container>
  );
}
