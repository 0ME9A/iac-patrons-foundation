import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import { getPrimaryContactInfo } from "~/utils/getContactInfo";
import Container from "~/components/Container";
import Header from "~/components/Header";
import Btn from "~/components/Btn";

export default function JoinSection() {
  const contactInfo = getPrimaryContactInfo();

  return (
    <div className="bg-gradient-to-b from-fresh-leaf to-misty-white border-t-4 border-dashed border-fresh-leaf">
      <Container className="!py-10 sm:!py-16 flex">
        <div className="w-full space-y-6 flex-grow">
          <Header
            title={"Ready to Join? Let’s Plant Together"}
            description={`Fill out the form below to tell us a bit about yourself, your
            location, and how you'd like to contribute. Our team will connect
            with you and guide you on the next steps.`}
            align="l"
          />

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaMapMarkerAlt className="mt-1 text-fresh-leaf" />
              <span>
                <strong>Head Office</strong>
                <br />
                {contactInfo.address}
              </span>
            </li>
            <li className="flex gap-3">
              <FaEnvelope className="mt-1 text-fresh-leaf" />
              <span>
                <strong>Email</strong>
                <br />{" "}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="hover:underline"
                >
                  {contactInfo.email}
                </a>
                <br />
              </span>
            </li>
            <li className="flex gap-3">
              <FaPhoneAlt className="mt-1 text-fresh-leaf" />
              <span>
                <strong>Phone</strong>
                <br />
                <a
                  href={`tel:${
                    ((contactInfo.phone.code as string) +
                      contactInfo.phone.number) as string
                  }`}
                  className="hover:underline"
                >
                  {contactInfo.phone.code} {contactInfo.phone.number}
                </a>
              </span>
            </li>
          </ul>

          <Btn baseStyle className="bg-fresh-leaf hover:bg-fresh-leaf-80 mt-4">
            Volunteer sign-up form
          </Btn>
        </div>
        <div className="hidden lg:block relative w-fit scale-75">
          <img
            src="/images/about_03.jpg"
            alt="Tree planting activity"
            className="w-[40%] h-full rounded-full object-cover mx-auto absolute right-0 bottom-0 scale-50 origin-bottom-left ring-4 ring-offset-8 ring-fresh-leaf"
          />
          <img
            src="/images/about_02.jpg"
            alt="Tree planting activity"
            className="w-[40%] h-full rounded-full object-cover mx-auto absolute left-0 top-0 scale-50 origin-top-right ring-4 ring-offset-8 ring-fresh-leaf"
          />
          <img
            src="/images/about_01.jpg"
            alt="Tree planting activity"
            className="w-[40%] h-full rounded-full object-cover mx-auto ring-10 ring-offset-10 ring-green-900"
          />
        </div>
      </Container>
    </div>
  );
}
