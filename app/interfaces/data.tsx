import type { JSX } from "react";

export interface ImpactStatusInt {
  id: string;
  value: string;
  label: string;
}

export interface WhatWeDoInt {
  id: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  color: string;
}

export interface ImgInt {
  src: string;
  alt: string;
}

export interface WhyTreesMatterInt {
  id: string;
  title: string;
  desc: string;
  img: ImgInt;
}

export interface CardWithImgInt {
  id: string;
  title: string;
  desc: string;
  img: ImgInt;
}

export interface LinkInt {
  id: string;
  title: string;
  href: string;
  external?: boolean; // optional, default false if not provided
}

export interface FooterSectionInt {
  id: string;
  title: string;
  links: LinkInt[];
}

// export interface socialMediaLinkInt extends LinkInt {
//   icon: JSX.Element;
// }

export interface ResourcesInt {
  id: string;
  title: string;
  icon: JSX.Element;
}

export interface VolunteerInt {
  id: string;
  title: string;
}

export interface BasicCard_2 {
  id: string;
  text: string;
}

export interface CountryCodeInt {
  country: string;
  code: string;
  iso: string;
}

export interface ImgInt {
  src: string;
  alt: string;
}

export interface TeamMembersInt {
  id: string;
  name: string;
  title: string;
  description: string;
  img: ImgInt;
  social: LinkInt[];
}

export type SMINames = "twitter" | "linkedin" | "instagram" | "facebook";
export const SMI_KEYS: SMINames[] = [
  "twitter",
  "linkedin",
  "instagram",
  "facebook",
];

// contact info
export interface AddressInt {
  headOffice: boolean;
  building: string;
  near: string;
  pinCode: string;
  city: string;
  state: string;
  country: string;
  string: string;
}

export interface PhoneInt {
  primary: boolean;
  code: string;
  number: string;
}

export interface EmailInt {
  id: string;
  primary: boolean;
}

export interface ContactInt {
  address: AddressInt[];
  phone: PhoneInt[];
  email: EmailInt[];
}

export interface CampaignInt {
  id: string;
  title: string;
  description: string;
  location: string;
  date: string;
  image: string;
  link: string;
}
