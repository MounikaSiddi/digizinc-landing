import { Palette, Laptop, BarChart3, MessageSquare, Layout, FilmIcon, PenTool, Wand2, Image, Brush } from 'lucide-react';

export interface IService {
  id: string;
  title: string;
  slug: string;
  description: string;
  benefits: string[];
  content: React.ReactNode;
  icon: React.ReactNode;
  items: string[];
  category: string;
  metaTitle: string;
  metaDescription: string;
}

export const servicesData: IService[] = [
  {
    id: 'branding',
    title: 'Branding & Identity',
    slug: 'branding-identity',
    description: 'Create a distinctive and memorable brand identity that resonates with your target audience and stands the test of time. We blend creative strategy with AI-powered insights to build brands that are not just beautiful, but also intelligent.',
    benefits: [
      'Establish a strong, consistent brand presence across all channels.',
      'Differentiate your business from the competition.',
      'Build trust and loyalty with your target audience.',
      'Increase brand recognition and recall.',
    ],
    content: (
      <>
        <p>In a crowded marketplace, a strong brand is more than just a logo; it\'s a promise. It\'s the feeling people get when they interact with your company. Our branding process is designed to uncover the essence of your business and translate it into a powerful and authentic brand identity.</p>
        <p>We use AI to analyze market trends, competitor branding, and customer sentiment. This data-driven approach allows us to make more informed creative decisions and develop brand strategies that are positioned for success. From there, our team of designers and storytellers craft a unique visual and verbal identity that brings your brand to life.</p>
      </>
    ),
    icon: <Palette className="h-6 w-6" />,
    items: [
      "Logo Design",
      "Brand Strategy & Positioning",
      "Visual Identity Development",
      "Brand Guidelines",
      "Corporate Rebranding",
      "Naming & Tagline Creation"
    ],
    category: "branding",
    metaTitle: 'Branding & Identity Services | Digizinc',
    metaDescription: 'Elevate your brand with Digizinc\'s AI-powered branding and identity services. Create a distinctive and memorable presence.',
  },
  {
    id: 'website',
    title: 'Website Design & Development',
    slug: 'website-design-development',
    description: 'Build high-performance, futuristic websites with our AI-assisted development process.',
    benefits: [
      'Engage users with a seamless and intuitive user experience.',
      'Rank higher in search results with an SEO-optimized foundation.',
      'Convert visitors into customers with a conversion-focused design.',
      'Manage your content easily with a user-friendly CMS.',
    ],
    content: (
      <>
        <p>Your website is your digital storefront. It\'s often the first impression a potential customer has of your brand. We build websites that are not just beautiful, but also functional, user-friendly, and optimized for performance.</p>
        <p>Our development process incorporates AI at every stage, from initial wireframing and user flow analysis to automated testing and performance optimization. This allows us to build websites that are not only visually stunning, but also incredibly fast, reliable, and easy to use.</p>
      </>
    ),
    icon: <Laptop className="h-6 w-6" />,
    items: ["Custom Website Design", "UI/UX Design & Prototyping", "Frontend & Backend Development", "E-commerce Development", "CMS Development (WordPress, Webflow, Shopify)", "Website Maintenance & Support"],
    category: "digital-experience",
    metaTitle: 'Website Design & Development Services | Digizinc',
    metaDescription: 'Build high-performance, AI-assisted websites with Digizinc. Specializing in futuristic web design, UI/UX, and e-commerce solutions.',
  },
  {
    id: 'advertising',
    title: 'Advertising & Marketing',
    slug: 'advertising-marketing',
    description: 'Enhance your marketing campaigns with AI-driven creative solutions.',
    benefits: [
        'Increase your ROI with highly targeted and effective ad campaigns.',
        'Reach a wider audience with cross-channel marketing strategies.',
        'Gain valuable insights into your target audience and market.',
        'Continuously optimize your campaigns for better performance.',
    ],
    content: (
        <>
            <p>In today\'s digital landscape, a great product isn\'t enough. You need to reach the right people, with the right message, at the right time. Our advertising and marketing services are designed to do just that.</p>
            <p>We use AI to analyze market data, identify your target audience, and develop data-driven marketing strategies. We then create and launch highly targeted ad campaigns across multiple channels, including search, social, and display. Our team continuously monitors campaign performance and uses AI-powered tools to optimize for the best possible results.</p>
        </>
    ),
    icon: <BarChart3 className="h-6 w-6" />,
    items: ["Ad Campaign Design (Print, Digital, OOH)", "Social Media Creative Assets", "Banner & Display Ads", "Email Marketing Design", "Brochure & Flyer Design", "Presentation & Pitch Deck Design"],
    category: "marketing",
    metaTitle: 'AI-Driven Advertising & Marketing Services | Digizinc',
    metaDescription: 'Boost your ROI with Digizinc\'s AI-driven advertising and marketing solutions. Targeted campaigns across all digital channels.',
  },
  {
    id: 'content',
    title: 'Content Creation & Storytelling',
    slug: 'content-creation-storytelling',
    description: 'Create compelling narratives with our AI content generation tools.',
    benefits: [
        'Engage your audience with high-quality, relevant content.',
        'Establish your brand as a thought leader in your industry.',
        'Drive organic traffic to your website with SEO-optimized content.',
        'Save time and resources with our efficient content creation process.',
    ],
    content: (
        <>
            <p>Content is the currency of the modern web. It\'s how you build relationships with your audience, establish your brand as a thought leader, and drive organic traffic to your website. But creating high-quality content consistently is a challenge.</p>
            <p>We use a combination of human creativity and AI-powered tools to create compelling content at scale. Our team of writers and editors works with you to develop a content strategy that aligns with your brand and business goals. We then use AI to assist with research, writing, and optimization, allowing us to produce high-quality content faster and more efficiently.</p>
        </>
    ),
    icon: <MessageSquare className="h-6 w-6" />,
    items: ["Copywriting & Content Strategy", "Scriptwriting (Ads, Explainers, Social)", "Blog & Article Writing", "Social Media Captions & Content", "Product Descriptions & Sales Copy"],
    category: "marketing",
    metaTitle: 'AI Content Creation & Storytelling Services | Digizinc',
    metaDescription: 'Generate compelling narratives with Digizinc\'s AI-powered content creation and storytelling services. High-quality content at scale.',
  },
  {
    id: 'ux',
    title: 'UI/UX & Digital Experience',
    slug: 'ui-ux-digital-experience',
    description: 'Create seamless digital experiences with AI-enhanced design.',
    benefits: [
        'Increase user satisfaction and engagement.',
        'Reduce bounce rates and increase time on site.',
        'Improve conversion rates and drive business results.',
        'Gain a competitive advantage with a superior user experience.',
    ],
    content: (
        <>
            <p>User experience (UX) is about more than just how your website looks; it\'s about how it feels to use. A great UX can be the difference between a customer who converts and one who bounces. Our UI/UX design services are focused on creating digital experiences that are not just beautiful, but also intuitive, engaging, and effective.</p>
            <p>We use AI to analyze user behavior, identify pain points, and test different design solutions. This data-driven approach allows us to create user experiences that are not only aesthetically pleasing, but also highly optimized for conversion. From wireframing and prototyping to user testing and final design, we work with you every step of a way to create a digital experience that your users will love.</p>
        </>
    ),
    icon: <Layout className="h-6 w-6" />,
    items: ["Website Design & Development", "App Interface Design", "Dashboard & SaaS UI Design", "Wireframing & Prototyping", "User Experience (UX) Audits"],
    category: "digital-experience",
    metaTitle: 'AI-Enhanced UI/UX & Digital Experience Design | Digizinc',
    metaDescription: 'Design seamless digital experiences with Digizinc\'s AI-enhanced UI/UX services. Intuitive, engaging, and effective digital platforms.',
  },
  {
    id: 'motion',
    title: 'Motion & Video Production',
    slug: 'motion-video-production',
    description: 'Bring your brand to life with AI-powered motion graphics and video.',
    benefits: [
        'Capture your audience\'s attention with stunning visuals.',
        'Explain complex ideas in a simple and engaging way.',
        'Increase engagement and conversions with video content.',
        'Create a lasting impression with a high-quality brand video.',
    ],
    content: (
        <>
            <p>Video is the most engaging form of content on the web. It\'s a powerful tool for telling stories, explaining complex ideas, and connecting with your audience on an emotional level. Our motion and video production services are designed to help you harness the power of video to achieve your business goals.</p>
            <p>We use AI to assist with every stage of the video production process, from storyboarding and animation to editing and post-production. This allows us to create high-quality video content faster and more efficiently than ever before. Whether you need an animated explainer video, a cinematic brand story, or engaging social media content, we can help you bring your vision to life.</p>
        </>
    ),
    icon: <FilmIcon className="h-6 w-6" />,
    items: ["Animation (2D, 3D, Motion Graphics)", "Video Editing & Post-Production", "Explainer Videos", "Brand Story Videos", "Social Media Reels & Shorts", "Cinematic Ad Production"],
    category: "visual-content",
    metaTitle: 'AI-Powered Motion & Video Production | Digizinc',
    metaDescription: 'Bring your brand to life with Digizinc\'s AI-powered motion graphics and video production services. Stunning visuals and engaging storytelling.',
  },
  {
    id: 'illustration',
    title: 'Illustration & Custom Artwork',
    slug: 'illustration-custom-artwork',
    description: 'Create unique visuals with our AI-assisted illustration services.',
    benefits: [
        'Stand out from the competition with a unique visual style.',
        'Communicate complex ideas in a simple and engaging way.',
        'Create a lasting impression with custom artwork.',
        'Save time and resources with our efficient illustration process.',
    ],
    content: (
        <>
            <p>In a world of stock photos and generic templates, custom illustration is a powerful way to stand out. It\'s a way to create a unique visual style that is all your own. Our illustration and custom artwork services are designed to help you create visuals that are not just beautiful, but also meaningful and effective.</p>
            <p>We use a combination of human creativity and AI-powered tools to create custom illustrations at scale. Our team of illustrators works with you to develop a unique visual style that aligns with your brand and business goals. We then use AI to assist with the illustration process, allowing us to create high-quality custom artwork faster and more efficiently.</p>
        </>
    ),
    icon: <PenTool className="h-6 w-6" />,
    items: ["Digital & Hand-drawn Illustrations", "Character Design", "Vector Art & Iconography", "Custom GIFs & Stickers", "Storyboarding for Ads/Videos"],
    category: "visual-content",
    metaTitle: 'AI-Assisted Illustration & Custom Artwork | Digizinc',
    metaDescription: 'Create unique visuals with Digizinc\'s AI-assisted illustration services. Custom artwork that stands out and communicates effectively.',
  },
  {
    id: 'interactive',
    title: 'Experiential & Interactive Design',
    slug: 'experiential-interactive-design',
    description: 'Create immersive experiences with AI-powered interactive design.',
    benefits: [
        'Engage your audience in a new and exciting way.',
        'Create a lasting impression with a memorable brand experience.',
        'Gain valuable insights into your audience\'s behavior.',
        'Drive business results with interactive marketing campaigns.',
    ],
    content: (
        <>
            <p>In a world of passive consumption, interactive experiences are a powerful way to engage your audience. They\'re a way to create a memorable brand experience that will keep them coming back for more. Our experiential and interactive design services are designed to help you create immersive experiences that are not just fun, but also effective.</p>
            <p>We use AI to create interactive experiences that are personalized, responsive, and intelligent. From augmented reality (AR) and virtual reality (VR) experiences to interactive web applications and games, we can help you create an immersive brand experience that will set you apart from the competition.</p>
        </>
    ),
    icon: <Wand2 className="h-6 w-6" />,
    items: ["Augmented Reality (AR) & Virtual Reality (VR) Design", "3D Modeling & Rendering", "Interactive Web Experiences", "Event & Exhibition Design", "Projection Mapping"],
    category: "digital-experience",
    metaTitle: 'AI-Powered Experiential & Interactive Design | Digizinc',
    metaDescription: 'Create immersive experiences with Digizinc\'s AI-powered interactive design. Engaging AR/VR, 3D modeling, and web experiences.',
  },
  {
    id: 'photography',
    title: 'Photography & Visual Content',
    slug: 'photography-visual-content',
    description: 'Enhance your visual content with AI-powered photography solutions.',
    benefits: [
        'Create a consistent and professional look for your brand.',
        'Save time and resources with our efficient photography process.',
        'Get high-quality photos that are optimized for web and social media.',
        'Stand out from the competition with stunning visual content.',
    ],
    content: (
        <>
            <p>In a visual world, high-quality photography is essential. It\'s how you showcase your products, tell your brand story, and connect with your audience on an emotional level. Our photography and visual content services are designed to help you create stunning visuals that will make your brand shine.</p>
            <p>We use AI to assist with every stage of the photography process, from planning and shooting to editing and post-production. This allows us to create high-quality visual content faster and more efficiently than ever before. Whether you need product photography, lifestyle shots, or corporate headshots, we can help you create visuals that will make a lasting impression.</p>
        </>
    ),
    icon: <Image className="h-6 w-6" />,
    items: ["Product Photography", "Brand Lifestyle Shoots", "Corporate Headshots", "Editorial & Fashion Photography", "Retouching & Image Manipulation"],
    category: "visual-content",
    metaTitle: 'AI-Powered Photography & Visual Content | Digizinc',
    metaDescription: 'Enhance your visual content with Digizinc\'s AI-powered photography solutions. Professional, high-quality visuals for your brand.',
  },
  {
    id: 'print',
    title: 'Print & Packaging',
    slug: 'print-packaging',
    description: 'Create standout print materials with AI-optimized design.',
    benefits: [
        'Make a lasting impression with high-quality print materials.',
        'Stand out on the shelf with eye-catching packaging design.',
        'Create a consistent brand experience across all touchpoints.',
        'Save time and resources with our efficient design process.',
    ],
    content: (
        <>
            <p>In a digital world, print can be a powerful way to stand out. It\'s a way to create a tangible brand experience that people can touch and feel. Our print and packaging design services are designed to help you create standout print materials that will make a lasting impression.</p>
            <p>We use AI to optimize our print designs for quality and consistency. From business cards and brochures to product packaging and billboards, we can help you create print materials that are not just beautiful, but also effective.</p>
        </>
    ),
    icon: <Laptop className="h-6 w-6" />,
    items: ["Product Packaging Design", "Label & Sticker Design", "Billboard & Poster Design", "Book & Album Cover Design", "Trade Show Booth Design"],
    category: "branding",
    metaTitle: 'AI-Optimized Print & Packaging Design | Digizinc',
    metaDescription: 'Create standout print materials with Digizinc\'s AI-optimized design. High-quality print and packaging solutions.',
  }
];

export const industryOptions = [
  "Branding & Identity",
  "Graphic & Visual Design",
  "Advertising & Marketing",
  "Content Creation & Storytelling",
  "UI/UX & Digital Experience",
  "Motion & Video Production",
  "Illustration & Custom Artwork",
  "Experiential & Interactive Design",
  "Photography & Visual Content",
  "Print & Packaging",
  "Education",
  "E-Commerce",
  "Real Estate",
  "Healthcare",
  "Non-Profit",
  "IT & Product",
  "Entertainment",
  "Corporate",
  "Finance",
  "Other",
];

export const getServiceBySlug = (slug: string) => {
  return servicesData.find((service) => service.slug === slug);
};