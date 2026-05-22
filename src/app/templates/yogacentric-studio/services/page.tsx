import { ServicesBlock } from "@/templates/08-yogacentric-studio/blocks/services";
import { PricingBlock } from "@/templates/08-yogacentric-studio/blocks/pricing";
import { ContactBlock } from "@/templates/08-yogacentric-studio/blocks/contact";

export const metadata = {
  title: "Services | YogaCentric",
  description: "Beginner Yoga, Gentle Flow, and signature Yoga Centric classes in Clifton, NJ.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesBlock />
      <PricingBlock />
      <ContactBlock />
    </>
  );
}
