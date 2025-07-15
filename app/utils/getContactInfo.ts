import { contactInfo } from "~/data/sitemap";

export const getPrimaryContactInfo = () => {
  const email = contactInfo.email.find((item) => item.primary)?.id;
  const number = contactInfo.phone.find((item) => item.primary);
  const address = contactInfo.address.find((item) => item.headOffice)?.string;

  return {
    email,
    phone: { number: number?.number, code: number?.code },
    address,
  };
};
