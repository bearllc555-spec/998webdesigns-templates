import { NewPatientSteps } from "@/templates/03-northwind-dental/blocks/new-patient-steps";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/03-northwind-dental";

export const metadata = {
  title: "New patients | Northwind Dental",
  description: "Four steps from booking to a finished visit. About one form to fill out.",
};

export default function NewPatientsPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <section style={{ background: "var(--tpl-bg)" }}>
        <div className="mx-auto max-w-6xl px-5 pt-16 pb-8 md:px-8 md:pt-24 md:pb-12">
          <p
            className="text-xs"
            style={{
              color: "var(--tpl-accent)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontFamily: "var(--tpl-font-body)",
              fontWeight: 600,
            }}
          >
            New patients
          </p>
          <h1
            className="mt-4 max-w-3xl text-5xl leading-[1.05] md:text-6xl"
            style={{
              color: "var(--tpl-ink)",
              fontFamily: "var(--tpl-font-display)",
              fontWeight: theme.type.displayWeight,
              letterSpacing: theme.type.displayTracking,
            }}
          >
            Four steps. Most of them are not steps.
          </h1>
          <p
            className="mt-6 max-w-2xl text-lg leading-relaxed"
            style={{
              color: "var(--tpl-muted)",
              fontFamily: "var(--tpl-font-body)",
            }}
          >
            Booking is online or by phone. Paperwork is digital. You will be in and out in about thirty minutes.
          </p>
        </div>
      </section>
      <NewPatientSteps />
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
