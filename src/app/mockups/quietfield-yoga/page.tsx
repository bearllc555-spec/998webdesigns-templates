import { HeroBlock } from "@/templates/05-quietfield-yoga/blocks/hero";
import { ServicesBlock } from "@/templates/05-quietfield-yoga/blocks/services";
import { AboutSnippet } from "@/templates/05-quietfield-yoga/blocks/about-snippet";
import { TestimonialsBlock } from "@/templates/05-quietfield-yoga/blocks/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/05-quietfield-yoga";

export default function QuietfieldHome() {
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
