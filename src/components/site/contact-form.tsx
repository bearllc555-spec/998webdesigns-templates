"use client";

import { useState, type FormEvent } from "react";
import { formatPhoneInput } from "@/lib/format-phone";
import type { TemplateTheme } from "@/templates/types";

export function ContactForm({
  theme,
  submitLabel = "Send message",
  subject = "General inquiry",
  inputBackground = "var(--tpl-card)",
  reachTimeOptions,
}: {
  theme: TemplateTheme;
  submitLabel?: string;
  subject?: string;
  inputBackground?: string;
  reachTimeOptions?: string[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [phone, setPhone] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitted(true);
      setSubmitting(false);
    }, 500);
  }

  if (submitted) {
    return (
      <div
        className="px-6 py-10 text-center"
        style={{
          background: "var(--tpl-card)",
          border: `1px solid var(--tpl-line)`,
          borderRadius: `var(--tpl-radius)`,
        }}
      >
        <p
          className="text-2xl"
          style={{
            color: "var(--tpl-ink)",
            fontFamily: "var(--tpl-font-display)",
            fontWeight: theme.type.displayWeight,
          }}
        >
          Thank you. We will be in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-4"
      noValidate
    >
      <input type="hidden" name="subject" value={subject} />
      <div className="grid gap-4 md:grid-cols-2">
        <Field theme={theme} label="Full name" name="name" required type="text" inputBackground={inputBackground} />
        <Field theme={theme} label="Email" name="email" required type="email" inputBackground={inputBackground} />
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <PhoneField
          theme={theme}
          label="Phone"
          name="phone"
          value={phone}
          onChange={setPhone}
          inputBackground={inputBackground}
        />
        {reachTimeOptions ? (
          <SelectField
            theme={theme}
            label="Best time to reach you"
            name="when"
            options={reachTimeOptions}
            inputBackground={inputBackground}
          />
        ) : (
          <Field theme={theme} label="Best time to reach you" name="when" type="text" inputBackground={inputBackground} />
        )}
      </div>
      <FieldArea theme={theme} label="What can we help with?" name="message" rows={5} required inputBackground={inputBackground} />
      <button
        type="submit"
        disabled={submitting}
        className="mt-2 inline-flex items-center justify-center px-6 py-3 text-sm transition disabled:opacity-60"
        style={{
          background: "var(--tpl-accent)",
          color: "var(--tpl-accent-ink)",
          borderRadius: `var(--tpl-radius)`,
          fontFamily: "var(--tpl-font-body)",
          fontWeight: 600,
        }}
      >
        {submitting ? "Sending..." : submitLabel}
      </button>
    </form>
  );
}

function PhoneField({
  theme,
  label,
  name,
  value,
  onChange,
  required,
  inputBackground,
}: {
  theme: TemplateTheme;
  label: string;
  name: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  inputBackground: string;
}) {
  const fieldStyle = {
    background: inputBackground,
    color: "var(--tpl-ink)",
    border: `1px solid var(--tpl-line)`,
    borderRadius: `var(--tpl-radius)`,
    fontFamily: "var(--tpl-font-body)",
  };

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-xs uppercase"
        style={{
          color: "var(--tpl-muted)",
          letterSpacing: "0.14em",
          fontFamily: "var(--tpl-font-body)",
        }}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        name={name}
        type="tel"
        value={value}
        onChange={(e) => onChange(formatPhoneInput(e.target.value))}
        placeholder="(000) 000-0000"
        autoComplete="tel"
        inputMode="tel"
        required={required}
        className="px-3 py-2.5 text-sm transition focus:outline-none"
        style={fieldStyle}
        aria-required={required}
      />
    </label>
  );
}

function Field({
  theme,
  label,
  name,
  required,
  type,
  inputBackground,
}: {
  theme: TemplateTheme;
  label: string;
  name: string;
  required?: boolean;
  type: string;
  inputBackground: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-xs uppercase"
        style={{
          color: "var(--tpl-muted)",
          letterSpacing: "0.14em",
          fontFamily: "var(--tpl-font-body)",
        }}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <input
        name={name}
        type={type}
        required={required}
        className="px-3 py-2.5 text-sm transition focus:outline-none"
        style={{
          background: inputBackground,
          color: "var(--tpl-ink)",
          border: `1px solid var(--tpl-line)`,
          borderRadius: `var(--tpl-radius)`,
          fontFamily: "var(--tpl-font-body)",
        }}
        aria-required={required}
      />
    </label>
  );
}

function SelectField({
  theme,
  label,
  name,
  options,
  required,
  inputBackground,
}: {
  theme: TemplateTheme;
  label: string;
  name: string;
  options: string[];
  required?: boolean;
  inputBackground: string;
}) {
  const fieldStyle = {
    background: inputBackground,
    color: "var(--tpl-ink)",
    border: `1px solid var(--tpl-line)`,
    borderRadius: `var(--tpl-radius)`,
    fontFamily: "var(--tpl-font-body)",
  };

  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-xs uppercase"
        style={{
          color: "var(--tpl-muted)",
          letterSpacing: "0.14em",
          fontFamily: "var(--tpl-font-body)",
        }}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <select
        name={name}
        required={required}
        defaultValue=""
        className="px-3 py-2.5 text-sm transition focus:outline-none"
        style={fieldStyle}
        aria-required={required}
      >
        <option value="" disabled>
          Select a time
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </label>
  );
}

function FieldArea({
  theme,
  label,
  name,
  rows,
  required,
  inputBackground,
}: {
  theme: TemplateTheme;
  label: string;
  name: string;
  rows: number;
  required?: boolean;
  inputBackground: string;
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span
        className="text-xs uppercase"
        style={{
          color: "var(--tpl-muted)",
          letterSpacing: "0.14em",
          fontFamily: "var(--tpl-font-body)",
        }}
      >
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </span>
      <textarea
        name={name}
        rows={rows}
        required={required}
        className="px-3 py-2.5 text-sm transition focus:outline-none"
        style={{
          background: inputBackground,
          color: "var(--tpl-ink)",
          border: `1px solid var(--tpl-line)`,
          borderRadius: `var(--tpl-radius)`,
          fontFamily: "var(--tpl-font-body)",
          resize: "vertical",
        }}
        aria-required={required}
      />
    </label>
  );
}
