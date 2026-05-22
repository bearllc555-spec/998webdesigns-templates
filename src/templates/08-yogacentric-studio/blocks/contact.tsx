"use client";

import { theme } from "../theme";
import { content, contactNote } from "../content";

export function ContactBlock() {
  const { business } = content;
  return (
    <section className="py-20 md:py-28" style={{ background: "var(--tpl-card)" }}>
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2
              className="text-4xl leading-tight md:text-5xl"
              style={{
                fontFamily: "var(--tpl-font-display)",
                fontWeight: theme.type.displayWeight,
                letterSpacing: theme.type.displayTracking,
                color: "var(--tpl-ink)",
              }}
            >
              Get in touch with {business.name}
            </h2>
            <ul className="mt-8 space-y-4">
              <li>
                <a
                  href={`tel:${business.phone.replace(/\D/g, "")}`}
                  className="text-lg font-semibold hover:opacity-70"
                  style={{ color: "var(--tpl-ink)" }}
                >
                  {business.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${business.email}`}
                  className="text-base hover:opacity-70"
                  style={{ color: "var(--tpl-muted)" }}
                >
                  {business.email}
                </a>
              </li>
              <li>
                <p className="whitespace-pre-line text-base" style={{ color: "var(--tpl-muted)" }}>
                  {business.address}
                </p>
              </li>
            </ul>
            <div
              className="mt-10 overflow-hidden"
              style={{ borderRadius: "var(--tpl-radius)" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/templates/yogacentric-studio/contact-bg.jpg"
                alt="Yoga studio interior"
                className="aspect-video w-full object-cover"
              />
            </div>
          </div>
          <div
            className="p-7 md:p-9"
            style={{
              background: "var(--tpl-bg)",
              borderRadius: "var(--tpl-radius)",
              border: "1px solid var(--tpl-line)",
            }}
          >
            <h3 className="text-xl font-semibold" style={{ color: "var(--tpl-ink)" }}>
              Send us a message
            </h3>
            <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--tpl-muted)" }}>
              {contactNote}
            </p>
            <form className="mt-8 space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="yc-name" className="mb-1.5 block text-xs font-medium uppercase tracking-wide" style={{ color: "var(--tpl-muted)" }}>
                  Name (required)
                </label>
                <input
                  id="yc-name"
                  type="text"
                  required
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                  style={{
                    background: "var(--tpl-card)",
                    border: "1px solid var(--tpl-line)",
                    borderRadius: 12,
                    color: "var(--tpl-ink)",
                  }}
                />
              </div>
              <div>
                <label htmlFor="yc-email" className="mb-1.5 block text-xs font-medium uppercase tracking-wide" style={{ color: "var(--tpl-muted)" }}>
                  Email (required)
                </label>
                <input
                  id="yc-email"
                  type="email"
                  required
                  className="w-full px-4 py-3 text-sm focus:outline-none"
                  style={{
                    background: "var(--tpl-card)",
                    border: "1px solid var(--tpl-line)",
                    borderRadius: 12,
                    color: "var(--tpl-ink)",
                  }}
                />
              </div>
              <div>
                <label htmlFor="yc-message" className="mb-1.5 block text-xs font-medium uppercase tracking-wide" style={{ color: "var(--tpl-muted)" }}>
                  Message
                </label>
                <textarea
                  id="yc-message"
                  rows={4}
                  className="w-full resize-none px-4 py-3 text-sm focus:outline-none"
                  style={{
                    background: "var(--tpl-card)",
                    border: "1px solid var(--tpl-line)",
                    borderRadius: 12,
                    color: "var(--tpl-ink)",
                  }}
                />
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3.5 text-sm font-semibold transition hover:opacity-90"
                style={{
                  background: "var(--tpl-accent)",
                  color: "var(--tpl-accent-ink)",
                  borderRadius: 999,
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
