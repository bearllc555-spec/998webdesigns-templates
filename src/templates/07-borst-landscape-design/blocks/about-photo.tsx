import { BORST_CONTAINER } from "../borst-ui";

/** why-us.jpg — placed below Services so it does not stack against the hero */
export function AboutPhotoBlock() {
  return (
    <section className="relative z-0" style={{ background: "var(--tpl-bg)" }}>
      <div className={`${BORST_CONTAINER} pb-16 pt-4 md:pb-20 md:pt-6`}>
        <div
          className="relative mx-auto max-w-4xl overflow-hidden"
          style={{ borderRadius: 24, aspectRatio: "16 / 10" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/templates/borst-landscape-design/why-us.jpg"
            alt="Reliable and meticulous landscape work"
            className="block h-full w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
