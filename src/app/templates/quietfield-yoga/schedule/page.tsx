import { ScheduleBlock } from "@/templates/05-quietfield-yoga/blocks/schedule";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/05-quietfield-yoga";

export const metadata = {
  title: "Schedule | Quietfield",
  description: "The week, quietly laid out.",
};

export default function SchedulePage() {
  const { theme, content } = templateModule;
  return (
    <>
      <ScheduleBlock />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
