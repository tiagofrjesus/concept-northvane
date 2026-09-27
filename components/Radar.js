// Decorative hero visual. Pure SVG + CSS transforms, so it adds no JS and no image weight.
const RINGS = [60, 120, 180, 240];
const BLIPS = [
  { x: 372, y: 190, d: '0s' },
  { x: 205, y: 332, d: '1.4s' },
  { x: 318, y: 402, d: '2.6s' },
  { x: 150, y: 170, d: '3.3s' },
];

export default function Radar() {
  return (
    <div className="radar" aria-hidden="true">
      <div className="radar__sweep" />
      <svg viewBox="0 0 520 520" className="radar__svg">
        {RINGS.map((r) => (
          <circle key={r} cx="260" cy="260" r={r} className="radar__ring" />
        ))}
        <line x1="260" y1="10" x2="260" y2="510" className="radar__axis" />
        <line x1="10" y1="260" x2="510" y2="260" className="radar__axis" />
        {Array.from({ length: 72 }, (_, i) => {
          const a = (i * 5 * Math.PI) / 180;
          const inner = i % 6 === 0 ? 236 : 244;
          return (
            <line
              key={i}
              x1={260 + inner * Math.cos(a)}
              y1={260 + inner * Math.sin(a)}
              x2={260 + 250 * Math.cos(a)}
              y2={260 + 250 * Math.sin(a)}
              className="radar__tick"
            />
          );
        })}
        {BLIPS.map((b) => (
          <g key={`${b.x}-${b.y}`} style={{ animationDelay: b.d }} className="radar__blip">
            <circle cx={b.x} cy={b.y} r="4" />
            <circle cx={b.x} cy={b.y} r="11" className="radar__blip-ring" />
          </g>
        ))}
        <text x="276" y="84" className="radar__label">R 180 KM</text>
        <text x="392" y="182" className="radar__label">TRK 0417</text>
      </svg>
    </div>
  );
}
