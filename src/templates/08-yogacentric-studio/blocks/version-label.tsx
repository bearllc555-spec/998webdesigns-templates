import { TEMPLATE_VERSION } from "../theme";

export function VersionLabel() {
  return (
    <div
      className="pointer-events-none fixed top-3 left-3 z-[60] rounded-full px-2 py-0.5 text-[10px] font-semibold tracking-wider"
      style={{
        background: "rgba(19,19,19,0.72)",
        color: "var(--tpl-accent)",
        backdropFilter: "blur(8px)",
      }}
      aria-label={`Template version ${TEMPLATE_VERSION}`}
    >
      {TEMPLATE_VERSION}
    </div>
  );
}
