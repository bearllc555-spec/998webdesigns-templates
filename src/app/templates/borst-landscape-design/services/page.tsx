import { ServicesBlock } from "@/templates/07-borst-landscape-design/blocks/services";
import { ProcessBlock } from "@/templates/07-borst-landscape-design/blocks/process";
import { FooterCtaBlock } from "@/templates/07-borst-landscape-design/blocks/footer-cta";

export const metadata = {
  title: "Services | Borst Landscape & Design",
  description: "Design, build, and maintenance services for residential and commercial properties in Bergen County, NJ.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesBlock />
      <ProcessBlock />
      <FooterCtaBlock />
    </>
  );
}
