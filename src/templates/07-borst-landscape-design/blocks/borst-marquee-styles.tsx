export function BorstMarqueeStyles() {
  return (
    <style>{`
      @keyframes borst-marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .borst-marquee-track {
        display: flex;
        width: max-content;
        animation: borst-marquee 50s linear infinite;
      }
      .borst-marquee-wrap:hover .borst-marquee-track {
        animation-play-state: paused;
      }
      @media (prefers-reduced-motion: reduce) {
        .borst-marquee-track {
          animation: none;
          flex-wrap: wrap;
          width: 100%;
        }
      }
    `}</style>
  );
}
