import { HeroBlock } from "@/templates/02-maple-street-bakery/blocks/hero";
import { ServicesBlock } from "@/templates/02-maple-street-bakery/blocks/services";
import { AboutSnippet } from "@/templates/02-maple-street-bakery/blocks/about-snippet";
import { TestimonialsBlock } from "@/templates/02-maple-street-bakery/blocks/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/02-maple-street-bakery";

export default function MapleHome() {
  const { theme, content } = templateModule;
  return (
    <>
      <HeroBlock />
      <ServicesBlock />
      <AboutSnippet />
      <TestimonialsBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
