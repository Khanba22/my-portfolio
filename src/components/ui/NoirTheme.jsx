// Cinematic Noir Theme Constants & Shared UI Primitives
// Palette from the component library's Cinematic Noir theme

export const noir = "#0b0b0b";
export const silver = "#c8c8c8";
export const silverDim = "#6a6a6a";
export const warmHighlight = "#e8d5b5";
export const spotlight = "rgba(232,213,181,0.07)";

// Film grain SVG data URL (shared across all noir sections)
export const filmGrainUrl = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`;

// Reusable film grain overlay
export function FilmGrain() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-[0.04]"
      style={{
        backgroundImage: filmGrainUrl,
        backgroundSize: "150px 150px",
      }}
    />
  );
}

// Letterbox bars (top & bottom)
export function LetterboxBars({ height = "h-3" }) {
  return (
    <>
      <div className={`absolute top-0 left-0 right-0 ${height} z-20 bg-black`} />
      <div className={`absolute bottom-0 left-0 right-0 ${height} z-20 bg-black`} />
    </>
  );
}

// Section divider line
export function NoirDivider({ className = "" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
      <p className="text-[9px] uppercase tracking-[0.3em]" style={{ color: "rgba(200,200,200,0.15)" }}>
        Fin
      </p>
      <div className="h-px flex-1" style={{ backgroundColor: "rgba(200,200,200,0.08)" }} />
    </div>
  );
}
