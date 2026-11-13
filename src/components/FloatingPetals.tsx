import React, { useState, useMemo } from 'react';
import { Flower2 } from 'lucide-react';

export const FloatingPetals: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(true);

  // Generate deterministic petals with random delays and positions
  const petals = useMemo(() => {
    return Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: `${(i * 7.5 + (i % 3) * 4) % 96}%`,
      delay: `${(i * 1.8) % 15}s`,
      duration: `${14 + (i % 5) * 3}s`,
      size: 16 + (i % 4) * 6,
      color: i % 2 === 0 ? '#E85D8F' : '#F4A340', // Rani Pink or Saffron
      opacity: 0.65 + (i % 3) * 0.1,
    }));
  }, []);

  if (!isEnabled) {
    return (
      <button
        onClick={() => setIsEnabled(true)}
        className="fixed bottom-6 left-6 z-40 p-2 rounded-full bg-ivory/80 border border-gold/40 text-burgundy/60 hover:text-maroon shadow-md text-xs backdrop-blur-sm transition-all"
        title="Enable Falling Rose Petals"
      >
        <Flower2 className="w-4 h-4" />
      </button>
    );
  }

  return (
    <>
      <div className="pointer-events-none fixed inset-0 overflow-hidden z-20">
        {petals.map((petal) => (
          <div
            key={petal.id}
            className="petal-particle"
            style={{
              left: petal.left,
              animationDelay: petal.delay,
              animationDuration: petal.duration,
              width: `${petal.size}px`,
              height: `${petal.size}px`,
            }}
          >
            <svg
              viewBox="0 0 30 30"
              style={{ width: '100%', height: '100%', opacity: petal.opacity }}
            >
              {/* Organic curved rose petal shape */}
              <path
                d="M15 2 C22 2 28 8 28 16 C28 24 20 28 15 28 C10 28 2 24 2 16 C2 8 8 2 15 2 Z"
                fill={petal.color}
              />
              <path
                d="M15 6 C19 10 21 16 19 22"
                stroke="#FFF6E9"
                strokeWidth="1"
                opacity="0.4"
                fill="none"
              />
            </svg>
          </div>
        ))}
      </div>

      {/* Subtle toggle button */}
      <button
        onClick={() => setIsEnabled(false)}
        className="fixed bottom-6 left-6 z-40 p-2 rounded-full bg-ivory/80 border border-gold/40 text-rani hover:text-maroon shadow-md backdrop-blur-sm transition-all"
        title="Pause Petal Animation"
      >
        <Flower2 className="w-4 h-4 animate-spin-slow" />
      </button>
    </>
  );
};
