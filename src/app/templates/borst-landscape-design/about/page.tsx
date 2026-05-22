import { WhyUsBlock } from "@/templates/07-borst-landscape-design/blocks/why-us";
import { FeaturedTestimonial } from "@/templates/07-borst-landscape-design/blocks/featured-testimonial";
import { FooterCtaBlock } from "@/templates/07-borst-landscape-design/blocks/footer-cta";

export const metadata = {
  title: "About | Borst Landscape & Design",
  description: "An award-winning landscape design-build firm in Allendale, NJ. Founded by Mark Borst in 1989.",
};

export default function AboutPage() {
  return (
    <>
      <FeaturedTestimonial />
      <WhyUsBlock />
      <FooterCtaBlock />
    </>
  );
}
