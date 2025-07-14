import type { JSX } from "react";

export interface ImpactStatusInt {
  id: string;
  number: string;
  text: string;
}

export interface WhatWeDoInt {
  id: string;
  icon: JSX.Element;
  title: string;
  desc: string;
  color: string;
}

export interface WhyTreesMatterInt {
  id: string;
  title: string;
  desc: string;
  img: {
    src: string;
    alt: string;
  };
}

export interface FooterLinkInt {
  id: string;
  title: string;
  href: string;
  external?: boolean; // optional, default false if not provided
}

export interface FooterSectionInt {
  id: string; // useful for iteration keys
  title: string;
  links: FooterLinkInt[];
}

export interface socialMediaLinkInt {
  id: string;
  icon: JSX.Element;
  title: string;
  href: string;
  external: boolean;
}

export interface ResourcesInt {
  id: string;
  title: string;
  icon: JSX.Element;
}

export interface CountryCodeInt {
  country: string;
  code: string;
  iso: string;
}
