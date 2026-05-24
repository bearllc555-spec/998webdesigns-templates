import { HeroBlock } from "@/templates/08-yogacentric-studio/blocks/hero";
import { ServicesBlock } from "@/templates/08-yogacentric-studio/blocks/services";
import { CommunityBlock } from "@/templates/08-yogacentric-studio/blocks/community";
import { TrainersBlock } from "@/templates/08-yogacentric-studio/blocks/trainers";
import { BenefitsBlock } from "@/templates/08-yogacentric-studio/blocks/benefits";
import { PricingBlock } from "@/templates/08-yogacentric-studio/blocks/pricing";
import { TestimonialsBlock } from "@/templates/08-yogacentric-studio/blocks/testimonials";
import { FaqBlock } from "@/templates/08-yogacentric-studio/blocks/faq";
import { ContactBlock } from "@/templates/08-yogacentric-studio/blocks/contact";

export default function YogaCentricHome() {
  return (
    <>
      <HeroBlock />
      <ServicesBlock />
      <CommunityBlock />
      <TrainersBlock />
      <BenefitsBlock />
      <PricingBlock />
      <TestimonialsBlock />
      <FaqBlock />
      <ContactBlock />
    </>
  );
}
