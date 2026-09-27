export default function Logo({ size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M16 2 L29 28 L16 21 L3 28 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M16 9 L16 21" stroke="var(--accent)" strokeWidth="2" />
    </svg>
  );
}
