export const DEMO_LOCATION = {
  street: "24 Newark Pompton Turnpike",
  city: "Little Falls Township, NJ 07424",
  fullAddress: "24 Newark Pompton Turnpike, Little Falls Township, NJ 07424",
  lat: 40.8815,
  lng: -74.219,
  hours: "Mon – Fri 9am – 5pm",
  phone: "(973) 000-0000",
} as const;

export const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "";
export const GOOGLE_MAPS_MAP_ID = process.env.NEXT_PUBLIC_GOOGLE_MAPS_MAP_ID ?? "";

export function getDirectionsUrl(address: string = DEMO_LOCATION.fullAddress) {
  return `https://maps.google.com/?q=${encodeURIComponent(address)}`;
}

export function getEmbedUrl(zoom = 15, address: string = DEMO_LOCATION.fullAddress) {
  return `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed&z=${zoom}`;
}

type StaticMapOptions = {
  width?: number;
  height?: number;
  zoom?: number;
};

export function getStaticMapUrl({ width = 640, height = 180, zoom = 15 }: StaticMapOptions = {}) {
  if (!GOOGLE_MAPS_API_KEY) return null;

  const { lat, lng } = DEMO_LOCATION;
  const params = new URLSearchParams({
    center: `${lat},${lng}`,
    zoom: String(zoom),
    size: `${width}x${height}`,
    scale: "2",
    markers: `color:0x2563EB|${lat},${lng}`,
    key: GOOGLE_MAPS_API_KEY,
  });

  params.append("style", "feature:poi|visibility:off");
  params.append("style", "feature:transit|visibility:off");
  params.append("style", "saturation:-35");
  params.append("style", "lightness:8");

  return `https://maps.googleapis.com/maps/api/staticmap?${params.toString()}`;
}
