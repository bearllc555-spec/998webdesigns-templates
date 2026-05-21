import { SectionFrame } from "./section-frame";
import { weeklySchedule } from "../content";
import { theme } from "../theme";

export function ScheduleBlock() {
  return (
    <SectionFrame label="Schedule">
      <h2
        className="mx-auto max-w-2xl text-center text-3xl leading-snug md:text-5xl"
        style={{
          color: "var(--tpl-ink)",
          fontFamily: "var(--tpl-font-display)",
          fontWeight: theme.type.displayWeight,
          letterSpacing: theme.type.displayTracking,
        }}
      >
        The week, quietly laid out.
      </h2>
      <p
        className="mx-auto mt-7 max-w-xl text-center text-base leading-relaxed"
        style={{
          color: "var(--tpl-muted)",
          fontFamily: "var(--tpl-font-body)",
        }}
      >
        Walk in for any class. Reserve a mat in advance if you prefer. The studio holds twelve, never thirteen.
      </p>
      <div className="mt-16 space-y-12">
        {weeklySchedule.map((d) => (
          <div key={d.day}>
            <div className="flex items-baseline gap-6">
              <p
                className="text-xs"
                style={{
                  color: "var(--tpl-accent)",
                  letterSpacing: "0.32em",
                  textTransform: "uppercase",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {d.day}
              </p>
              <span
                className="h-px flex-1"
                style={{ background: "var(--tpl-line)" }}
                aria-hidden="true"
              />
            </div>
            <ul className="mt-5 space-y-3">
              {d.rows.map((r) => (
                <li
                  key={`${d.day}-${r.time}`}
                  className="grid grid-cols-[5.5rem_1fr_auto] items-baseline gap-4 text-base"
                  style={{ color: "var(--tpl-ink)" }}
                >
                  <span
                    className="tabular-nums"
                    style={{
                      color: "var(--tpl-muted)",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {r.time}
                  </span>
                  <span
                    className="text-lg"
                    style={{
                      fontFamily: "var(--tpl-font-display)",
                      fontWeight: theme.type.displayWeight,
                    }}
                  >
                    {r.title}
                  </span>
                  <span
                    className="text-xs"
                    style={{
                      color: "var(--tpl-muted)",
                      letterSpacing: "0.18em",
                      textTransform: "uppercase",
                      fontFamily: "var(--tpl-font-body)",
                    }}
                  >
                    {r.teacher}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </SectionFrame>
  );
}
