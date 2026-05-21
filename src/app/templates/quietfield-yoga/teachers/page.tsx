import { Portrait as PortraitSvg } from "@/templates/05-quietfield-yoga/images";
import { SectionFrame } from "@/templates/05-quietfield-yoga/blocks/section-frame";
import { CtaBanner } from "@/components/site/cta-banner";
import { templateModule } from "@/templates/05-quietfield-yoga";

const teachers = [
  {
    name: "Maya Holberg",
    role: "Senior teacher, Hatha",
    seed: 1,
    bio: "E-RYT 500. Teaches the standing series with the kind of patience that earns the room. Has not changed her opening sequence in eight years.",
  },
  {
    name: "Jonas Tate",
    role: "Senior teacher, slow Vinyasa",
    seed: 2,
    bio: "E-RYT 500. Comes to the mat from a long career in ceramics. Treats the breath the way a potter treats a wheel: never rushed.",
  },
  {
    name: "Petra Yu",
    role: "Senior teacher, Yin",
    seed: 3,
    bio: "RYT 500, certified Yin under Bernie Clark. Holds the room in silence for hours and somehow makes it feel short.",
  },
  {
    name: "Anne Sigerson",
    role: "Senior teacher, Restorative",
    seed: 4,
    bio: "RYT 500. A former hospice nurse. Quietest voice in the room. Brings extra bolsters and refuses to apologize for it.",
  },
];

export const metadata = {
  title: "Teachers | Quietfield",
  description: "Four senior teachers. No fill-ins.",
};

export default function TeachersPage() {
  const { theme, content } = templateModule;
  return (
    <>
      <SectionFrame label="Teachers">
        <h1
          className="mx-auto max-w-2xl text-center text-4xl leading-tight md:text-6xl"
          style={{
            color: "var(--tpl-ink)",
            fontFamily: "var(--tpl-font-display)",
            fontWeight: theme.type.displayWeight,
            letterSpacing: theme.type.displayTracking,
          }}
        >
          Four senior teachers. No fill-ins.
        </h1>
        <div className="mt-16 grid gap-16 md:grid-cols-2 md:gap-x-12 md:gap-y-20">
          {teachers.map((t) => (
            <article key={t.name} className="text-center md:text-left">
              <div className="mx-auto md:mx-0 md:max-w-xs">
                <PortraitSvg seed={t.seed} theme={theme} className="h-auto w-full" />
              </div>
              <h2
                className="mt-7 text-2xl"
                style={{
                  color: "var(--tpl-ink)",
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                }}
              >
                {t.name}
              </h2>
              <p
                className="mt-2 text-xs"
                style={{
                  color: "var(--tpl-accent)",
                  letterSpacing: "0.28em",
                  textTransform: "uppercase",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {t.role}
              </p>
              <p
                className="mt-5 max-w-md text-base leading-relaxed"
                style={{
                  color: "var(--tpl-muted)",
                  fontFamily: "var(--tpl-font-body)",
                }}
              >
                {t.bio}
              </p>
            </article>
          ))}
        </div>
      </SectionFrame>
      <CtaBanner theme={theme} content={content} />
    </>
  );
}
