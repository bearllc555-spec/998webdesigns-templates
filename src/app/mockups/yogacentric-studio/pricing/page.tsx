import { PricingBlock } from "@/templates/08-yogacentric-studio/blocks/pricing";
import { FaqBlock } from "@/templates/08-yogacentric-studio/blocks/faq";
import { ContactBlock } from "@/templates/08-yogacentric-studio/blocks/contact";

export const metadata = {
  title: "Plans | YogaCentric",
  description: "Drop-in, class passes, and custom yoga plans at YogaCentric in Clifton, NJ.",
};

export default function PricingPage() {
  return (
    <>
      <PricingBlock />
      <FaqBlock />
      <ContactBlock />
    </>
  );
}
