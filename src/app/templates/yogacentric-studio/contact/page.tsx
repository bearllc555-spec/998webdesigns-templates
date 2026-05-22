import { ContactBlock } from "@/templates/08-yogacentric-studio/blocks/contact";
import { FaqBlock } from "@/templates/08-yogacentric-studio/blocks/faq";

export const metadata = {
  title: "Contact | YogaCentric",
  description: "Book a class or get in touch with YogaCentric at 238 Colfax Ave, Clifton, NJ.",
};

export default function ContactPage() {
  return (
    <>
      <ContactBlock />
      <FaqBlock />
    </>
  );
}
