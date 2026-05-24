import { templateModule } from "@/templates/08-yogacentric-studio";
import { trainers } from "@/templates/08-yogacentric-studio/content";
import { theme } from "@/templates/08-yogacentric-studio/theme";
import { ContactBlock } from "@/templates/08-yogacentric-studio/blocks/contact";
import { TrainerCard } from "@/templates/08-yogacentric-studio/blocks/trainer-card";

export const metadata = {
  title: "Trainers | YogaCentric",
  description: "Meet the instructors at YogaCentric studio in Clifton, NJ.",
};

export default function TrainersPage() {
  return (
    <>
      <section className="py-20 md:py-28" style={{ background: "var(--tpl-bg)" }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <h1
            className="max-w-2xl text-4xl leading-tight md:text-6xl"
            style={{
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
              color: "var(--tpl-ink)",
            }}
          >
            Guided by passion, driven by purpose
          </h1>
          <p className="mt-5 max-w-xl text-base leading-relaxed md:text-lg" style={{ color: "var(--tpl-muted)" }}>
            {templateModule.content.about.body[0]}
          </p>
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {trainers.map((t) => (
              <TrainerCard key={`${t.name}-${t.specialty}`} trainer={t} />
            ))}
          </div>
        </div>
      </section>
      <ContactBlock />
    </>
  );
}
