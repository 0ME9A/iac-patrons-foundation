import type { ContactInt, FooterSectionInt, LinkInt } from "~/interfaces/data";

export const headerMenu: LinkInt[] = [
  {
    id: "home",
    href: "/",
    title: "Home",
  },
  {
    id: "about",
    href: "/about",
    title: "About us",
  },
  {
    id: "mission",
    href: "/mission",
    title: "Mission",
  },
  {
    id: "our-team",
    href: "/team",
    title: "Our team",
  },
  {
    id: "volunteer",
    href: "/volunteer",
    title: "Volunteer",
  },
  {
    id: "contact-us",
    href: "/contact",
    title: "Contact us",
  },
];

export const footerSitemap: FooterSectionInt[] = [
  {
    id: "quick",
    title: "Quick Links",
    links: [
      { id: "foot_qui_01", title: "Home", href: "/", external: false },
      { id: "foot_qui_02", title: "About", href: "/about", external: false },
      {
        id: "foot_qui_03",
        title: "Campaigns",
        href: "/campaigns",
        external: false,
      },
      {
        id: "foot_qui_04",
        title: "Volunteer",
        href: "/volunteer",
        external: false,
      },
      {
        id: "foot_qui_05",
        title: "Contact",
        href: "/contact",
        external: false,
      },
    ],
  },
  {
    id: "explore",
    title: "Explore",
    links: [
      { id: "foot_exp_01", title: "Blogs", href: "/blogs", external: false },
      {
        id: "foot_exp_02",
        title: "Impact Report",
        href: "/impact-report",
        external: false,
      },
      {
        id: "foot_exp_03",
        title: "Resources",
        href: "/resources",
        external: false,
      },
      { id: "foot_exp_04", title: "FAQs", href: "/faqs", external: false },
    ],
  },
  {
    id: "legal",
    title: "Legal",
    links: [
      {
        id: "foot_leg_01",
        title: "Terms & Conditions",
        href: "/terms-and-conditions",
        external: false,
      },
      {
        id: "foot_leg_02",
        title: "Privacy Policy",
        href: "/privacy-policy",
        external: false,
      },
      {
        id: "foot_leg_03",
        title: "Cookie Policy",
        href: "/cookies",
        external: false,
      },
    ],
  },
];

export const socialMedia: LinkInt[] = [
  {
    id: "soc_01",
    title: "Twitter",
    href: "https://twitter.com/",
    external: true,
  },
  {
    id: "soc_02",
    title: "Instagram",
    href: "https://instagram.com/",
    external: true,
  },
  {
    id: "soc_03",
    title: "Facebook",
    href: "https://facebook.com/",
    external: true,
  },
];

// contact info support multiple
export const contactInfo: ContactInt = {
  address: [
    {
      headOffice: true,
      building: "3rd Floor",
      near: "Woodburn Central, 5A Woodburn Park Road",
      pinCode: "700020",
      city: "Kolkata",
      state: "West Bengal",
      country: "India",
      string:
        "3rd Floor, Woodburn Central, 5A Woodburn Park Road, Kolkata – 700020",
    },
  ],
  phone: [
    {
      primary: true,
      code: "+91",
      number: "9876543210",
    },
  ],
  email: [
    {
      primary: true,
      id: "volunteer@iacpatronsfoundation.org",
    },
  ],
};
