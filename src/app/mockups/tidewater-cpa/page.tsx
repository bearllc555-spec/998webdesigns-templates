import { HeroBlock } from "@/templates/06-tidewater-cpa/blocks/hero";
import { StatBlock } from "@/templates/06-tidewater-cpa/blocks/stat-block";
import { ServicesBlock } from "@/templates/06-tidewater-cpa/blocks/services";
import { AboutSnippet } from "@/templates/06-tidewater-cpa/blocks/about-snippet";
import { TestimonialsBlock } from "@/templates/06-tidewater-cpa/blocks/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/06-tidewater-cpa";

export default function TidewaterHome() {
  const { theme, content } = templateModule;
  return (
    <>
      <HeroBlock />
      <StatBlock />
      <ServicesBlock />
      <AboutSnippet />
      <TestimonialsBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
