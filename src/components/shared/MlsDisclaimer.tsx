/** IDX attribution required wherever MLS listings render (wording from the RealScout account's GLVAR disclaimer). */
export function MlsDisclaimer({ className = '' }: { className?: string }) {
  return (
    <p className={`mt-3 text-center text-xs text-[var(--text-light)] ${className}`}>
      © {new Date().getFullYear()} Greater Las Vegas Association of Realtors (GLVAR). Information Deemed Reliable
      But Not Guaranteed. Listings provided via RealScout.
    </p>
  );
}
