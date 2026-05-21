import { theme } from "../theme";

const steps = [
  {
    label: "Step 01",
    title: "Book online or by phone",
    body: "Most new patients find a same-week slot. The form takes about ninety seconds.",
  },
  {
    label: "Step 02",
    title: "Bring two things, no paperwork",
    body: "We need your insurance card and your photo ID. Everything else is digital and pre-filled when you arrive.",
  },
  {
    label: "Step 03",
    title: "Cleaning, exam, and a plan",
    body: "We run on a thirty-minute slot. You leave with a clear, written plan and a printed estimate, not a surprise.",
  },
  {
    label: "Step 04",
    title: "Same-day care when you want it",
    body: "If treatment is straightforward and the schedule allows, we can do the work the same day. No second trip required.",
  },
];

export function NewPatientSteps() {
  return (
    <section style={{ background: "var(--tpl-bg)" }}>
      <div className="mx-auto max-w-6xl px-5 py-20 md:px-8 md:py-28">
        <ol className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li
              key={s.title}
              className="p-7"
              style={{
                background: "var(--tpl-card)",
                border: `1px solid var(--tpl-line)`,
                borderRadius: `var(--tpl-radius)`,
              }}
            >
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
                {s.label}
              </p>
              <h3
                className="mt-3 text-xl leading-snug"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: 700,
                  letterSpacing: theme.type.displayTracking,
                }}
              >
                {s.title}
              </h3>
              <p
                className="mt-3 text-sm leading-relaxed"
                style={{
                  color: "var(--tpl-muted)",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
