import ColorBends from "@/components/ColorBends";
import Hero from "../components/home/Hero";
import { ProductsSection } from "../components/home/pro";
import TestimonialsSection from "../components/home/TestimonialsSection";
import ZCases from "../components/home/ZCases";
import { ZContact } from "../components/home/ZContact";
import StatsSection from "../components/home/StatsSection";
import ProcessSection from "../components/home/ProcessSection";
import TechMarquee from "../components/home/TechMarquee";
import WhyZodex from "../components/home/WhyZodex";
import { fetchHomePageData, getSectionContent } from "@/lib/zodex";
import ClickSpark from "@/components/ClickSpark";
import Services from "../components/home/Services";
// import { Services } from "../components/home/Services";

export default async function Home() {
  const homeData = await fetchHomePageData();

  return (
    <section>
        <Hero hero={homeData.hero} />
        <TechMarquee />
        <Services
          section={getSectionContent(homeData.sections, "services")}
          services={homeData.services}
        />
        {/* <StatsSection stats={homeData.stats} /> */}
        <ProductsSection
          section={getSectionContent(homeData.sections, "products")}
          products={homeData.products}
        />
        <ProcessSection
          section={getSectionContent(homeData.sections, "process")}
          steps={homeData.process_steps}
        />
        <ZCases
          section={getSectionContent(homeData.sections, "portfolio")}
          cases={homeData.portfolio_cases}
        />
        {/* <WhyZodex
          section={getSectionContent(homeData.sections, "why_zodex")}
          reasons={homeData.reasons}
        /> */}
        {/* <TestimonialsSection
          section={getSectionContent(homeData.sections, "testimonials")}
          testimonials={homeData.testimonials}
        /> */}
        <ZContact
          section={getSectionContent(homeData.sections, "contact")}
          contact={homeData.contact}
          socialLinks={homeData.social_links}
        />
      
    </section>
  );
}
