import { HeroBlock } from "@/templates/07-borst-landscape-design/blocks/hero";
import { ServicesBlock } from "@/templates/07-borst-landscape-design/blocks/services";
import { AboutSnippet } from "@/templates/07-borst-landscape-design/blocks/about-snippet";
import { ProcessBlock } from "@/templates/07-borst-landscape-design/blocks/process";
import { TestimonialsBlock } from "@/templates/07-borst-landscape-design/blocks/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/07-borst-landscape-design";

export default function BorstHome() {
  const { theme, content } = templateModule;
  return (
    <>
      <HeroBlock />
      <ServicesBlock />
      <AboutSnippet />
      <ProcessBlock />
      <TestimonialsBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
