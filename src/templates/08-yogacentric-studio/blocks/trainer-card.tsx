import Link from "next/link";
import type { TrainerListItem } from "../content";

const BASE = "/mockups/yogacentric-studio";

export function TrainerCard({ trainer }: { trainer: TrainerListItem }) {
  const inner = (
    <>
      <div className="overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={trainer.photo}
          alt={trainer.name}
          className="aspect-[3/4] w-full object-cover object-center transition duration-500 ease-out group-hover:scale-105"
        />
      </div>
      <div className="w-full border border-transparent px-4 py-5 text-center transition-colors duration-300 group-hover:border-[#C8D8C8] group-hover:bg-[#C8D8C8]">
        <h2 className="text-xl font-semibold" style={{ color: "var(--tpl-ink)" }}>
          {trainer.name}
        </h2>
        <p className="mt-1 text-sm" style={{ color: "var(--tpl-muted)" }}>
          {trainer.specialty}
        </p>
      </div>
    </>
  );

  if (trainer.slug) {
    return (
      <Link
        href={`${BASE}/trainers/${trainer.slug}`}
        className="group block overflow-hidden"
        style={{ borderRadius: "var(--tpl-radius)" }}
      >
        {inner}
      </Link>
    );
  }

  return (
    <article className="group overflow-hidden" style={{ borderRadius: "var(--tpl-radius)" }}>
      {inner}
    </article>
  );
}
