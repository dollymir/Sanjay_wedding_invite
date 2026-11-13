import React from 'react';

export const GaneshaIcon: React.FC<{ className?: string; size?: number }> = ({ className = "w-16 h-16", size }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className} 
    style={size ? { width: size, height: size } : undefined}
    fill="currentColor"
  >
    {/* Sanctified Lord Ganesha vector silhouette with crown, trunk, modak & tusk */}
    <g className="ganesha-drawing">
      {/* Crown / Mukut */}
      <path d="M50 8 L54 18 L62 14 L58 24 L64 28 L50 32 L36 28 L42 24 L38 14 L46 18 Z" fill="#D8B56D" />
      <circle cx="50" cy="14" r="2" fill="#801F3D" />
      {/* Tilak */}
      <path d="M47 34 Q50 32 53 34 Q53 42 50 44 Q47 42 47 34 Z" fill="#801F3D" />
      <circle cx="50" cy="38" r="1.5" fill="#F4A340" />
      {/* Head & Ears */}
      <path d="M36 30 C22 30 18 42 24 52 C27 58 34 60 38 56" fill="none" stroke="#D8B56D" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M64 30 C78 30 82 42 76 52 C73 58 66 60 62 56" fill="none" stroke="#D8B56D" strokeWidth="2.5" strokeLinecap="round" />
      {/* Eyes */}
      <circle cx="43" cy="40" r="1.5" fill="#571C35" />
      <circle cx="57" cy="40" r="1.5" fill="#571C35" />
      {/* Trunk graceful curve */}
      <path d="M50 44 Q50 62 56 68 Q64 74 68 66 Q69 60 62 60" fill="none" stroke="#D8B56D" strokeWidth="3" strokeLinecap="round" />
      {/* Single full Tusk & Broken Tusk */}
      <path d="M44 48 L40 54" stroke="#FFF6E9" strokeWidth="2" strokeLinecap="round" />
      <path d="M56 48 L58 52" stroke="#FFF6E9" strokeWidth="2" strokeLinecap="round" />
      {/* Modak in palm */}
      <circle cx="34" cy="64" r="3.5" fill="#F4A340" />
      <path d="M30 68 Q34 67 38 68 Q36 74 30 72 Z" fill="#D8B56D" />
      {/* Om / Sacred aura ring */}
      <circle cx="50" cy="50" r="44" fill="none" stroke="#D8B56D" strokeWidth="1" strokeDasharray="3 3" opacity="0.6" />
      <circle cx="50" cy="50" r="47" fill="none" stroke="#D8B56D" strokeWidth="0.5" opacity="0.4" />
    </g>
  </svg>
);

export const KalashIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Auspicious Coconut & Mango Leaves */}
    <path d="M50 12 C44 26 50 36 50 36 C50 36 56 26 50 12 Z" fill="#24765B" />
    <path d="M38 18 C38 28 48 36 48 36 C48 36 42 24 38 18 Z" fill="#38A180" />
    <path d="M62 18 C62 28 52 36 52 36 C52 36 58 24 62 18 Z" fill="#38A180" />
    <circle cx="50" cy="28" r="10" fill="#9F7E39" stroke="#D8B56D" strokeWidth="2" />
    {/* Pot (Lota / Kalash) */}
    <path d="M40 38 L60 38 L65 46 C72 58 70 74 58 80 L42 80 C30 74 28 58 35 46 Z" fill="#D8B56D" stroke="#9F7E39" strokeWidth="2" />
    {/* Swastika / Auspicious Mark */}
    <path d="M50 54 L50 68 M43 61 L57 61 M43 54 L43 61 M57 61 L57 68 M50 54 L57 54 M50 68 L43 68" stroke="#801F3D" strokeWidth="2" strokeLinecap="round" />
    {/* Base */}
    <path d="M42 80 L58 80 L62 86 L38 86 Z" fill="#9F7E39" />
  </svg>
);

