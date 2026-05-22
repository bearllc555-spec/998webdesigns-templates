import { PortfolioBlock } from "@/templates/07-borst-landscape-design/blocks/portfolio";
import { FooterCtaBlock } from "@/templates/07-borst-landscape-design/blocks/footer-cta";

export const metadata = {
  title: "Portfolio | Borst Landscape & Design",
  description: "Selected residential and commercial landscape projects across Bergen County and northern New Jersey.",
};

export default function PortfolioPage() {
  return (
    <>
      <PortfolioBlock />
      <FooterCtaBlock />
    </>
  );
}
