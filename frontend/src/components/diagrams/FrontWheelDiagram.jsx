/**
 * Original engineering-style line illustration of the ZEVION front-wheel
 * electric drive concept. Hand-drawn as inline SVG (not a photograph or
 * a third-party product image) so no external branding or specifications
 * are reproduced - purely illustrative of the prototype concept.
 */
export default function FrontWheelDiagram() {
  return (
    <svg
      viewBox="-50 -10 700 480"
      className="w-full h-auto"
      role="img"
      aria-labelledby="frontWheelTitle frontWheelDesc"
    >
      <title id="frontWheelTitle">ZEVION front-wheel electric drive concept diagram</title>
      <desc id="frontWheelDesc">
        Line illustration showing a front fork, wheel, hub motor, axle, brake area and motor cable
        labeled as a prototype concept.
      </desc>

      {/* wheel rim */}
      <circle cx="300" cy="260" r="150" fill="none" stroke="#2a2a2e" strokeWidth="10" />
      <circle cx="300" cy="260" r="150" fill="none" stroke="#d4a638" strokeWidth="2" strokeDasharray="4 10" opacity="0.5" />

      {/* spokes */}
      {Array.from({ length: 12 }).map((_, i) => {
        const angle = (i * Math.PI * 2) / 12;
        const x2 = 300 + Math.cos(angle) * 148;
        const y2 = 260 + Math.sin(angle) * 148;
        return (
          <line key={i} x1="300" y1="260" x2={x2} y2={y2} stroke="#3a3a3e" strokeWidth="2" />
        );
      })}

      {/* hub motor housing */}
      <circle cx="300" cy="260" r="58" fill="#121212" stroke="#d4a638" strokeWidth="3" />
      <circle cx="300" cy="260" r="40" fill="#0a0a0a" stroke="#d4a638" strokeWidth="1.5" opacity="0.7" />
      <circle cx="300" cy="260" r="8" fill="#d4a638" />

      {/* axle */}
      <line x1="300" y1="260" x2="470" y2="150" stroke="#9a9a9f" strokeWidth="4" />
      <circle cx="470" cy="150" r="6" fill="#9a9a9f" />

      {/* fork legs */}
      <line x1="300" y1="260" x2="235" y2="60" stroke="#6f6f74" strokeWidth="10" strokeLinecap="round" />
      <line x1="300" y1="260" x2="360" y2="60" stroke="#6f6f74" strokeWidth="10" strokeLinecap="round" />
      <rect x="215" y="40" width="165" height="26" rx="6" fill="#6f6f74" />

      {/* brake caliper area */}
      <rect x="255" y="200" width="34" height="46" rx="6" fill="#1a1a1c" stroke="#d4a638" strokeWidth="2" />
      <circle cx="272" cy="223" r="4" fill="#d4a638" />

      {/* motor cable */}
      <path
        d="M 340 300 C 400 330, 430 380, 470 410"
        fill="none"
        stroke="#d4a638"
        strokeWidth="3"
        strokeDasharray="2 6"
        strokeLinecap="round"
      />
      <circle cx="470" cy="410" r="5" fill="#d4a638" />

      {/* Labels */}
      <Label x="235" y="30" text="Front Fork" anchor="middle" />
      <Label x="150" y="120" text="Front Wheel" anchor="end" line={[150, 120, 220, 190]} />
      <Label x="470" y="470" text="Motor Cable" anchor="middle" hide />
      <Label x="500" y="410" text="Motor Cable" anchor="start" line={[500, 410, 472, 410]} />
      <Label x="500" y="150" text="Axle" anchor="start" line={[500, 150, 472, 150]} />
      <Label x="120" y="245" text="Electric Hub Motor" anchor="end" line={[120, 245, 248, 258]} />
      <Label x="130" y="330" text="Brake Area" anchor="end" line={[130, 330, 256, 245]} />
    </svg>
  );
}

function Label({ x, y, text, anchor = 'middle', line, hide }) {
  if (hide) return null;
  return (
    <g>
      {line && (
        <line x1={line[0]} y1={line[1]} x2={line[2]} y2={line[3]} stroke="#d4a638" strokeWidth="1" opacity="0.5" />
      )}
      <text
        x={x}
        y={y}
        textAnchor={anchor}
        fill="#f2c464"
        fontSize="14"
        fontFamily="Rajdhani, sans-serif"
        fontWeight="600"
        letterSpacing="0.5"
      >
        {text}
      </text>
    </g>
  );
}
