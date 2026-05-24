import { HeroBlock } from "@/templates/03-northwind-dental/blocks/hero";
import { ServicesBlock } from "@/templates/03-northwind-dental/blocks/services";
import { AboutSnippet } from "@/templates/03-northwind-dental/blocks/about-snippet";
import { TestimonialsBlock } from "@/templates/03-northwind-dental/blocks/testimonials";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/03-northwind-dental";

export default function NorthwindHome() {
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
