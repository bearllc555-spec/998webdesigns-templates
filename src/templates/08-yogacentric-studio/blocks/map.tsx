import { CompactMapStrip } from "@/components/maps/compact-map-strip";
import { getEmbedUrl } from "@/lib/maps";

const YOGACENTRIC_ADDRESS = "238 Colfax Ave, Clifton, NJ 07013";

export function MapBlock() {
  return (
    <section>
      <CompactMapStrip
        variant="silver"
        bare
        fullBleed
        mapTitle="YogaCentric location"
        embedUrl={getEmbedUrl(14, YOGACENTRIC_ADDRESS)}
      />
    </section>
  );
}
