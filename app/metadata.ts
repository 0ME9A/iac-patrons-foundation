const BASE_URL = import.meta.env.VITE_BASE_URL || "http://localhost:5173";

export const metadata = {
  home: () => {
    return [
      {
        title:
          "IAC Patrons Foundation – Restoring Nature Through Trees & Education",
      },
      {
        name: "description",
        content:
          "Join IAC Patrons Foundation in building a greener, cleaner India through tree plantations, environmental education, and community participation.",
      },
      {
        name: "keywords",
        content:
          "tree plantation, environmental NGO, India, green foundation, sustainability, reforestation, biodiversity, eco education",
      },
      { name: "author", content: "IAC Patrons Foundation" },

      // Open Graph
      { property: "og:title", content: "IAC Patrons Foundation" },
      {
        property: "og:description",
        content:
          "Restoring ecological balance through mass plantations, community programs, and school-based green education.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL },
      { property: "og:image", content: BASE_URL + "/og-image.jpg" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "IAC Patrons Foundation" },
      {
        name: "twitter:description",
        content:
          "Green India starts with you – contribute to tree plantations and eco-awareness with IAC Patrons Foundation.",
      },
      { name: "twitter:image", content: BASE_URL + "/og-image.jpg" },
    ];
  },
  about: () => {
    return [
      { title: "About Us – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "Learn about IAC Patrons Foundation — a non-profit organization committed to reforestation, environmental education, and community-driven sustainability across India.",
      },
      {
        name: "keywords",
        content:
          "about IAC Patrons, environmental NGO India, tree plantation organization, climate change, eco-education, reforestation, biodiversity, sustainable development",
      },
      { name: "author", content: "IAC Patrons Foundation" },

      // Open Graph
      { property: "og:title", content: "About Us – IAC Patrons Foundation" },
      {
        property: "og:description",
        content:
          "Discover the mission, vision, and journey of IAC Patrons Foundation — empowering communities through trees, education, and action.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/about" },
      { property: "og:image", content: BASE_URL + "/og-image.jpg" },

      // Twitter Card
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "About Us – IAC Patrons Foundation" },
      {
        name: "twitter:description",
        content:
          "Restoring nature, one tree at a time. Learn about our mission and team at IAC Patrons Foundation.",
      },
      { name: "twitter:image", content: BASE_URL + "/og-image.jpg" },
    ];
  },
  mission: () => {
    return [
      { title: "Our Mission – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "Discover how IAC Patrons Foundation is tackling climate change and deforestation through large-scale plantation and eco-education across India.",
      },
      {
        name: "keywords",
        content:
          "IAC Patrons mission, climate action, plantation drives, eco-awareness, India environment",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      { property: "og:title", content: "Our Mission – IAC Patrons Foundation" },
      {
        property: "og:description",
        content:
          "Learn more about our mission to build a greener, more sustainable India through community-driven action.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/mission" },
      { property: "og:image", content: BASE_URL + "/og/mission.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Our Mission – IAC Patrons Foundation",
      },
      {
        name: "twitter:description",
        content:
          "How we’re inspiring action and restoring biodiversity through trees, education, and awareness programs.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/mission.jpg" },
    ];
  },

  team: () => {
    return [
      { title: "Meet Our Team – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "Get to know the passionate team behind IAC Patrons Foundation driving reforestation and environmental awareness across India.",
      },
      {
        name: "keywords",
        content:
          "IAC team, environmental leaders, NGO founders, green experts, sustainability advocates",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      {
        property: "og:title",
        content: "Meet Our Team – IAC Patrons Foundation",
      },
      {
        property: "og:description",
        content:
          "Introducing our core team working on reforestation, eco-education, and grassroots action in India.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/team" },
      { property: "og:image", content: BASE_URL + "/og/team.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Meet Our Team – IAC Patrons Foundation",
      },
      {
        name: "twitter:description",
        content:
          "Know the people behind the cause. Meet our passionate team of change makers.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/team.jpg" },
    ];
  },
  volunteer: () => {
    return [
      { title: "Volunteer With Us – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "Join us in planting trees, educating youth, and restoring nature across India. Become a green volunteer today.",
      },
      {
        name: "keywords",
        content:
          "volunteer IAC, tree volunteer India, eco warrior, plantation drive, green movement",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      {
        property: "og:title",
        content: "Volunteer With Us – IAC Patrons Foundation",
      },
      {
        property: "og:description",
        content:
          "Be part of India's green movement. Plant trees, raise awareness, and make an impact.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/volunteer" },
      { property: "og:image", content: BASE_URL + "/og/volunteer.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Volunteer With Us – IAC Patrons Foundation",
      },
      {
        name: "twitter:description",
        content:
          "Join IAC Patrons Foundation as a volunteer. Make a difference in your community.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/volunteer.jpg" },
    ];
  },
  donate: () => {
    return [
      { title: "Donate – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "Support reforestation and eco-education in India. Donate to plant trees and empower green communities.",
      },
      {
        name: "keywords",
        content:
          "donate trees India, support reforestation, sponsor plantation, IAC donation",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      { property: "og:title", content: "Donate – IAC Patrons Foundation" },
      {
        property: "og:description",
        content:
          "Plant trees and support environmental education by donating to IAC Patrons Foundation.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/donate" },
      { property: "og:image", content: BASE_URL + "/og/donate.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Donate – IAC Patrons Foundation" },
      {
        name: "twitter:description",
        content:
          "Your donation plants hope. Join our mission to green India, one tree at a time.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/donate.jpg" },
    ];
  },
  contact: () => {
    return [
      { title: "Contact Us – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "Get in touch with IAC Patrons Foundation for partnerships, volunteer queries, or environmental collaboration.",
      },
      {
        name: "keywords",
        content:
          "contact IAC, environmental help India, NGO support, green India, climate partnership",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      { property: "og:title", content: "Contact Us – IAC Patrons Foundation" },
      {
        property: "og:description",
        content:
          "Reach out to IAC Patrons Foundation and be part of India’s green future.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/contact" },
      { property: "og:image", content: BASE_URL + "/og/contact.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Contact Us – IAC Patrons Foundation" },
      {
        name: "twitter:description",
        content:
          "Have questions or want to contribute? Contact our team today.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/contact.jpg" },
    ];
  },
  campaigns: () => {
    return [
      { title: "Campaigns – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "Explore our latest green campaigns and environmental initiatives aimed at planting trees and spreading awareness.",
      },
      {
        name: "keywords",
        content:
          "IAC campaigns, tree campaigns India, green projects, eco initiatives, awareness drives",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      { property: "og:title", content: "Campaigns – IAC Patrons Foundation" },
      {
        property: "og:description",
        content:
          "Take part in impactful campaigns to make India greener and more sustainable.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/campaigns" },
      { property: "og:image", content: BASE_URL + "/og/campaigns.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Campaigns – IAC Patrons Foundation" },
      {
        name: "twitter:description",
        content:
          "Support our latest environmental campaigns. Together, we create impact.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/campaigns.jpg" },
    ];
  },
  impactReport: () => {
    return [
      { title: "Impact Report – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "See how your support has made a difference. Explore our impact reports showcasing reforestation and awareness milestones.",
      },
      {
        name: "keywords",
        content:
          "impact report IAC, NGO achievements, tree planting data, volunteer metrics, eco impact",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      {
        property: "og:title",
        content: "Impact Report – IAC Patrons Foundation",
      },
      {
        property: "og:description",
        content:
          "Get insights into our environmental progress and community-driven success stories.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/impact-report" },
      { property: "og:image", content: BASE_URL + "/og/impact-report.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Impact Report – IAC Patrons Foundation",
      },
      {
        name: "twitter:description",
        content:
          "Track the real-world impact of our plantation drives and educational programs.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/impact-report.jpg" },
    ];
  },
  blogs: () => {
    return [
      { title: "Insights & Stories – IAC Patrons Foundation Blog" },
      {
        name: "description",
        content:
          "Read expert articles, inspiring stories, and updates on our environmental work from across India.",
      },
      {
        name: "keywords",
        content:
          "environment blog, green stories, climate updates, IAC blog, sustainability news",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      {
        property: "og:title",
        content: "Insights & Stories – IAC Patrons Foundation Blog",
      },
      {
        property: "og:description",
        content:
          "Stay informed with the latest updates and real stories from the ground.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/blogs" },
      { property: "og:image", content: BASE_URL + "/og/blogs.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Insights & Stories – IAC Patrons Foundation Blog",
      },
      {
        name: "twitter:description",
        content:
          "Articles and updates from IAC Patrons Foundation — shaping a greener future.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/blogs.jpg" },
    ];
  },
  resources: () => {
    return [
      { title: "Resources – IAC Patrons Foundation" },
      {
        name: "description",
        content:
          "Access guides, toolkits, reports, and media to support your environmental journey with IAC Patrons Foundation.",
      },
      {
        name: "keywords",
        content:
          "green toolkits, eco guides, download environmental resources, IAC materials",
      },
      { name: "author", content: "IAC Patrons Foundation" },
      { property: "og:title", content: "Resources – IAC Patrons Foundation" },
      {
        property: "og:description",
        content:
          "Download and explore educational resources to promote sustainability in your community.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: BASE_URL + "/resources" },
      { property: "og:image", content: BASE_URL + "/og/resources.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Resources – IAC Patrons Foundation" },
      {
        name: "twitter:description",
        content:
          "Educational and practical downloads for eco-conscious citizens and partners.",
      },
      { name: "twitter:image", content: BASE_URL + "/og/resources.jpg" },
    ];
  },
};