export const DiyaIcon: React.FC<{ className?: string }> = ({ className = "w-8 h-8" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Flame */}
    <path d="M50 14 C56 28 66 38 66 50 C66 60 58 66 50 66 C42 66 34 60 34 50 C34 38 44 28 50 14 Z" fill="#F4A340" />
    <path d="M50 26 C53 34 58 42 58 50 C58 56 54 60 50 60 C46 60 42 56 42 50 C42 42 47 34 50 26 Z" fill="#FFF6E9" />
    {/* Clay / Brass Diya base */}
    <path d="M20 58 Q50 64 80 58 Q88 64 78 78 Q50 88 22 78 Q12 64 20 58 Z" fill="#D8B56D" stroke="#9F7E39" strokeWidth="2" />
    <path d="M35 78 L65 78 L68 84 L32 84 Z" fill="#9F7E39" />
  </svg>
);

export const JhulelalIcon: React.FC<{ className?: string }> = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Lord Jhulelal revered Baharan Saheb symbols: Divine Fish, Sacred Flame, Red Chunri */}
    {/* Aura */}
    <circle cx="50" cy="50" r="44" stroke="#D8B56D" strokeWidth="2" strokeDasharray="4 2" fill="none" />
    {/* Sacred Fish (Pallo) on sacred Sindhu River waves */}
    <path d="M20 74 Q50 62 80 74 C75 80 60 84 50 82 C40 84 25 80 20 74 Z" fill="#D8B56D" stroke="#9F7E39" strokeWidth="1.5" />
    <circle cx="70" cy="74" r="1.5" fill="#571C35" />
    {/* River waves */}
    <path d="M12 84 Q30 78 50 84 Q70 90 88 84" stroke="#38A180" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M16 90 Q34 84 50 90 Q66 96 84 90" stroke="#38A180" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    {/* Akho / Baharan Jyot */}
    <path d="M35 48 C35 34 50 22 50 22 C50 22 65 34 65 48 C65 58 58 64 50 64 C42 64 35 58 35 48 Z" fill="#F4A340" />
    <circle cx="50" cy="46" r="6" fill="#FFF6E9" />
    <path d="M42 60 L58 60 L62 68 L38 68 Z" fill="#801F3D" />
    {/* Red Chunri Flag on top */}
    <path d="M50 14 L50 24 M50 14 L62 18 L50 22" stroke="#801F3D" strokeWidth="2" fill="#801F3D" />
  </svg>
);

export const ShehnaiDholIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Crossed Shehnai & Dhol */}
    {/* Dhol */}
    <ellipse cx="44" cy="54" rx="14" ry="24" transform="rotate(-25 44 54)" fill="#801F3D" stroke="#D8B56D" strokeWidth="2" />
    <path d="M34 32 L66 46 L58 78 L26 64 Z" fill="#571C35" opacity="0.6" />
    <path d="M34 32 L58 78 M42 36 L62 72 M50 40 L66 66" stroke="#D8B56D" strokeWidth="1" />
    {/* Shehnai pipe */}
    <path d="M24 82 L76 28 L82 34 L30 88 Z" fill="#D8B56D" stroke="#9F7E39" strokeWidth="1.5" />
    <path d="M74 24 L86 20 L88 36 L76 32 Z" fill="#F4A340" stroke="#9F7E39" strokeWidth="1.5" />
    <circle cx="70" cy="36" r="2" fill="#571C35" />
    <circle cx="64" cy="42" r="2" fill="#571C35" />
    <circle cx="58" cy="48" r="2" fill="#571C35" />
  </svg>
);

export const RingsIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Intertwined Engagement Rings */}
    <circle cx="42" cy="54" r="22" stroke="#D8B56D" strokeWidth="4" />
    <circle cx="58" cy="54" r="22" stroke="#E85D8F" strokeWidth="4" />
    {/* Solitaire Diamond */}
    <polygon points="58,26 66,34 50,34" fill="#FFF6E9" stroke="#D8B56D" strokeWidth="1.5" />
    <polygon points="58,26 50,34 58,42 66,34" fill="#F4E3B5" opacity="0.8" />
    {/* Sparkles */}
    <path d="M58 14 L60 22 L68 24 L60 26 L58 34 L56 26 L48 24 L56 22 Z" fill="#D8B56D" />
  </svg>
);

