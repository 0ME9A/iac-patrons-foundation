import type { CampaignInt } from "~/interfaces/data";

export const campaignsData: CampaignInt[] = [
  {
    id: "camp-01",
    title: "Urban Forest Project – Kolkata",
    description:
      "Transforming unused urban land into a dense green pocket through Miyawaki-style plantation.",
    location: "Kolkata, West Bengal",
    date: "July 2025",
    image:
      "https://images.unsplash.com/photo-1692719525839-e0713cb1e7f6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/campaigns/urban-forest-kolkata",
  },
  {
    id: "camp-02",
    title: "Green Schools Drive",
    description:
      "Distributing eco-kits and planting trees with students in 50+ schools across eastern India.",
    location: "West Bengal & Jharkhand",
    date: "August 2025",
    image:
      "https://images.unsplash.com/photo-1685645647479-a0232f3fec6d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/campaigns/green-schools-drive",
  },
  {
    id: "camp-03",
    title: "Adopt a Tree Program",
    description:
      "Empowering individuals and organizations to sponsor and track the growth of native trees.",
    location: "Nationwide",
    date: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1668526450019-ae9924b3ac4b?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    link: "/adopt-a-tree",
  },
];
