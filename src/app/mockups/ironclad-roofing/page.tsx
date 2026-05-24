import { HeroBlock } from "@/templates/04-ironclad-roofing/blocks/hero";
import { StatStrip } from "@/templates/04-ironclad-roofing/blocks/stat-strip";
import { ServicesBlock } from "@/templates/04-ironclad-roofing/blocks/services";
import { AboutSnippet } from "@/templates/04-ironclad-roofing/blocks/about-snippet";
import { TestimonialsBlock } from "@/templates/04-ironclad-roofing/blocks/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/04-ironclad-roofing";

export default function IroncladHome() {
  const { theme, content } = templateModule;
  return (
    <>
      <HeroBlock />
      <StatStrip />
      <ServicesBlock />
      <AboutSnippet />
      <TestimonialsBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
