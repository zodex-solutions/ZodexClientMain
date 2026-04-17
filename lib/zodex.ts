export type HeroContent = {
  availability_badge: string;
  title_prefix: string;
  title_highlight: string;
  rotating_words: string[];
  subheading: string;
  tech_tags: string[];
  bottom_text: string;
  primary_cta_text: string;
};

export type ContactInfo = {
  email: string;
  phone_numbers: string[];
  location: string;
  heading: string;
  subheading: string;
  form_title: string;
};

export type SectionContent = {
  section_key: string;
  kicker: string;
  title: string;
  highlight: string;
  description: string;
};

export type ServiceItem = {
  id: string;
  sort_order: number;
  number: string;
  title: string;
  description: string;
  icon_name: string;
  is_active: boolean;
};

export type StatItem = {
  id: string;
  sort_order: number;
  value: number;
  suffix: string;
  label: string;
  sub_label: string;
};

export type ProductItem = {
  id: string;
  sort_order: number;
  code: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  tags: string[];
  gradient_class: string;
  accent_class: string;
};

export type ProcessStepItem = {
  id: string;
  sort_order: number;
  phase: string;
  title: string;
  description: string;
  details: string[];
  icon_name: string;
};

export type PortfolioCaseItem = {
  id: string;
  sort_order: number;
  code: string;
  title: string;
  category: string;
  image_path: string;
};

export type TestimonialItem = {
  id: string;
  sort_order: number;
  name: string;
  role: string;
  rating: number;
  quote: string;
};

export type ReasonItem = {
  id: string;
  sort_order: number;
  title: string;
  description: string;
  icon_name: string;
};

export type SocialLinkItem = {
  id: string;
  sort_order: number;
  label: string;
  href: string;
  icon_name: string;
};

export type HomePageData = {
  hero: HeroContent;
  contact: ContactInfo;
  sections: SectionContent[];
  services: ServiceItem[];
  stats: StatItem[];
  products: ProductItem[];
  process_steps: ProcessStepItem[];
  portfolio_cases: PortfolioCaseItem[];
  testimonials: TestimonialItem[];
  reasons: ReasonItem[];
  social_links: SocialLinkItem[];
};