export const MandapIcon: React.FC<{ className?: string }> = ({ className = "w-10 h-10" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none">
    {/* Indian Wedding Mandap Canopy */}
    <path d="M15 36 Q50 18 85 36" stroke="#801F3D" strokeWidth="3" fill="none" />
    <path d="M20 38 Q50 24 80 38" stroke="#D8B56D" strokeWidth="2" fill="none" />
    {/* Pillars */}
    <rect x="22" y="38" width="6" height="46" rx="2" fill="#D8B56D" stroke="#9F7E39" strokeWidth="1" />
    <rect x="72" y="38" width="6" height="46" rx="2" fill="#D8B56D" stroke="#9F7E39" strokeWidth="1" />
    {/* Floral Hanging Toran */}
    <circle cx="34" cy="42" r="3" fill="#E85D8F" />
    <circle cx="44" cy="40" r="3" fill="#F4A340" />
    <circle cx="56" cy="40" r="3" fill="#E85D8F" />
    <circle cx="66" cy="42" r="3" fill="#F4A340" />
    {/* Sacred Fire (Havan Kund) in center */}
    <polygon points="40,78 60,78 66,86 34,86" fill="#9F7E39" stroke="#D8B56D" strokeWidth="1.5" />
    <path d="M50 64 C54 70 56 74 56 78 C56 81 53 83 50 83 C47 83 44 81 44 78 C44 74 46 70 50 64 Z" fill="#F4A340" />
    <circle cx="50" cy="74" r="2.5" fill="#FFF6E9" />
  </svg>
);

export const ToranBorder: React.FC<{ className?: string }> = ({ className = "w-full h-8" }) => (
  <svg viewBox="0 0 1200 40" className={className} preserveAspectRatio="none" fill="none">
    <path d="M0 6 Q150 24 300 6 Q450 24 600 6 Q750 24 900 6 Q1050 24 1200 6" stroke="#D8B56D" strokeWidth="2" />
    {/* Mango leaves & Marigolds along the line */}
    {Array.from({ length: 9 }).map((_, i) => (
      <g key={i} transform={`translate(${65 + i * 135}, 12)`}>
        <path d="M0 0 C-6 10 0 20 0 24 C0 20 6 10 0 0 Z" fill="#24765B" />
        <circle cx="0" cy="14" r="5" fill={i % 2 === 0 ? "#F4A340" : "#E85D8F"} />
        <circle cx="0" cy="14" r="2.5" fill="#FFF6E9" />
      </g>
    ))}
  </svg>
);

export const MandalaPattern: React.FC<{ className?: string }> = ({ className = "w-64 h-64" }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none">
    <circle cx="100" cy="100" r="92" stroke="#D8B56D" strokeWidth="1" strokeDasharray="3 3" opacity="0.4" />
    <circle cx="100" cy="100" r="76" stroke="#D8B56D" strokeWidth="1.5" opacity="0.5" />
    <circle cx="100" cy="100" r="56" stroke="#D8B56D" strokeWidth="1" opacity="0.6" />
    <circle cx="100" cy="100" r="32" stroke="#D8B56D" strokeWidth="1.5" opacity="0.7" />
    {/* Petals */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 * Math.PI) / 180;
      const x1 = 100 + Math.cos(angle) * 32;
      const y1 = 100 + Math.sin(angle) * 32;
      const x2 = 100 + Math.cos(angle) * 76;
      const y2 = 100 + Math.sin(angle) * 76;
      return (
        <path
          key={i}
          d={`M${x1} ${y1} Q${100 + Math.cos(angle + 0.25) * 58} ${100 + Math.sin(angle + 0.25) * 58} ${x2} ${y2}`}
          stroke="#D8B56D"
          strokeWidth="1"
          opacity="0.5"
        />
      );
    })}
  </svg>
);
