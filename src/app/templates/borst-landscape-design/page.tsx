import { HeroBlock } from "@/templates/07-borst-landscape-design/blocks/hero";
import { WhyUsBlock } from "@/templates/07-borst-landscape-design/blocks/why-us";
import { FeaturedTestimonial } from "@/templates/07-borst-landscape-design/blocks/featured-testimonial";
import { AboutPhotoBlock } from "@/templates/07-borst-landscape-design/blocks/about-photo";
import { ServicesBlock } from "@/templates/07-borst-landscape-design/blocks/services";
import { PortfolioBlock } from "@/templates/07-borst-landscape-design/blocks/portfolio";
import { ProcessBlock } from "@/templates/07-borst-landscape-design/blocks/process";
import { TestimonialsBlock } from "@/templates/07-borst-landscape-design/blocks/testimonials";
import { CtaDarkBlock } from "@/templates/07-borst-landscape-design/blocks/cta-dark";
import { BlogPreviewBlock } from "@/templates/07-borst-landscape-design/blocks/blog-preview";
import { FooterCtaBlock } from "@/templates/07-borst-landscape-design/blocks/footer-cta";

export default function BorstHome() {
  return (
    <>
      <HeroBlock />
      <FeaturedTestimonial />
      <WhyUsBlock />
      <ServicesBlock />
      <AboutPhotoBlock />
      <PortfolioBlock />
      <ProcessBlock />
      <TestimonialsBlock />
      <CtaDarkBlock />
      <BlogPreviewBlock />
      <FooterCtaBlock />
    </>
  );
}
