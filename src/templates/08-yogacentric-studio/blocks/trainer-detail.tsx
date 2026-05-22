import { ArrowRight } from "lucide-react";
import { theme } from "../theme";
import { extendedPalette } from "../theme";
import type { TrainerProfile } from "../content";
import { YcBtn } from "./yc-btn";
import { TrainerDetailTestimonials } from "./trainer-detail-testimonials";

const BASE = "/templates/yogacentric-studio";

export function TrainerDetailBlock({ profile }: { profile: TrainerProfile }) {
  return (
    <>
      <section className="py-16 md:py-24" style={{ background: "var(--tpl-bg)" }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p
                className="text-sm font-semibold uppercase"
                style={{ color: "var(--tpl-muted)", letterSpacing: "0.14em" }}
              >
                {profile.specialty}
              </p>
              <h1
                className="mt-4 text-4xl leading-tight md:text-5xl lg:text-6xl"
                style={{
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                  color: "var(--tpl-ink)",
                }}
              >
                {profile.name}
              </h1>
              <p className="mt-6 text-base leading-relaxed md:text-lg" style={{ color: "var(--tpl-muted)" }}>
                {profile.bio}
              </p>
              <YcBtn href={`${BASE}/contact`} className="mt-8">
                Book a consultation
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </YcBtn>
            </div>
            <div className="overflow-hidden lg:sticky lg:top-28" style={{ borderRadius: "var(--tpl-radius)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.photo}
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: extendedPalette.blueSoft }}>
        <div className="mx-auto max-w-6xl px-5 py-14 md:px-8 md:py-16">
          <div
            className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12"
            style={{
              background: "var(--tpl-bg)",
              borderRadius: "var(--tpl-radius)",
              border: "1px solid var(--tpl-line)",
              padding: "clamp(1.5rem, 4vw, 2.5rem)",
            }}
          >
            <div>
              <h2
                className="text-2xl md:text-3xl"
                style={{
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                  color: "var(--tpl-ink)",
                }}
              >
                {profile.coachingTitle}
              </h2>
              <p className="mt-4 text-base leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
                {profile.coachingBody}
              </p>
            </div>
            <div className="flex flex-col items-start gap-4 md:items-end">
              <YcBtn href={`${BASE}/trainers`}>
                Explore more
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </YcBtn>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: "var(--tpl-bg)" }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden" style={{ borderRadius: "var(--tpl-radius)" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={profile.galleryImages[0]}
                alt="YogaCentric studio"
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <div>
              <h2
                className="text-3xl leading-tight md:text-4xl"
                style={{
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                  color: "var(--tpl-ink)",
                }}
              >
                {profile.servicesHeadline}
              </h2>
              <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
                {profile.servicesIntro}
              </p>
              <ul className="mt-10 space-y-8">
                {profile.offeredServices.map((s) => (
                  <li
                    key={s.title}
                    className="border-t pt-8 first:border-t-0 first:pt-0"
                    style={{ borderColor: "var(--tpl-line)" }}
                  >
                    <h3 className="text-lg font-semibold" style={{ color: "var(--tpl-ink)" }}>
                      {s.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed md:text-base" style={{ color: "var(--tpl-muted)" }}>
                      {s.description}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28" style={{ background: extendedPalette.sectionAlt }}>
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-2xl">
            <h2
              className="text-4xl leading-tight md:text-5xl"
              style={{
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                color: "var(--tpl-ink)",
              }}
            >
              Moments from our yoga journey
            </h2>
            <p className="mt-5 text-base leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
              We strive to create a welcoming environment where everyone can thrive.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
            {profile.galleryImages.map((src) => (
              <div
                key={src}
                className="overflow-hidden"
                style={{ borderRadius: "var(--tpl-radius)" }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" className="aspect-square w-full object-cover" />
              </div>
            ))}
          </div>
          <TrainerDetailTestimonials items={profile.testimonials} />
        </div>
      </section>
    </>
  );
}
