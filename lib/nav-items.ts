export const navItems = [
  { name: "Portfolio", href: "/portfolio" },
  {
    name: "Company",
    children: [
      {
        name: "About Us",
        href: "/about",
        description: "Learn about our mission, vision, and the team driving innovation.",
      },
      {
        name: "Careers",
        href: "/careers",
        description: "Explore open positions and join our team of digital experts.",
      },
      {
        name: "Blog",
        href: "/blog",
        description: "Read our latest insights on digital marketing and AI.",
      },
    ],
  },
  {
    name: "Services",
    children: [
      {
        name: "Our Solutions",
        href: "/#solutions",
        description: "Explore our core service offerings and AI-powered solutions.",
      },
      {
        name: "View Packages",
        href: "/#packages",
        description: "Find the right plan and creative package for your business needs.",
      },
      {
        name: "How We Work",
        href: "/#how-we-work",
        description: "Discover our collaborative process for delivering exceptional results.",
      },
    ],
  },
];
