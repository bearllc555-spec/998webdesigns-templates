"use client";

import type { ReactNode } from "react";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { theme } from "../theme";
import { content, contactNote, socialLinks } from "../content";

const SAGE = "#C8D8C8";
const SAGE_INK = "#131313";

function ContactIconRow({
  href,
  icon: Icon,
  children,
}: {
  href?: string;
  icon: typeof Phone;
  children: ReactNode;
}) {
  const inner = (
    <>
      <span
        className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full"
        style={{ background: "rgba(255,255,255,0.22)" }}
        aria-hidden="true"
      >
        <Icon className="h-4 w-4 text-white" strokeWidth={1.75} />
      </span>
      <span className="text-base font-medium text-white md:text-lg">{children}</span>
    </>
  );

  if (href) {
    return (
      <li>
        <a href={href} className="inline-flex items-center gap-4 transition hover:opacity-80">
          {inner}
        </a>
      </li>
    );
  }

  return (
    <li>
      <div className="inline-flex items-center gap-4">{inner}</div>
    </li>
  );
}

const fieldClass =
  "w-full border-0 border-b bg-transparent py-2.5 text-sm focus:outline-none focus:ring-0";
const fieldStyle = {
  borderColor: "var(--tpl-line)",
  color: "var(--tpl-ink)",
} as const;

export function ContactBlock() {
  const { business } = content;
  const instagram = socialLinks.find((s) => s.label === "Instagram");
  const phoneHref = `tel:${business.phone.replace(/\D/g, "")}`;

  return (
    <section className="py-20 md:py-28" style={{ background: "#59676a" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div
          className="relative overflow-hidden"
          style={{ borderRadius: "var(--tpl-radius)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/templates/yogacentric-studio/community.jpg"
            alt="YogaCentric studio community"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, rgba(19,19,19,0.62) 0%, rgba(19,19,19,0.45) 34%, rgba(19,19,19,0.08) 58%, transparent 72%)",
            }}
            aria-hidden="true"
          />

          <div className="relative grid gap-8 lg:grid-cols-[1fr_minmax(0,28rem)] lg:gap-0 xl:grid-cols-[1fr_30rem]">
            <div className="flex flex-col justify-center p-8 md:p-10 lg:py-11 lg:pl-10 lg:pr-8 xl:pl-12">
              <h2
                className="text-4xl leading-tight text-white md:text-5xl lg:max-w-md"
                style={{
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                }}
              >
                Get in touch with {business.name}
              </h2>
              <ul className="mt-8 space-y-5 md:mt-10">
                <ContactIconRow href={phoneHref} icon={Phone}>
                  {business.phone}
                </ContactIconRow>
                <ContactIconRow href={`mailto:${business.email}`} icon={Mail}>
                  {business.email}
                </ContactIconRow>
                <ContactIconRow icon={MapPin}>
                  <span className="whitespace-pre-line">{business.address}</span>
                </ContactIconRow>
                {instagram ? (
                  <ContactIconRow href={instagram.href} icon={Instagram}>
                    @yogacentricstudio
                  </ContactIconRow>
                ) : null}
              </ul>
            </div>

            <div className="relative p-3 pt-3 md:p-4 lg:pb-5 lg:pl-4 lg:pr-4 lg:pt-4">
              <div
                className="relative w-full p-7 shadow-[0_18px_50px_rgba(19,19,19,0.14)] md:p-8"
                style={{
                  background: "var(--tpl-bg)",
                  borderRadius: "var(--tpl-radius)",
                }}
              >
              <h3
                className="text-xl md:text-2xl"
                style={{
                  fontFamily: "var(--tpl-font-display)",
                  fontWeight: theme.type.displayWeight,
                  letterSpacing: theme.type.displayTracking,
                  color: "var(--tpl-ink)",
                }}
              >
                Send us a message
              </h3>
              <p className="mt-3 text-sm leading-relaxed md:text-base" style={{ color: "var(--tpl-muted)" }}>
                {contactNote}
              </p>
              <form className="mt-8 space-y-7" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="yc-name" className="block text-sm" style={{ color: "var(--tpl-ink)" }}>
                    Name (required)
                  </label>
                  <input
                    id="yc-name"
                    type="text"
                    required
                    className={fieldClass}
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label htmlFor="yc-email" className="block text-sm" style={{ color: "var(--tpl-ink)" }}>
                    Email (required)
                  </label>
                  <input
                    id="yc-email"
                    type="email"
                    required
                    className={fieldClass}
                    style={fieldStyle}
                  />
                </div>
                <div>
                  <label htmlFor="yc-message" className="block text-sm" style={{ color: "var(--tpl-ink)" }}>
                    Message
                  </label>
                  <textarea
                    id="yc-message"
                    rows={3}
                    className={`${fieldClass} min-h-[5.5rem] resize-y`}
                    style={fieldStyle}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex px-8 py-3 text-sm font-semibold transition"
                  style={{
                    background: "var(--tpl-accent)",
                    color: "var(--tpl-accent-ink)",
                    borderRadius: 999,
                    border: "1px solid rgba(19,19,19,0.12)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = SAGE;
                    e.currentTarget.style.color = SAGE_INK;
                    e.currentTarget.style.borderColor = SAGE;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "var(--tpl-accent)";
                    e.currentTarget.style.color = "var(--tpl-accent-ink)";
                    e.currentTarget.style.borderColor = "rgba(19,19,19,0.12)";
                  }}
                >
                  Submit
                </button>
              </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
