import {
  Palette,
  Laptop,
  BarChart3,
  MessageSquare,
  Layout,
  FilmIcon,
  PenTool,
  Wand2,
  Image,
  Brush,
} from "lucide-react";

export interface IPortfolioProject {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  services: string[];
  client: string;
  content: React.ReactNode;
  results: {
    label: string;
    value: number;
    suffix: string;
  }[];
  metaTitle: string;
  metaDescription: string;
}

export const portfolioProjects: IPortfolioProject[] = [
  {
    id: 1,
    title: "Futuristic Branding for a Tech Startup",
    slug: "tech-startup-branding",
    description:
      "A full-scale brand transformation for a SaaS startup, with a bold, future-forward identity designed using AI-assisted concepting.",
    image:
      "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1600",
    services: ["Branding", "AI-Concepting", "UI/UX"],
    client: "Innovatech Solutions",
    content: (
      <>
        <p>
          Innovatech Solutions, an emerging SaaS innovator, approached us to
          redefine their brand. Their identity felt outdated and failed to
          capture the cutting-edge essence of their technology. They needed a
          brand that truly communicated innovation and progress.
        </p>
        <p>
          Our process began with audience research and a deep dive into their
          product ecosystem. Leveraging AI-powered design tools, we generated
          hundreds of logo explorations, color palettes, and type systems. This
          approach allowed rapid iteration and concept refinement while
          maintaining creative originality.
        </p>
        <p>
          The final identity, named <strong>“Quantum Leap”</strong>, is a
          minimalist logo with a vibrant gradient palette. It conveys motion,
          innovation, and futuristic thinking. We built a complete brand system,
          including UI/UX redesigns, typography standards, and a digital style
          guide.
        </p>
      </>
    ),
    results: [
      { label: "Time-to-market reduction", value: 50, suffix: "%" },
      { label: "Increase in user engagement", value: 40, suffix: "%" },
    ],
    metaTitle: "Case Study: Futuristic Branding for Innovatech Solutions",
    metaDescription:
      "How we rebranded Innovatech Solutions with a future-focused identity powered by AI, driving 40% higher user engagement.",
  },
  {
    id: 2,
    title: "AI-Powered Ad Campaign for an E-commerce Brand",
    slug: "ai-ad-campaign-ecommerce",
    description:
      "Designed an AI-driven ad campaign producing 100+ creatives, A/B tested for maximum performance, achieving a 300% increase in CTR.",
    image:
      "https://images.pexels.com/photos/6169659/pexels-photo-6169659.jpeg?auto=compress&cs=tinysrgb&w=1600",
    services: ["Advertising", "Content Creation", "AI-Generation"],
    client: "Luxe Apparel",
    content: (
      <>
        <p>
          Luxe Apparel, a rapidly scaling fashion brand, needed to supercharge
          their ad campaigns. The challenge: producing fresh, high-quality
          creative assets quickly enough to keep up with paid social campaigns.
        </p>
        <p>
          Our team introduced an AI-powered ad pipeline. By generating hundreds
          of creatives with AI, tailored to different demographics and platforms
          (Meta, TikTok, Google), we provided a scalable library of visuals.
          After running systematic A/B tests, we identified the top-performing
          designs for maximum ROI.
        </p>
        <p>
          This not only cut creative turnaround by 75% but also significantly
          boosted conversions and lowered acquisition costs.
        </p>
      </>
    ),
    results: [
      { label: "Increase in CTR", value: 300, suffix: "%" },
      { label: "Decrease in CPA", value: 50, suffix: "%" },
      { label: "Creative production time reduction", value: 75, suffix: "%" },
    ],
    metaTitle: "Case Study: AI-Powered Ad Campaign for Luxe Apparel",
    metaDescription:
      "See how Luxe Apparel scaled campaigns with AI-generated creatives, boosting CTR by 300% while lowering CPA.",
  },
  {
    id: 3,
    title: "Immersive 3D Website for a Real Estate Developer",
    slug: "3d-website-real-estate",
    description:
      "A cutting-edge property website with interactive 3D tours and virtual walkthroughs, enhancing engagement and buyer trust.",
    image:
      "https://images.pexels.com/photos/1546168/pexels-photo-1546168.jpeg?auto=compress&cs=tinysrgb&w=1600",
    services: ["Web Development", "3D Modeling", "UI/UX"],
    client: "Prestige Properties",
    content: (
      <>
        <p>
          Prestige Properties wanted to attract international buyers for their
          luxury developments. Static photos and videos no longer delivered the
          immersive experience buyers expected.
        </p>
        <p>
          We built a high-performance website featuring 3D property models and
          virtual walkthroughs. Visitors could tour apartments, explore floor
          plans, and even customize finishes in real-time. This created an
          interactive, engaging, and premium digital experience.
        </p>
        <p>
          Optimized with a modern framework, the site delivered seamless
          performance across mobile, desktop, and VR-ready devices.
        </p>
      </>
    ),
    results: [
      { label: "Increase in online inquiries", value: 200, suffix: "%" },
      { label: "Increase in time on page", value: 5, suffix: "min" },
    ],
    metaTitle: "Case Study: Immersive 3D Website for Prestige Properties",
    metaDescription:
      "Discover how we built a property website with 3D virtual tours, driving 200% more inquiries for Prestige Properties.",
  },
  {
    id: 4,
    title: "Viral Social Media Campaign for a Cafe",
    slug: "viral-campaign-cafe",
    description:
      "Executed a viral content campaign on Instagram and TikTok, doubling followers and boosting in-store traffic.",
    image:
      "https://images.pexels.com/photos/2129796/pexels-photo-2129796.jpeg?auto=compress&cs=tinysrgb&w=1600",
    services: ["Social Media", "Video Production", "Content Strategy"],
    client: "The Daily Grind Cafe",
    content: (
      <>
        <p>
          The Daily Grind Cafe needed to stand out in a competitive local
          market. Their social presence lacked personality and reach, limiting
          foot traffic despite their excellent coffee.
        </p>
        <p>
          We developed a short-form content strategy using Instagram Reels and
          TikTok. Our videos combined humor, trend-driven content, and aesthetic
          storytelling. We also partnered with food bloggers and micro
          influencers to maximize visibility.
        </p>
        <p>
          One viral piece, the{" "}
          <strong>“10-Second Latte Art Challenge”</strong>, earned over 1M
          views, propelling the cafe into local social media fame.
        </p>
      </>
    ),
    results: [
      { label: "Follower growth in 3 months", value: 140, suffix: "%" },
      { label: "Increase in weekend foot traffic", value: 25, suffix: "%" },
    ],
    metaTitle: "Case Study: Viral Social Media Campaign for The Daily Grind Cafe",
    metaDescription:
      "How The Daily Grind Cafe doubled its followers in 3 months with a viral short-form video campaign.",
  },
  {
    id: 5,
    title: "AI-Enhanced Product Photography for a Fashion Brand",
    slug: "ai-photography-fashion",
    description:
      "Delivered consistent, high-end product visuals using AI retouching and automated enhancements for e-commerce success.",
    image:
      "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1600",
    services: ["Photography", "AI-Retouching", "E-commerce"],
    client: "Urban Threads",
    content: (
      <>
        <p>
          Urban Threads’ e-commerce site suffered from inconsistent product
          photography due to varied photographers and lighting. The result was a
          disjointed look that weakened customer trust.
        </p>
        <p>
          We conducted a dedicated photoshoot and applied AI-enhanced editing
          workflows. Tasks like background removal, color correction, and angle
          generation were automated, ensuring a clean and uniform visual
          library.
        </p>
        <p>
          The improved catalog significantly boosted user trust and conversion
          rates while reducing overall photography costs.
        </p>
      </>
    ),
    results: [
      { label: "Increase in conversion rate", value: 15, suffix: "%" },
      { label: "Reduction in photography costs", value: 40, suffix: "%" },
    ],
    metaTitle: "Case Study: AI-Enhanced Product Photography for Urban Threads",
    metaDescription:
      "How Urban Threads used AI-enhanced photography to boost conversions and cut photography costs by 40%.",
  },
  {
    id: 6,
    title: "Engaging Explainer Video for a Healthcare App",
    slug: "explainer-video-healthcare",
    description:
      "Produced a 90-second animated explainer video simplifying complex healthcare features into an accessible story.",
    image:
      "https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1600",
    services: ["Video Production", "Animation", "Storytelling"],
    client: "Well-being Plus",
    content: (
      <>
        <p>
          Well-being Plus had a powerful healthcare app but struggled to
          communicate its complex features quickly and clearly. They needed an
          engaging way to showcase value to new users.
        </p>
        <p>
          We scripted and produced a{" "}
          <strong>90-second animated explainer video</strong> that followed a
          relatable user scenario. It demonstrated how the app simplifies health
          management, connects users with doctors, and provides personalized
          advice.
        </p>
        <p>
          The animation style was designed to feel warm, clear, and approachable
          — making healthcare technology less intimidating.
        </p>
      </>
    ),
    results: [
      { label: "Increase in app downloads", value: 25, suffix: "%" },
      { label: "Views on YouTube", value: 100000, suffix: "+" },
    ],
    metaTitle: "Case Study: Explainer Video for Well-being Plus",
    metaDescription:
      "See how an animated explainer video boosted app downloads by 25% and reached 100K+ views on YouTube.",
  },
];

export const getProjectBySlug = (slug: string) => {
  return portfolioProjects.find((project) => project.slug === slug);
};

export const getAllServices = () => {
  const allServices = portfolioProjects.flatMap((project) => project.services);
  return ["All", ...new Set(allServices)];
};