export const fallbackHomePageData: HomePageData = {
  hero: {
    availability_badge: "Available for Projects 2026",
    title_prefix: "We Craft Modern Digital",
    title_highlight: "Solutions",
    rotating_words: ["Experiences", "Products", "Platforms", "Solutions"],
    subheading:
      "India-based digital studio specializing in AI-powered SaaS, immersive web experiences & scalable cloud architecture.",
    tech_tags: ["AI / ML", "Next.js", "React Native", "Web3", "Cloud", "UI/UX"],
    bottom_text:
      "Transforming bold visions into pixel-perfect, production-grade digital products since 2019.",
    primary_cta_text: "Explore Our Work",
  },
  contact: {
    email: "info.zodex@gmail.com",
    phone_numbers: ["+91 951 156 4276", "+91 950 996 1818"],
    location: "Jaipur, Rajasthan, India",
    heading: "Let's Connect.",
    subheading:
      "Have a bold idea? We have the engineering talent and design expertise to bring it to life. Let's start a conversation.",
    form_title: "Start a Project",
  },
  sections: [
    { section_key: "services", kicker: "// What We Do", title: "Services &", highlight: "Expertise.", description: "We fuse technical depth with refined design thinking to ship products that scale, delight, and endure." },
    { section_key: "products", kicker: "// Innovation Hub", title: "Featured", highlight: "Products.", description: "Products we've designed, built & shipped — solving real problems with elegant engineering." },
    { section_key: "process", kicker: "// How We Work", title: "Our", highlight: "Process.", description: "A clean, collaborative workflow from strategy to launch." },
    { section_key: "portfolio", kicker: "// Portfolio", title: "Selected", highlight: "Works.", description: "A curated collection of digital products we've crafted to solve complex problems with elegant engineering." },
    { section_key: "testimonials", kicker: "// Testimonials", title: "What Clients", highlight: "Say.", description: "Social proof from startup founders, product teams, and operators." },
    { section_key: "why_zodex", kicker: "// Why Zodex", title: "Built Different,", highlight: "By Design.", description: "We're not another dev agency. We're a precision-engineered digital studio that treats every project like a product launch." },
    { section_key: "contact", kicker: "// Get In Touch", title: "Let's", highlight: "Connect.", description: "Have a bold idea? We have the engineering talent and design expertise to bring it to life. Let's start a conversation." },
  ],
  services: [
    { id: "1", sort_order: 1, number: "01", title: "AI Solutions", description: "Neural networks, LLM integration, computer vision & intelligent automation pipelines that transform raw data into business decisions.", icon_name: "brain", is_active: true },
    { id: "2", sort_order: 2, number: "02", title: "Web3 / DApps", description: "Decentralized applications, smart contracts on Solidity, NFT marketplaces & blockchain-integrated platforms with secure wallet flows.", icon_name: "globe", is_active: true },
    { id: "3", sort_order: 3, number: "03", title: "UI/UX Design", description: "Research-driven interfaces with motion design, micro-interactions & design systems that make products feel alive and intuitive.", icon_name: "palette", is_active: true },
    { id: "4", sort_order: 4, number: "04", title: "SaaS Development", description: "Multi-tenant cloud architecture, subscription billing, analytics dashboards & scalable APIs built with Next.js, FastAPI & MongoDB.", icon_name: "cloud", is_active: true },
    { id: "5", sort_order: 5, number: "05", title: "3D & Motion", description: "Immersive Three.js experiences, WebGL visualizations, GSAP animations & interactive storytelling that captivates users.", icon_name: "clapperboard", is_active: true },
    { id: "6", sort_order: 6, number: "06", title: "Digital Marketing", description: "SEO optimization, conversion funnels, brand identity systems & growth strategies backed by analytics and A/B testing.", icon_name: "trending-up", is_active: true },
  ],
  stats: [
    { id: "1", sort_order: 1, value: 50, suffix: "+", label: "Projects Delivered", sub_label: "Across 12+ industries" },
    { id: "2", sort_order: 2, value: 35, suffix: "+", label: "Happy Clients", sub_label: "Globally trusted" },
    { id: "3", sort_order: 3, value: 6, suffix: "+", label: "Years Experience", sub_label: "Since 2019" },
    { id: "4", sort_order: 4, value: 99, suffix: "%", label: "Client Retention", sub_label: "Long-term partnerships" },
  ],
  products: [
    { id: "1", sort_order: 1, code: "01", badge: "SaaS Product", title: "EduManage Pro", subtitle: "AI-Powered School Management", description: "A comprehensive ecosystem that automates administration, tracks student analytics in real-time, manages fee collection, generates transfer certificates & streamlines campus-wide communication — all from one intelligent dashboard.", tags: ["FastAPI", "MongoDB", "Next.js", "AI/ML"], gradient_class: "from-orange-500/20 to-amber-500/10", accent_class: "bg-orange-500" },
    { id: "2", sort_order: 2, code: "02", badge: "Social Platform", title: "Masked", subtitle: "Anonymous Social Network", description: "Experience true digital invisibility. A decentralized social ecosystem built on Web3 where identities remain anonymous and untraceable — featuring encrypted messaging, anonymous forums & zero-knowledge authentication.", tags: ["Solidity", "React Native", "Node.js", "Web3"], gradient_class: "from-violet-500/20 to-indigo-500/10", accent_class: "bg-violet-500" },
  ],
  process_steps: [
    { id: "1", sort_order: 1, phase: "Phase 01", title: "Discovery", description: "We deep-dive into your business goals, target audience, competitive landscape & technical requirements to define a crystal-clear project roadmap.", details: ["Stakeholder Interviews", "Market Research", "Technical Audit", "Project Scope"], icon_name: "search" },
    { id: "2", sort_order: 2, phase: "Phase 02", title: "Design", description: "From wireframes to high-fidelity prototypes — we craft pixel-perfect interfaces with meticulous attention to user experience and brand identity.", details: ["Wireframing", "UI Design", "Prototyping", "Design System"], icon_name: "pen-tool" },
    { id: "3", sort_order: 3, phase: "Phase 03", title: "Develop", description: "Clean, scalable code using modern frameworks. We build with performance, security & maintainability as non-negotiable pillars.", details: ["Frontend Build", "Backend APIs", "Database Design", "Testing & QA"], icon_name: "code" },
    { id: "4", sort_order: 4, phase: "Phase 04", title: "Deploy & Scale", description: "We launch with CI/CD pipelines, monitoring & auto-scaling infrastructure — then iterate based on real user analytics and feedback.", details: ["Cloud Deployment", "Performance Tuning", "Analytics Setup", "Ongoing Support"], icon_name: "rocket" },
  ],
  portfolio_cases: [
    { id: "1", sort_order: 1, code: "01", title: "Artify — Neural Art Platform", category: "Next.js / Python", image_path: "/artify.png" },
    { id: "2", sort_order: 2, code: "02", title: "BiteFlow — Smart Food Delivery", category: "Next.js / Tailwind", image_path: "/food.png" },
    { id: "3", sort_order: 3, code: "03", title: "LuxeLoft — Furniture Atelier", category: "Three.js / React", image_path: "/furniture.png" },
    { id: "4", sort_order: 4, code: "04", title: "Fis — Luxury Hotel Experience", category: "Next.js / Sanity CMS", image_path: "/hotel.png" },
    { id: "5", sort_order: 5, code: "05", title: "DNS — Real Estate Platform", category: "MERN Stack", image_path: "/dns.png" },
    { id: "6", sort_order: 6, code: "06", title: "We Care — Healthcare Services", category: "FastAPI / Web3", image_path: "/hms.png" },
  ],
  testimonials: [
    { id: "1", sort_order: 1, name: "Amit Sharma", role: "CEO, Artify AI", rating: 5, quote: "Zodex transformed our neural art platform idea into reality. The integration between Next.js and Python is seamless, and the performance is exceptional." },
    { id: "2", sort_order: 2, name: "Neha Verma", role: "Product Head, BiteFlow", rating: 5, quote: "The delivery app they built is incredibly smooth. Their attention to detail in the UI and the speed of the frontend exceeded our expectations completely." },
    { id: "3", sort_order: 3, name: "Rahul Mehta", role: "Founder, LuxeLoft Furniture", rating: 5, quote: "Building a 3D furniture atelier with Three.js was a challenge, but Zodex handled the complex WebGL renderings perfectly. Truly skilled team." },
    { id: "4", sort_order: 4, name: "Sarah Jones", role: "Director, Fis Hospitality", rating: 5, quote: "The Sanity CMS integration makes managing our luxury hotel content effortless. The glassmorphism UI perfectly matches our brand identity." },
    { id: "5", sort_order: 5, name: "Vikram Goel", role: "CTO, DNS Real Estate", rating: 5, quote: "Our MERN stack platform handles thousands of property listings without lag. Zodex built a robust, scalable system that just works." },
    { id: "6", sort_order: 6, name: "Dr. Ananya Iyer", role: "Operations Head, We Care", rating: 5, quote: "The healthcare dashboard developed using FastAPI is both secure and lightning fast. Their understanding of data privacy is impressive." },
  ],
  reasons: [
    { id: "1", sort_order: 1, title: "Lightning Fast Delivery", description: "We ship MVPs in weeks, not months. Our agile workflow and pre-built component libraries mean you get to market faster than your competition.", icon_name: "zap" },
    { id: "2", sort_order: 2, title: "Enterprise-Grade Security", description: "From OWASP compliance to zero-trust architecture — every line of code is written with security as a first-class citizen, not an afterthought.", icon_name: "shield" },
    { id: "3", sort_order: 3, title: "Dedicated Partnership", description: "We don't just build and disappear. You get a dedicated team lead, weekly syncs, transparent Jira boards & 24/7 priority Slack support.", icon_name: "heart-handshake" },
    { id: "4", sort_order: 4, title: "Future-Proof Stack", description: "We exclusively use modern, battle-tested technologies — Next.js, FastAPI, MongoDB, AWS — ensuring your product stays relevant for years.", icon_name: "refresh-ccw" },
  ],
  social_links: [
    { id: "1", sort_order: 1, label: "LinkedIn", href: "https://linkedin.com/in/yourprofile", icon_name: "linkedin" },
    { id: "2", sort_order: 2, label: "GitHub", href: "https://github.com/zodex-solutions", icon_name: "github" },
    { id: "3", sort_order: 3, label: "WhatsApp", href: "https://wa.me/919509961818", icon_name: "message-circle" },
    { id: "4", sort_order: 4, label: "Instagram", href: "#", icon_name: "instagram" },
  ],
};

export const getSectionContent = (
  sections: SectionContent[],
  key: string,
): SectionContent | undefined => sections.find((section) => section.section_key === key);

const defaultApiBaseUrl = "https://zodex.in/api/v1";

export const getApiBaseUrl = () =>
  (process.env.NEXT_PUBLIC_ZODEX_API_URL || defaultApiBaseUrl).replace(/\/$/, "");

export async function fetchHomePageData(): Promise<HomePageData> {
  try {
    const response = await fetch(`${getApiBaseUrl()}/home`, {
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch homepage data: ${response.status}`);
    }

    return (await response.json()) as HomePageData;
  } catch {
    return fallbackHomePageData;
  }
}
