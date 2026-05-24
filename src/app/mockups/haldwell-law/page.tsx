import { HeroBlock } from "@/templates/01-haldwell-law/blocks/hero";
import { ServicesBlock } from "@/templates/01-haldwell-law/blocks/services";
import { AboutSnippet } from "@/templates/01-haldwell-law/blocks/about-snippet";
import { TestimonialsBlock } from "@/templates/01-haldwell-law/blocks/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/01-haldwell-law";

export default function HaldwellHome() {
  const { theme, content } = templateModule;
  return (
    <>
      <HeroBlock />
      <ServicesBlock compact />
      <AboutSnippet />
      <TestimonialsBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
